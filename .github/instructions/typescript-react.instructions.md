---
applyTo: "**/*.ts, **/*.tsx"
---

# TypeScript + React Instructions


## Technology Stack

This project uses:

- TypeScript
- React
- Vite
- Tailwind CSS
- Supabase

All generated code must follow modern TypeScript and React best practices.

---

# TypeScript Rules

## ALWAYS

- Use strict typing
- Prefer `type` over `interface` unless extension is needed
- Explicitly type:
  - Props
  - Function parameters
  - Return values when helpful
  - Context values
  - API responses
- Use union types when appropriate
- Use utility types (`Partial`, `Pick`, `Omit`, etc.) when useful

---

# NEVER

- Use `any`
- Use unnecessary type assertions
- Ignore TypeScript errors
- Disable type checking
- Use overly complex generic patterns unless necessary

---

# Preferred Type Patterns

## Component Props

```tsx
type JournalCardProps = {
  title: string;
  mood: string;
  createdAt: string;
};
```

---

## Function Typing

```tsx
function calculateMoodScore(mood: string): number {
  return 5;
}
```

---

## Async Functions

```tsx
async function fetchEntries(): Promise<JournalEntry[]> {
  return [];
}
```

---

# React Component Standards

## Preferred Component Style

Use:

- Functional components
- Named exports when appropriate
- Arrow functions for callbacks
- Early returns

Example:

```tsx
type Props = {
  entry: JournalEntry;
};

export default function JournalCard({ entry }: Props) {
  if (!entry) return null;

  return <div>{entry.title}</div>;
}
```

---

# React Hooks Rules

## ALWAYS

- Keep hooks focused
- Extract reusable logic into custom hooks
- Keep side effects clean
- Cleanup subscriptions/listeners properly

## Example

```tsx
useEffect(() => {
  const subscription = subscribe();

  return () => subscription.unsubscribe();
}, []);
```

---

# State Management Typing

## useState

Always type nullable or complex state.

Good:

```tsx
const [user, setUser] = useState<User | null>(null);
```

Avoid:

```tsx
const [user, setUser] = useState(null);
```

---

# Context API Typing

Always fully type context values.

Example:

```tsx
type AuthContextType = {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
};
```

---

# Event Typing

Always type event handlers.

Examples:

```tsx
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setValue(e.target.value);
}
```

---

# Folder & File Naming

## File Extensions

Use:
- `.tsx` for React components
- `.ts` for utilities/services/types

---

## Naming Rules

### Components
PascalCase:

```txt
MoodSelector.tsx
JournalEditor.tsx
```

### Hooks

```txt
useAuth.ts
useMoodTracker.ts
```

### Types

```txt
journal.types.ts
auth.types.ts
```

---

# Shared Types Rules

## Prefer Centralized Types

Use:

```txt
src/types/
```

or feature-based:

```txt
features/journal/types/
```

---

# API & Supabase Typing

## ALWAYS Type Responses

Example:

```tsx
type JournalEntry = {
  id: string;
  title: string;
  content: string;
  mood: MoodType;
};
```

---

# Service Layer Rules

Keep Supabase/database logic outside components.

Good:

```tsx
services/journalService.ts
```

Avoid:
- Direct database calls inside JSX files
- Business logic inside UI rendering

---

# Error Handling Rules

Use typed error handling where possible.

Example:

```tsx
try {
  await createEntry(data);
} catch (error) {
  console.error(error);
}
```

---

# Tailwind + TSX Guidelines

## Preferred Class Handling

Use:
- `clsx`
- Conditional class helpers

Example:

```tsx
className={clsx(
  "rounded-lg p-4",
  isActive && "border-blue-500"
)}
```

---

# Component Structure Order

Preferred order inside component files:

1. Imports
2. Types
3. Constants
4. Component
5. Helper functions

---

# Import Rules

## Prefer Absolute Imports

Good:

```tsx
import Button from "@/components/ui/Button";
```

Avoid:

```tsx
import Button from "../../../components/ui/Button";
```

---

# Form Handling Standards

Use controlled inputs.

Example:

```tsx
const [title, setTitle] = useState("");
```

Always:
- Validate inputs
- Handle loading states
- Disable submit during async actions

---

# Performance Guidelines

## Use Memoization Only When Needed

Allowed:
- `useMemo`
- `useCallback`
- `React.memo`

But avoid premature optimization.

---

# Accessibility Rules

Always:
- Add labels
- Use semantic HTML
- Add button types
- Ensure keyboard accessibility

Example:

```tsx
<button type="submit">
  Save Entry
</button>
```

---

# Testing Guidelines

Use:
- Vitest
- React Testing Library

Prefer testing:
- User behavior
- Business logic
- Critical UI interactions

Avoid:
- Testing implementation details

---

# Copilot Behavior Instructions

When generating TypeScript React code:

- Prefer strict typing
- Keep components small
- Generate production-style code
- Avoid overengineering
- Follow feature-based architecture
- Prioritize readability
- Use reusable patterns
- Match existing project structure

If uncertain:
- Choose the simpler typed solution

---

# Final Goal

The TypeScript React codebase should feel:

- Clean
- Type-safe
- Scalable
- Modern
- Maintainable
- Similar to professional frontend production projects