import { type MoodLabel } from "../types/journal.types";

export const MOOD_OPTIONS: MoodLabel[] = [
  "Happy",
  "Calm",
  "Sad",
  "Angry",
  "Excited",
  "Tired",
];

const MOOD_EMOJI_MAP: Record<MoodLabel, string> = {
  Happy: "😊",
  Calm: "😌",
  Sad: "😔",
  Angry: "😠",
  Excited: "🤩",
  Tired: "😴",
};

export function getMoodDisplayLabel(mood: string): string {
  const moodLabel = MOOD_OPTIONS.find((option) => option === mood);

  if (!moodLabel) {
    return mood;
  }

  return `${MOOD_EMOJI_MAP[moodLabel]} ${moodLabel}`;
}
