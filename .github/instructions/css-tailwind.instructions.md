---
applyTo: "**/*.css, **/*.tsx, **/*.ts"
---

# CSS + Tailwind Instructions

## Styling Stack

This project uses:

- Tailwind CSS
- Utility-first styling
- Responsive modern UI principles

All generated styling should follow clean, scalable, production-quality frontend practices.

---

# Core UI Philosophy

The UI should feel:

- Modern
- Clean
- Minimal
- Soft and calming
- Mobile-first
- Accessible
- Professional

Since this is a **Daily Journal + Mood Tracker** application, the design should prioritize:
- Emotional comfort
- Readability
- Spacious layouts
- Soft visual hierarchy
- Smooth user experience

---

# Tailwind Usage Rules

## ALWAYS

- Use Tailwind utility classes first
- Prefer reusable utility combinations
- Keep class lists readable
- Use responsive utilities
- Use semantic HTML elements
- Maintain consistent spacing and sizing

---

# NEVER

- Use inline styles unless absolutely necessary
- Create huge unreadable className strings
- Use arbitrary values excessively
- Mix conflicting spacing/sizing utilities
- Hardcode colors repeatedly
- Use inconsistent padding/margin scales

---

# Preferred Design Style

## Visual Characteristics

Use:
- Rounded corners
- Soft shadows
- Neutral backgrounds
- Calm accent colors
- Spacious padding
- Clean typography

Preferred feeling:
- Calm
- Focused
- Productive
- Journal-like

---

# Preferred Tailwind Patterns

## Cards

Use:

```html
rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
```

---

## Buttons

Primary buttons:

```html
rounded-xl px-4 py-2 font-medium transition-all
```

Include:
- hover states
- active states
- disabled states
- focus-visible states

---

## Inputs

Use:

```html
rounded-xl border border-gray-300 px-4 py-3 outline-none transition
focus:border-blue-500 focus:ring-2 focus:ring-blue-200
```

---

# Responsive Design Rules

## ALWAYS Design Mobile First

Use responsive breakpoints progressively:

```html
text-sm md:text-base lg:text-lg
```

---

# Layout Rules

## Preferred Layout Widths

Main content:

```html
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

Forms/content sections:

```html
max-w-2xl mx-auto
```

---

# Spacing Standards

## Use Consistent Tailwind Scale

Preferred spacing:
- `gap-2`
- `gap-4`
- `gap-6`
- `p-4`
- `p-6`
- `p-8`

Avoid random arbitrary spacing.

Bad:

```html
mt-[37px]
```

Good:

```html
mt-8
```

---

# Typography Rules

## Typography Should Prioritize Readability

Use:
- Clear font hierarchy
- Proper line height
- Consistent font weights

Preferred examples:

### Headings

```html
text-2xl font-bold tracking-tight
```

### Body text

```html
text-sm text-gray-600
```

---

# Color Guidelines

## Mood Tracker Theme

Preferred palette:
- Soft blues
- Warm neutrals
- Calm greens
- Gentle purples
- Soft yellows

Avoid:
- Overly saturated colors
- Harsh contrast
- Neon palettes

---

# Mood Color System

Suggested mood colors:

| Mood | Suggested Style |
|---|---|
| Happy | Yellow |
| Calm | Blue |
| Sad | Indigo |
| Angry | Red |
| Excited | Orange |
| Tired | Gray |

---

# Dark Mode Readiness

Write Tailwind classes in a way that can support future dark mode.

Prefer:

```html
bg-white dark:bg-gray-900
text-gray-900 dark:text-gray-100
```

Avoid hardcoded assumptions.

---

# Accessibility Rules

## ALWAYS

- Ensure sufficient color contrast
- Use visible focus states
- Support keyboard navigation
- Use semantic HTML
- Add hover + focus styles

---

# Animation Guidelines

## Keep Animations Subtle

Preferred:
- `transition-all`
- `duration-200`
- `hover:scale-[1.01]`
- `hover:shadow-md`

Avoid:
- Excessive animations
- Large bouncing effects
- Distracting motion

---

# Loading State Design

Always include:
- Loading indicators
- Disabled states
- Skeleton placeholders if appropriate

Example:

```html
animate-pulse rounded-xl bg-gray-200
```

---

# Empty State Design

Empty states should:
- Feel friendly
- Guide users
- Encourage interaction

Example:
- “Start writing your first journal entry.”

---

# Component Styling Rules

## Components Should Be

- Reusable
- Consistent
- Self-contained
- Predictable

Avoid:
- One-off styling patterns
- Repeated long utility chains

---

# Preferred Utility Extraction

If utility combinations repeat frequently:
- Extract reusable component wrappers
- Use helper functions
- Use `clsx`

Example:

```tsx
className={clsx(
  "rounded-xl px-4 py-2 transition",
  isActive && "bg-blue-500 text-white"
)}
```

---

# Page Structure Standards

Typical page structure:

```html
<div className="min-h-screen bg-gray-50">
  <main className="mx-auto max-w-7xl px-4 py-8">
    <!-- content -->
  </main>
</div>
```

---

# Modal Design Rules

Modals should:
- Be centered
- Have backdrop blur/dim
- Prevent overflow issues
- Be mobile responsive

Preferred modal container:

```html
rounded-2xl bg-white p-6 shadow-xl
```

---

# Dashboard UI Guidelines

For mood analytics/dashboard:
- Use cards
- Maintain spacing consistency
- Avoid clutter
- Highlight important information visually

---

# Form UI Rules

Forms should:
- Be clean and spacious
- Have visible labels
- Use clear validation states
- Support mobile screens

Avoid:
- Dense form layouts
- Tiny click targets

---

# Tailwind Class Ordering

Preferred order:

1. Layout
2. Spacing
3. Sizing
4. Typography
5. Colors
6. Effects
7. States

Example:

```html
flex items-center gap-4 rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm hover:shadow-md
```

---

# Copilot Styling Behavior

When generating Tailwind code:

- Prefer readability over compactness
- Keep utility classes organized
- Reuse existing design patterns
- Match existing spacing/color systems
- Generate responsive layouts by default
- Include hover/focus/disabled states
- Keep designs production-ready

If uncertain:
- Choose the cleaner and more minimal approach

---

# Final UI Goal

The final application should feel like:

- A modern journaling product
- Calm and emotionally comfortable
- Professional but simple
- Lightweight and responsive
- Similar in quality to modern productivity apps
- Clean enough for portfolio-quality presentation