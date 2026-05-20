import { useState } from "react";
import { getMoodDisplayLabel, MOOD_OPTIONS } from "../../constants/moods";
import { type JournalEntryInput } from "../../types/journal.types";

type JournalFormProps = {
  date: string;
  mood: string;
  text: string;
  onDateChange: (date: string) => void;
  onMoodChange: (mood: string) => void;
  onTextChange: (text: string) => void;
  onSubmit: (entry: JournalEntryInput) => void;
  submitLabel: string;
  isUpdating: boolean;
};

export default function JournalForm({
  date,
  mood,
  text,
  onDateChange,
  onMoodChange,
  onTextChange,
  onSubmit,
  submitLabel,
  isUpdating,
}: JournalFormProps) {
  const [errorMessage, setErrorMessage] = useState("");
  const characterCount = text.length;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!date || !mood.trim() || !text.trim()) {
      setErrorMessage("Date, mood, and journal text are required.");
      return;
    }

    setErrorMessage("");
    onSubmit({ date, mood, text });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-neutral-700">
          Date
          <input
            type="date"
            value={date}
            onChange={(event) => {
              const nextDate = event.target.value;
              onDateChange(nextDate);
            }}
            className="w-full cursor-pointer rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-neutral-700">
          Mood
          <select
            value={mood}
            onChange={(event) => onMoodChange(event.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500"
          >
            {MOOD_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {getMoodDisplayLabel(option)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-neutral-700">
        Journal Entry
        <textarea
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
          placeholder="Write your thoughts for the day..."
          rows={8}
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-3 text-sm leading-6 text-neutral-900 outline-none transition-colors focus:border-neutral-500"
        />
        <p
          className="text-right text-xs font-normal text-neutral-500"
          aria-live="polite"
        >
          {characterCount} characters
        </p>
      </label>

      {isUpdating ? (
        <p className="rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-700">
          An entry already exists for this day. Saving will update it.
        </p>
      ) : null}

      {errorMessage ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        {submitLabel}
      </button>
    </form>
  );
}
