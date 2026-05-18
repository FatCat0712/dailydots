import { Link } from "react-router-dom";
import { getMoodDisplayLabel } from "../constants/moods";
import { deleteEntry, getAllEntries } from "../services/journalStorageService";
import { formatDate } from "../utils/date";
import { useState } from "react";

export default function MyJournalsPage() {
  const [entries, setEntries] = useState(getAllEntries());
  const [entryDateToDelete, setEntryDateToDelete] = useState<string | null>(
    null,
  );

  function handleDeleteClick(date: string): void {
    setEntryDateToDelete(date);
  }

  function handleDeleteCancel(): void {
    setEntryDateToDelete(null);
  }

  function handleDeleteConfirm(): void {
    if (!entryDateToDelete) {
      return;
    }

    deleteEntry(entryDateToDelete);
    setEntries(getAllEntries());
    setEntryDateToDelete(null);
  }

  if (entries.length === 0) {
    return (
      <section className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-900">
          No journals yet
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Create your first daily entry to get started.
        </p>
        <Link
          to="/journal"
          className="mt-5 inline-flex rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Add New Journal
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          My Journals
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Browse, open, edit, or delete your past entries.
        </p>
      </div>

      <ul className="space-y-3">
        {entries.map((entry) => (
          <li
            key={entry.date}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  {formatDate(entry.date)}
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-900">
                  Mood: {getMoodDisplayLabel(entry.mood)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={`/journal?date=${entry.date}`}
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  Open
                </Link>
                <Link
                  to={`/journal?date=${entry.date}`}
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteClick(entry.date)}
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              {entry.text}
            </p>
          </li>
        ))}
      </ul>

      {entryDateToDelete ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/40 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-entry-title"
            aria-describedby="delete-entry-description"
            className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-5 shadow-lg"
          >
            <h3
              id="delete-entry-title"
              className="text-lg font-semibold text-neutral-900"
            >
              Delete journal entry?
            </h3>
            <p
              id="delete-entry-description"
              className="mt-2 text-sm leading-6 text-neutral-600"
            >
              This action cannot be undone. The selected entry will be
              permanently removed.
            </p>

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleDeleteCancel}
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="rounded-lg border border-red-200 bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
