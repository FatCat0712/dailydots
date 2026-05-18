import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import JournalForm from '../components/journal/JournalForm'
import { getEntryByDate, upsertEntry } from '../services/journalStorageService'
import { getTodayDate, isCalendarDate } from '../utils/date'

const defaultMood = 'Calm'
const quickDateOptionsCount = 7

type QuickDateOption = {
  value: string
  label: string
  hasEntry: boolean
}

function toCalendarDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export default function AddJournalPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const today = getTodayDate()
  const initialDate = searchParams.get('date')
  const resolvedInitialDate = initialDate && isCalendarDate(initialDate) ? initialDate : today
  const initialEntry = getEntryByDate(resolvedInitialDate)

  const [selectedDate, setSelectedDate] = useState(resolvedInitialDate)
  const [mood, setMood] = useState(initialEntry?.mood ?? defaultMood)
  const [text, setText] = useState(initialEntry?.text ?? '')
  const [isUpdating, setIsUpdating] = useState(Boolean(initialEntry))
  const [statusMessage, setStatusMessage] = useState('')

  const quickDateOptions = useMemo<QuickDateOption[]>(() => {
    const todayDate = new Date(`${today}T00:00:00`)

    return Array.from({ length: quickDateOptionsCount }, (_, index) => {
      const nextDate = new Date(todayDate)
      nextDate.setDate(todayDate.getDate() - index)

      const value = toCalendarDate(nextDate)

      return {
        value,
        label: new Intl.DateTimeFormat('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }).format(nextDate),
        hasEntry: Boolean(getEntryByDate(value)),
      }
    })
  }, [today])

  function handleDateChange(nextDate: string): void {
    setSelectedDate(nextDate)
    setSearchParams({ date: nextDate })
    setStatusMessage('')

    const existingEntry = getEntryByDate(nextDate)

    if (!existingEntry) {
      setMood(defaultMood)
      setText('')
      setIsUpdating(false)
      return
    }

    setMood(existingEntry.mood)
    setText(existingEntry.text)
    setIsUpdating(true)
  }

  function handleSubmit(entry: { date: string; mood: string; text: string }): void {
    upsertEntry({
      date: entry.date,
      mood: entry.mood,
      text: entry.text,
    })

    setMood(entry.mood)
    setText(entry.text)
    setStatusMessage(isUpdating ? 'Entry updated successfully.' : 'Entry created successfully.')
    setIsUpdating(true)
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Add New Journal</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Create an entry for any day. If an entry exists for that date, saving updates it.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-700">Past 7 days</p>
        <div className="flex flex-wrap gap-2">
          {quickDateOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleDateChange(option.value)}
              aria-pressed={selectedDate === option.value}
              className={`cursor-pointer rounded-lg border px-3 py-2 text-sm transition-colors ${
                selectedDate === option.value
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
              }`}
            >
              <span>{option.label}</span>
              {option.hasEntry ? (
                <span className="ml-2 rounded-md bg-green-50 px-1.5 py-0.5 text-xs text-green-700">
                  Saved
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <JournalForm
        date={selectedDate}
        mood={mood}
        text={text}
        isUpdating={isUpdating}
        submitLabel={isUpdating ? 'Update entry' : 'Create entry'}
        onDateChange={handleDateChange}
        onMoodChange={setMood}
        onTextChange={setText}
        onSubmit={handleSubmit}
      />

      {statusMessage ? (
        <p className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
          {statusMessage}
        </p>
      ) : null}
    </section>
  )
}
