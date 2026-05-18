# agents.md

## Purpose

This repository uses multiple instruction files to guide AI coding agents such as:

- GitHub Copilot
- Cursor AI
- Claude Code
- ChatGPT
- Cline
- Roo Code
- Continue.dev

The goal is to maintain:

- Consistent architecture
- Stable UI/UX
- Predictable coding standards
- Production-quality frontend practices

---

# Project Overview

## Application Type

Daily Journal Web Application

## Core Features

- Journal writing
- Mood tracking
- Authentication
- Journal history
- Responsive editor UI
- Dashboard / analytics
- User profile/settings

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Backend

- Supabase
- Supabase Auth
- PostgreSQL

---

# AI Agent Responsibilities

AI agents should:

- Follow all instruction files
- Maintain design consistency
- Preserve architecture patterns
- Prefer reusable solutions
- Avoid unnecessary abstractions
- Keep code scalable and readable

---

# Required Instruction Files

AI agents MUST read and follow these files before generating code.

## Core Instruction Files

### 1. General Rules

```txt
/.github/instructions/general.instructions.md
```

Contains:

- Global engineering standards
- Code quality rules
- Naming conventions
- Reusability rules
- Security/performance guidance

---

### 2. Copilot Rules

```txt
/.github/copilot-instructions.md
```

Contains:

- Project architecture
- Folder structure
- State management rules
- Supabase usage patterns
- React conventions

---

### 3. TypeScript + React Rules

```txt
/.github/instructions/typescript-react.instructions.md
```

Contains:

- Type safety standards
- React TSX patterns
- Hook typing
- Context typing
- Component structure

---

### 4. Tailwind + Styling Rules

```txt
/.github/instructions/css-tailwind.instructions.md
```

Contains:

- Tailwind standards
- Responsive rules
- UI consistency
- Spacing system
- Accessibility styling

---

### 5. Product Design Rules

```txt
/.github/instructions/design.instructions.md
```

Contains:

- Notion-inspired design philosophy
- Neutral design language
- Typography system
- Layout standards
- UI/UX direction

---

# Design System Requirements

## The Application MUST Feel Like

- Notion
- Medium
- Linear
- Apple Notes

## The Application MUST NOT Feel Like

- Crypto dashboard
- Flashy SaaS landing page
- Gaming UI
- Neon futuristic app

---

# UI Restrictions

## NEVER Use

- Emoji in UI
- Purple gradients
- Neon colors
- Heavy glassmorphism
- Over-animated components
- Oversized shadows
- Playful cartoon styling

---

# Preferred UI Characteristics

Use:

- Neutral palettes
- Spacious layouts
- Thin borders
- Editorial typography
- Soft hover states
- Minimal shadows
- Calm interfaces

---

# Architecture Rules

## Preferred Structure

```txt
src/
├── app/
├── components/
├── contexts/
├── features/
├── hooks/
├── pages/
├── services/
├── types/
├── utils/
└── styles/
```

---

# Component Rules

Components should:

- Be small
- Be reusable
- Have single responsibility
- Avoid mixing business logic and UI

Avoid:

- Massive components
- Deep prop drilling
- Repeated styling patterns

---

# State Management Rules

Preferred:

- Local state first
- Context API for shared state

Avoid:

- Overengineering
- Complex global state for simple UI

---

# Supabase Rules

## ALWAYS

- Use service layer
- Keep queries outside UI components
- Separate auth logic cleanly
- Handle loading and error states

## NEVER

- Put Supabase queries directly in JSX
- Mix database logic with rendering

---

# TypeScript Rules

## ALWAYS

- Use strict typing
- Prefer `type`
- Type props/context/services
- Use typed async functions

## NEVER

- Use `any`
- Ignore TS errors
- Disable strict mode

---

# Tailwind Rules

## ALWAYS

- Use utility-first styling
- Keep spacing consistent
- Design mobile-first
- Maintain readable class ordering

## NEVER

- Use inline styles excessively
- Use arbitrary values everywhere
- Create messy utility chains

---

# Design Philosophy

## Primary Focus

The application is:

- Content-first
- Writing-focused
- Editorial
- Calm and distraction-free

Typography and whitespace are more important than decorative visuals.

---

# Typography Priorities

Use:

- Inter / Geist / system fonts
- Comfortable line height
- Strong visual hierarchy
- Minimal decoration

---

# Interaction Philosophy

Interactions should:

- Feel subtle
- Be smooth
- Never distract from writing

Preferred:

- Soft hover states
- Small transitions
- Gentle feedback

Avoid:

- Aggressive animations
- Bounce effects
- Dramatic transitions

---

# Accessibility Requirements

Always:

- Use semantic HTML
- Maintain keyboard accessibility
- Add visible focus states
- Ensure proper contrast ratios

---

# Performance Rules

Preferred:

- Lazy loading
- Small reusable components
- Minimal dependencies

Avoid:

- Premature optimization
- Heavy UI libraries
- Bloated abstractions

---

# AI Agent Output Expectations

Generated code should:

- Look production-ready
- Match existing architecture
- Preserve consistency
- Be readable and scalable
- Follow modern React practices

---

# Preferred Libraries

## Approved

- react-router-dom
- @supabase/supabase-js
- clsx
- date-fns
- react-icons

## Avoid Unless Necessary

- Large UI frameworks
- Heavy animation libraries
- Massive utility libraries

---

# File Creation Rules

Before creating new files:

- Check existing structure
- Reuse existing utilities/components
- Avoid duplication

---

# Commit Style Recommendation

Use conventional commits.

Examples:

```txt
feat: add journal editor autosave
fix: resolve auth redirect bug
refactor: simplify mood context
style: improve sidebar spacing
```

---

# Final Product Vision

The final product should feel like:

- A premium minimalist journaling tool
- A calm productivity workspace
- A modern Notion-inspired application
- A professional portfolio-quality project

The experience should prioritize:

- Focus
- Simplicity
- Readability
- Emotional calmness
- Writing comfort
