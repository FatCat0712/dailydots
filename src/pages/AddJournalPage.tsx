import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import JournalForm from '../components/journal/JournalForm'
import { getEntryByDate, upsertEntry } from '../services/journalStorageService'
import { getTodayDate, isCalendarDate } from '../utils/date'

const defaultMood = 'Calm'

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
