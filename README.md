# DailyDots

DailyDots is a clean, minimal daily journal app with mood tracking.

The app is built with React, TypeScript, Vite, and Tailwind CSS. It focuses on a calm writing experience with simple local-first data storage.

## Features

- Daily journal entries with one entry per date (create or update)
- Mood tracking with predefined mood options
- Home dashboard with quick add for today
- Recent entries preview
- Full journals list with open/edit/delete actions
- Custom in-app delete confirmation modal
- Route-based page titles in the browser tab
- Local storage persistence

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Routes

- `/` -> Home
- `/journals` -> My Journals
- `/journal` -> Add New Journal
- Any unknown route redirects to `/`

## Data Storage

Entries are stored in browser localStorage under the key:

- `daily-dots-journals`

Each entry includes:

- `date` (YYYY-MM-DD)
- `mood`
- `text`
- `updatedAt`

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    journal/
      JournalForm.tsx
    layout/
      AppShell.tsx
  constants/
    moods.ts
  pages/
    HomePage.tsx
    MyJournalsPage.tsx
    AddJournalPage.tsx
  services/
    journalStorageService.ts
  types/
    journal.types.ts
  utils/
    date.ts
```

## Notes

- This project currently uses local storage only.
- Supabase integration can be added later as a backend layer for auth and cloud sync.

## Scripts

- `npm run dev` -> Start Vite dev server
- `npm run build` -> Type-check and build
- `npm run preview` -> Preview production build locally
- `npm run lint` -> Run ESLint
