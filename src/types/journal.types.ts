export type MoodLabel = 'Happy' | 'Calm' | 'Sad' | 'Angry' | 'Excited' | 'Tired'

export type JournalEntry = {
  date: string
  mood: MoodLabel | string
  text: string
  updatedAt: string
}

export type JournalEntryInput = {
  date: string
  mood: string
  text: string
}
