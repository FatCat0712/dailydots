# GitHub Copilot Instructions

## Project Overview

This project is a **Daily Journal with Mood Tracker** web application built with:

- Vite
- React
- Supabase
- Tailwind CSS

The application should focus on:

- Clean architecture
- Readable and maintainable code
- Responsive modern UI
- Accessibility
- Beginner-to-intermediate friendly structure
- Scalable feature-based organization

---

# Tech Stack Rules

## Frontend

- Use React with Vite
- Use Functional Components only
- Use React Hooks only
- Use React Router for routing

## Styling

- Use Tailwind CSS for all styling
- Prefer utility-first styling
- Avoid inline styles unless absolutely necessary
- Keep UI responsive for desktop, tablet, and mobile
- Maintain consistent spacing, typography, and color usage

## Backend / Database

- Use Supabase for:
  - Authentication
  - Database
  - Realtime features if needed
- Keep Supabase logic outside UI components

---

# Folder Structure

Use feature-based architecture.

Example structure:

```
src/
│
├── app/
│   ├── router/
│   └── providers/
│
├── components/
│   ├── ui/
│   └── layout/
│
├── features/
│   ├── auth/
│   ├── journal/
│   └── mood/
│
├── services/
│   ├── supabase/
│   └── api/
│
├── hooks/
│
├── contexts/
│
├── pages/
│
├── utils/
│
├── constants/
│
└── styles/
```

---

# Coding Style

## Components

- Keep components small and reusable
- One component per file
- Prefer early returns
- Destructure props
- Avoid deeply nested JSX

## Naming Conventions

- Use PascalCase for components
- Use camelCase for variables/functions
- Use UPPER_CASE for constants
- Use descriptive names

Good examples:

- `JournalEntryCard.jsx`
- `useAuth.js`
- `getMoodColor()`

Bad examples:

- `data.js`
- `temp.jsx`
- `helper1.js`

---

# State Management

Use:

- React Context API for global state
- Local component state when possible

Avoid:

- Redux
- Overengineering state management

Examples of global contexts:

- AuthContext
- ThemeContext
- JournalContext

---

# Authentication

Use Supabase Authentication.

Requirements:

- Implement dedicated Auth Context Provider
- Persist login sessions properly
- Protect authenticated routes
- Redirect unauthenticated users to login page

Recommended structure:

```txt
features/auth/
├── components/
├── pages/
├── hooks/
├── context/
└── services/
```

---

# Data Fetching Rules

## IMPORTANT

Do NOT place Supabase queries directly inside UI components.

Always:

- Create service files inside `services/`
- Keep database logic reusable
- Separate UI and business/data logic

Example:

```js
// services/journalService.js
export async function getJournalEntries(userId) {
  return await supabase.from("journals").select("*").eq("user_id", userId);
}
```

---

# Form Handling

Use:

- Native React forms
- Controlled components with `useState`

Requirements:

- Validate required fields
- Show user-friendly error messages
- Disable submit buttons during loading
- Prevent duplicate submissions

---

# Routing

Use React Router with centralized route configuration.

Example:

```txt
app/router/
├── AppRouter.jsx
├── ProtectedRoute.jsx
└── routes.js
```

Requirements:

- Separate public and protected routes
- Use lazy loading when appropriate

---

# UI/UX Guidelines

## Design Style

- Clean modern interface
- Minimal but polished
- Soft shadows and rounded corners
- Consistent spacing

## Accessibility

- Add proper labels to inputs
- Use semantic HTML
- Ensure keyboard accessibility
- Add loading and empty states

## Responsiveness

- Mobile-first design
- Support:
  - Mobile
  - Tablet
  - Desktop

---

# Mood Tracker Features

Preferred mood system:

- Tag or label-based mood selection (no emoji in UI)
- Color-coded moods
- Daily mood history
- Mood analytics/charts if implemented

Example moods:

- Happy
- Calm
- Sad
- Angry
- Excited
- Tired

---

# Code Quality Rules

Always:

- Write readable code
- Add meaningful comments only when necessary
- Avoid duplicated logic
- Extract reusable utilities/hooks
- Handle loading and error states

Avoid:

- Massive components
- Hardcoded values
- Unused imports
- Console logs in production code

---

# Testing

Use:

- Vitest for unit testing

Focus testing on:

- Utility functions
- Context providers
- Critical business logic

Avoid excessive boilerplate tests.

---

# Copilot Behavior Instructions

When generating code:

- Prefer simplicity over overengineering
- Generate production-style React code
- Follow feature-based architecture
- Keep files modular
- Use async/await consistently
- Prefer reusable components
- Prioritize readability and maintainability

When uncertain:

- Choose the cleaner and more scalable approach
- Avoid unnecessary dependencies

---

# Preferred Libraries

Recommended libraries:

- react-router-dom
- @supabase/supabase-js
- react-icons
- clsx
- date-fns

Use lightweight libraries whenever possible.

---

# Performance Guidelines

- Use lazy loading for pages
- Avoid unnecessary re-renders
- Memoize expensive calculations if needed
- Keep bundle size small

---

# Final Goal

The application should feel like a modern production-ready journaling app with:

- Clean UI
- Good user experience
- Maintainable architecture
- Scalable React structure
- Proper Supabase integration
