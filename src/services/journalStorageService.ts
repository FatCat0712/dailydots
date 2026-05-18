import { type JournalEntry, type JournalEntryInput } from '../types/journal.types'
import { isCalendarDate } from '../utils/date'

const STORAGE_KEY = 'daily-dots-journals'

function parseEntries(rawValue: string | null): JournalEntry[] {
  if (!rawValue) {
    return []
  }

  try {
    const parsed = JSON.parse(rawValue) as unknown

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed
      .filter((item): item is JournalEntry => {
        return (
          typeof item === 'object' &&
          item !== null &&
          typeof item.date === 'string' &&
          typeof item.mood === 'string' &&
          typeof item.text === 'string' &&
          typeof item.updatedAt === 'string'
        )
      })
      .filter((item) => isCalendarDate(item.date))
  } catch {
    return []
  }
}

function readEntries(): JournalEntry[] {
  const rawValue = localStorage.getItem(STORAGE_KEY)
  const entries = parseEntries(rawValue)

  return entries.sort((a, b) => b.date.localeCompare(a.date))
}

function writeEntries(entries: JournalEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}

export function getAllEntries(): JournalEntry[] {
  return readEntries()
}

export function getEntryByDate(date: string): JournalEntry | null {
  if (!isCalendarDate(date)) {
    return null
  }

  const entry = readEntries().find((item) => item.date === date)

  return entry ?? null
}

export function upsertEntry(input: JournalEntryInput): JournalEntry {
  if (!isCalendarDate(input.date)) {
    throw new Error('Invalid date format. Use YYYY-MM-DD.')
  }

  const normalizedMood = input.mood.trim()
  const normalizedText = input.text.trim()

  if (!normalizedMood || !normalizedText) {
    throw new Error('Mood and journal text are required.')
  }

  const now = new Date().toISOString()
  const nextEntry: JournalEntry = {
    date: input.date,
    mood: normalizedMood,
    text: normalizedText,
    updatedAt: now,
  }

  const entries = readEntries()
  const existingIndex = entries.findIndex((entry) => entry.date === input.date)

  if (existingIndex >= 0) {
    entries[existingIndex] = nextEntry
  } else {
    entries.push(nextEntry)
  }

  entries.sort((a, b) => b.date.localeCompare(a.date))
  writeEntries(entries)

  return nextEntry
}

export function deleteEntry(date: string): boolean {
  if (!isCalendarDate(date)) {
    return false
  }

  const entries = readEntries()
  const filteredEntries = entries.filter((entry) => entry.date !== date)

  if (filteredEntries.length === entries.length) {
    return false
  }

  writeEntries(filteredEntries)

  return true
}
