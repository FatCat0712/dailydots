---
applyTo: "**/*"
---

# General Development Instructions

## Core Principles

This project prioritizes:

- Readability over cleverness
- Simplicity over unnecessary abstraction
- Maintainability over short-term speed
- Consistency across the codebase
- Production-quality frontend practices

All generated code should follow these principles.

---

# General Coding Standards

## DO

- Write clean and readable code
- Use consistent formatting
- Prefer descriptive naming
- Keep functions focused on one responsibility
- Reuse components and utilities when possible
- Handle loading, empty, and error states
- Write modular and scalable code
- Prefer composition over duplication

## DO NOT

- Generate dead code
- Add unnecessary dependencies
- Create overly complex abstractions
- Hardcode sensitive values
- Leave TODO comments without context
- Use large files with multiple responsibilities
- Add commented-out code
- Use `any`-style thinking even in JavaScript

---

# File Organization Rules

## Preferred File Size

- Components: under 200 lines
- Hooks: under 150 lines
- Utility files: focused and small

If a file becomes too large:

- Extract subcomponents
- Move logic into hooks
- Split utilities into separate files

---

# Naming Conventions

## Components

Use PascalCase.

Examples:

- `MoodSelector.jsx`
- `JournalEditor.jsx`

## Hooks

Must start with `use`.

Examples:

- `useAuth.js`
- `useMoodAnalytics.js`

## Utilities

Use descriptive camelCase names.

Examples:

- `formatDate.js`
- `calculateMoodAverage.js`

## Constants

Use UPPER_SNAKE_CASE.

Examples:

- `MAX_JOURNAL_LENGTH`
- `MOOD_COLORS`

---

# React Best Practices

## Preferred Patterns

- Functional components only
- Hooks only
- Early returns
- Controlled components
- Prop destructuring

Example:

```jsx
function JournalCard({ entry, onDelete }) {
  if (!entry) return null;

  return (
    <div>
      <h2>{entry.title}</h2>
    </div>
  );
}
```

---

# Component Design Rules

## Keep Components:

- Reusable
- Focused
- Predictable
- Small

## Avoid Components That:

- Fetch too much data
- Handle unrelated responsibilities
- Contain excessive nested JSX
- Mix business logic with presentation

---

# State Management Rules

## Prefer:

1. Local component state
2. Context API for shared state

## Avoid:

- Prop drilling across many levels
- Global state for temporary UI behavior
- Overengineering simple interactions

---

# API & Async Rules

## Use:

- `async/await`
- Proper error handling
- Dedicated service files

## Always Handle:

- Loading states
- Empty responses
- Failed requests

Example:

```js
try {
  setLoading(true);
  const data = await fetchEntries();
} catch (error) {
  setError(error.message);
} finally {
  setLoading(false);
}
```

---

# Error Handling Standards

Always provide:

- User-friendly error messages
- Safe fallbacks
- Graceful UI recovery

Avoid:

- Silent failures
- Raw backend error dumps
- Crashing UI

---

# Styling Guidelines

## UI Principles

- Clean
- Minimal
- Modern
- Accessible
- Responsive

## Preferred Layout Style

- Consistent spacing
- Card-based UI where appropriate
- Soft shadows
- Rounded corners
- Clear typography hierarchy

---

# Accessibility Rules

Always:

- Use semantic HTML
- Add labels to form inputs
- Add button text or aria-labels
- Ensure keyboard accessibility
- Maintain sufficient color contrast

---

# Responsive Design Rules

Design mobile-first.

Support:

- Mobile
- Tablet
- Desktop

Avoid:

- Fixed-width layouts
- Horizontal scrolling
- Non-responsive modals/forms

---

# Reusability Rules

Before generating new code:

- Check whether similar logic already exists
- Reuse utilities/hooks/components when possible

Prefer:

- Shared UI components
- Shared utility functions
- Shared layouts

---

# Performance Guidelines

## Prefer:

- Lazy loading pages
- Memoization only when needed
- Efficient renders
- Small reusable components

## Avoid:

- Premature optimization
- Unnecessary re-renders
- Heavy dependencies

---

# Security Guidelines

Never:

- Hardcode API keys
- Expose secrets in frontend code
- Trust client-side validation alone

Always:

- Use environment variables
- Validate user input
- Sanitize displayed content if needed

---

# Git & Commit Standards

Preferred commit style:

```txt
feat: add journal mood filtering
fix: resolve login redirect issue
refactor: simplify auth context
style: improve mobile spacing
```

---

# Documentation Rules

When generating code:

- Add comments only when necessary
- Prefer self-explanatory code
- Document non-obvious business logic

Avoid:

- Obvious comments
- Comment clutter

Bad:

```js
// increment counter
count++;
```

Good:

```js
// Prevent duplicate mood submissions during rapid clicks
```

---

# Testing Philosophy

Focus testing on:

- Business logic
- Utilities
- Critical flows
- Context behavior

Avoid:

- Testing implementation details
- Excessive snapshot tests

---

# Copilot Behavior Preferences

When generating code:

- Prefer maintainable solutions
- Avoid unnecessary abstractions
- Keep architecture scalable
- Use modern React patterns
- Follow existing project structure
- Match naming conventions consistently

If multiple solutions are possible:

- Choose the simplest production-ready approach

---

# Final Engineering Goal

The codebase should feel:

- Clean
- Predictable
- Scalable
- Beginner-friendly
- Easy to maintain
- Similar to modern professional frontend projects
