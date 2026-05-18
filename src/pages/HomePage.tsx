import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMoodDisplayLabel, MOOD_OPTIONS } from '../constants/moods'
import { getAllEntries, getEntryByDate, upsertEntry } from '../services/journalStorageService'
import { formatDate, getTodayDate } from '../utils/date'

const defaultMood = 'Calm'

export default function HomePage() {
  const today = getTodayDate()
  const entryForToday = getEntryByDate(today)

  const [entries, setEntries] = useState(getAllEntries())
  const [todayMood, setTodayMood] = useState(entryForToday?.mood ?? defaultMood)
  const [todayText, setTodayText] = useState(entryForToday?.text ?? '')
  const [statusMessage, setStatusMessage] = useState('')

  const recentEntries = useMemo(() => entries.slice(0, 3), [entries])

  function refreshEntries(): void {
    setEntries(getAllEntries())
  }

  function handleQuickSave(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    upsertEntry({
      date: today,
      mood: todayMood,
      text: todayText,
    })

    setStatusMessage('Today\'s journal has been saved.')
    refreshEntries()
  }

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Overview</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">Welcome back</h2>
        <p className="mt-1 text-sm text-neutral-600">Capture your day in one short note.</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Entries</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">{entries.length}</p>
          </article>
          <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Today</p>
            <p className="mt-1 text-sm font-medium text-neutral-900">{formatDate(today)}</p>
          </article>
          <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Latest Mood</p>
            <p className="mt-1 text-sm font-medium text-neutral-900">
              {entries[0] ? getMoodDisplayLabel(entries[0].mood) : 'No entries yet'}
            </p>
          </article>
        </div>
      </section>

      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-neutral-900">Quick add for today</h3>
            <p className="text-sm text-neutral-600">One entry is allowed per day. Saving updates it.</p>
          </div>
          <Link
            to="/journal"
            className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
          >
            Open full editor
          </Link>
        </div>

        <form onSubmit={handleQuickSave} className="space-y-4">
          <label className="block space-y-2 text-sm font-medium text-neutral-700">
            Mood
            <select
              value={todayMood}
              onChange={(event) => setTodayMood(event.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500"
            >
              {MOOD_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {getMoodDisplayLabel(option)}
                </option>
              ))}
            </select>
          </label>

          <label className="block space-y-2 text-sm font-medium text-neutral-700">
            Journal Text
            <textarea
              rows={5}
              value={todayText}
              onChange={(event) => setTodayText(event.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-3 text-sm leading-6 text-neutral-900 outline-none transition-colors focus:border-neutral-500"
              placeholder="How did your day feel?"
            />
          </label>

          <button
            type="submit"
            className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Save today
          </button>

          {statusMessage ? (
            <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{statusMessage}</p>
          ) : null}
        </form>
      </section>

      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-neutral-900">Recent entries</h3>
          <Link to="/journals" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            See all
          </Link>
        </div>

        {recentEntries.length === 0 ? (
          <p className="text-sm text-neutral-500">Start writing your first journal entry.</p>
        ) : (
          <ul className="space-y-3">
            {recentEntries.map((entry) => (
              <li key={entry.date} className="rounded-lg border border-neutral-200 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">{formatDate(entry.date)}</p>
                <p className="mt-1 text-sm font-medium text-neutral-900">{getMoodDisplayLabel(entry.mood)}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">{entry.text}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
