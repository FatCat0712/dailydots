# Daily Dots

A minimal, calm daily journaling app with mood tracking — inspired by the simplicity of Notion and the focus of Apple Notes.

---

## Technology Stack

| Technology                                    | Version | Purpose                   |
| --------------------------------------------- | ------- | ------------------------- |
| [React](https://react.dev/)                   | ^19.2   | UI framework              |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0    | Type safety               |
| [Vite](https://vite.dev/)                     | ^8.0    | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/)      | ^4.3    | Utility-first styling     |
| [React Router DOM](https://reactrouter.com/)  | ^7.15   | Client-side routing       |
| [ESLint](https://eslint.org/)                 | ^10.0   | Code linting              |

> Supabase is planned for authentication and cloud persistence. Currently, entries are stored in `localStorage`.

---

## Project Architecture

Daily Dots is a single-page application (SPA) structured around a feature-based architecture. The app renders inside an `AppShell` layout that provides the header and navigation, with nested routes rendering page content via React Router's `<Outlet>`.

```
Browser
  └── AppShell (layout wrapper — header + nav)
        ├── HomePage        /            (quick-write today's entry + recent entries)
        ├── AddJournalPage  /journal     (full journal entry form with date + mood picker)
        └── MyJournalsPage  /journals    (browsable history of all entries)
```

Data flows through a thin service layer (`journalStorageService`) that reads and writes typed `JournalEntry` objects to `localStorage`. No global state manager is used — pages read from the service directly and hold local component state.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm v9 or newer

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dailydots.git
cd dailydots

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── App.tsx                        # Root component — router setup
├── main.tsx                       # Entry point
├── index.css                      # Global styles
│
├── components/
│   ├── layout/
│   │   └── AppShell.tsx           # Header, nav, page wrapper
│   └── journal/
│       └── JournalForm.tsx        # Reusable journal entry form
│
├── constants/
│   └── moods.ts                   # Mood options and display helpers
│
├── pages/
│   ├── HomePage.tsx               # Dashboard + quick-write today
│   ├── AddJournalPage.tsx         # Full-page journal editor
│   └── MyJournalsPage.tsx         # Entry history browser
│
├── services/
│   └── journalStorageService.ts   # localStorage CRUD — read, write, upsert, delete
│
├── types/
│   └── journal.types.ts           # Shared TypeScript types
│
└── utils/
    └── date.ts                    # Date formatting and validation helpers
```

---

## Key Features

- **Daily quick-write** — capture today's entry from the home screen without navigating away
- **Mood tracking** — choose from six moods: Happy, Calm, Sad, Angry, Excited, Tired
- **One entry per day** — upsert logic ensures each date has exactly one journal entry
- **Journal history** — browse all past entries sorted by date on the My Journals page
- **Edit and delete** — update any existing entry or remove it with an in-app confirmation
- **Offline-first** — all data persisted in `localStorage` under the key `daily-dots-journals`
- **Responsive layout** — mobile-first design that works across mobile, tablet, and desktop
- **Dynamic page titles** — browser tab title updates to reflect the active page

---

## Development Workflow

### Branching

Use descriptive, kebab-case branch names prefixed by type:

```
feat/add-journal-search
fix/date-formatting-edge-case
refactor/simplify-storage-service
style/improve-mobile-nav-spacing
```

### Commit Style

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add journal mood filtering on history page
fix: resolve entry not saving on first load
refactor: extract date utilities into separate module
style: improve mobile spacing in AppShell nav
```

---

## Coding Standards

### TypeScript

- Strict mode is enabled — no `any`, no suppressed TS errors
- Prefer `type` over `interface` for prop and data shapes
- Explicitly type function parameters, async return values, and context values

```ts
// Good
async function getEntries(): Promise<JournalEntry[]> { ... }

type JournalCardProps = {
  entry: JournalEntry;
  onDelete: (date: string) => void;
};
```

### React

- Functional components only — no class components
- One component per file with a default export
- Use early returns for guard/loading conditions
- Always destructure props

```tsx
export default function JournalCard({ entry, onDelete }: JournalCardProps) {
  if (!entry) return null;
  return <div>{entry.text}</div>;
}
```

### Services

Keep all `localStorage` / Supabase logic out of UI components. Use the `services/` layer:

```ts
// services/journalStorageService.ts
export function getAllEntries(): JournalEntry[] { ... }
export function upsertEntry(input: JournalEntryInput): JournalEntry { ... }
export function deleteEntry(date: string): void { ... }
```

### Tailwind CSS

- Utility-first; avoid inline styles
- Mobile-first responsive utilities
- Consistent spacing and sizing scale
- Preferred card pattern:

```html
rounded-xl border border-neutral-200 bg-white p-6 shadow-sm
```

### File Size Guidelines

| File type         | Preferred max     |
| ----------------- | ----------------- |
| Component         | 200 lines         |
| Hook              | 150 lines         |
| Utility / service | Small and focused |

---

## Testing

Testing uses [Vitest](https://vitest.dev/).

Focus areas:

- Utility functions (`src/utils/date.ts`, `src/constants/moods.ts`)
- Service layer (`src/services/journalStorageService.ts`)
- Critical business logic and context providers

Avoid:

- Snapshot tests
- Testing implementation details or internal state

---

## Contributing

1. Follow the existing feature-based folder structure — check for reusable utilities or components before creating new files
2. Match naming conventions: `PascalCase` for components, `camelCase` for utilities/hooks, `UPPER_SNAKE_CASE` for constants
3. All code must pass TypeScript strict checks and ESLint before opening a PR
4. Handle loading, empty, and error states in any new UI feature
5. Review the instruction files in [.github/instructions/](.github/instructions/) for detailed rules:
   - [`typescript-react.instructions.md`](.github/instructions/typescript-react.instructions.md) — TypeScript and React patterns
   - [`css-tailwind.instructions.md`](.github/instructions/css-tailwind.instructions.md) — Tailwind and styling standards
   - [`design.instructions.md`](.github/instructions/design.instructions.md) — Visual design philosophy
   - [`general.instructions.md`](.github/instructions/general.instructions.md) — Global engineering standards

---

## Data Schema

Each journal entry stored in `localStorage` follows this shape:

```ts
type JournalEntry = {
  date: string; // "YYYY-MM-DD"
  mood: string; // e.g. "Calm", "Happy"
  text: string; // journal body
  updatedAt: string; // ISO 8601 timestamp
};
```

Storage key: `daily-dots-journals`

---

## License

Private project. All rights reserved.
