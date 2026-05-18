---
applyTo: "**/*.tsx, **/*.css"
---

# Design Instructions

## Design Goal

This project is a **Daily Journal Web Application** inspired heavily by the design philosophy of Notion.

The UI should feel:

- Minimal
- Calm
- Clean
- Editorial
- Spacious
- Professional
- Productivity-focused

The experience should prioritize:
- Writing comfort
- Focus
- Readability
- Simplicity
- Fast interaction

---

# Core Design Philosophy

## The Interface Should Feel Like

- Notion
- Medium
- Linear
- Apple Notes
- Modern editorial software

NOT like:
- Crypto dashboards
- SaaS marketing websites
- Gaming UIs
- AI-generated flashy landing pages

---

# Visual Identity Rules

## ALWAYS

- Use neutral color palettes
- Use subtle shadows
- Use large whitespace
- Use soft borders
- Keep layouts extremely clean
- Prioritize typography over decoration
- Use understated interactions

---

# NEVER

- Use emoji in UI
- Use purple gradients
- Use neon colors
- Use glassmorphism
- Use glowing effects
- Use oversized shadows
- Use flashy animations
- Use excessive border radius
- Use colorful dashboards
- Use highly saturated gradients

---

# Color Palette

## Primary Palette

Use mostly:

- White
- Off-white
- Light gray
- Neutral gray
- Black
- Soft charcoal

Examples:

```txt
bg-white
bg-neutral-50
text-neutral-900
text-neutral-600
border-neutral-200
```

---

# Accent Colors

Use accent colors sparingly.

Preferred accents:
- Soft blue
- Slate
- Warm gray
- Muted green

Avoid:
- Purple gradients
- Pink/purple combinations
- Neon blues
- Bright cyan

---

# Typography Rules

## Typography Is The Main Visual Element

The interface should feel content-first.

Prioritize:
- Readability
- Proper spacing
- Strong hierarchy
- Editorial feel

---

# Font Recommendations

Preferred font style:
- Inter
- Geist
- System UI stack

Avoid:
- Decorative fonts
- Futuristic fonts
- Rounded playful fonts

---

# Typography Hierarchy

## Page Titles

```html
text-3xl font-semibold tracking-tight
```

---

## Section Titles

```html
text-xl font-medium
```

---

## Body Text

```html
text-sm leading-7 text-neutral-700
```

---

# Layout Rules

## The Layout Must Feel Spacious

Use:
- Generous padding
- Consistent spacing
- Wide breathing room
- Clear separation

Preferred wrappers:

```html
max-w-5xl mx-auto px-6
```

---

# Sidebar Design

The sidebar should feel similar to Notion:

- Minimal
- Light background
- Subtle hover states
- Thin separators
- Compact navigation items

Preferred styles:

```html
bg-neutral-50 border-r border-neutral-200
```

Navigation item:

```html
rounded-md px-3 py-2 text-sm hover:bg-neutral-200
```

---

# Journal Editor Design

## Writing Experience Is Top Priority

The editor should:
- Feel distraction-free
- Have wide spacing
- Use comfortable line-height
- Avoid visual clutter

Preferred content width:

```html
max-w-3xl mx-auto
```

---

# Card Design

Cards should feel subtle and flat.

Preferred card style:

```html
rounded-xl border border-neutral-200 bg-white shadow-sm
```

Avoid:
- Heavy shadows
- Floating glass effects
- Gradient cards

---

# Button Design

Buttons should feel understated.

Primary button:

```html
rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800
```

Secondary button:

```html
rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-100
```

---

# Input Design

Inputs should resemble Notion-style simplicity.

Preferred input style:

```html
rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-500
```

Avoid:
- Thick glowing outlines
- Bright focus colors
- Fancy gradients

---

# Hover & Interaction Rules

## Interactions Should Be Subtle

Preferred:
- Soft hover backgrounds
- Slight opacity changes
- Small shadow transitions

Use:

```html
transition-colors duration-150
```

Avoid:
- Bounce animations
- Scaling everything
- Aggressive hover effects

---

# Animation Guidelines

## Keep Motion Minimal

Allowed:
- Fade transitions
- Small hover transitions
- Smooth sidebar interactions

Avoid:
- Dramatic page transitions
- Floating animations
- Parallax
- Over-animated interfaces

---

# Border Radius Rules

Use moderate radius only.

Preferred:
- `rounded-md`
- `rounded-lg`
- `rounded-xl`

Avoid:
- `rounded-full` everywhere
- Overly soft bubble UI

---

# Dashboard Design Philosophy

Analytics and mood tracking should feel:
- Calm
- Informative
- Minimal

Avoid:
- Color explosions
- Gamification-heavy UI
- Excessive charts

---

# Mood Tracking Design

Mood tracking should use:
- Subtle indicators
- Clean labels
- Muted color accents

Avoid:
- Emoji mood systems
- Cartoon-style visuals
- Bright playful designs

Preferred:
- Dots
- Labels
- Soft colored badges

Example:

```html
bg-blue-100 text-blue-700
bg-green-100 text-green-700
```

---

# Empty State Design

Empty states should feel:
- Quiet
- Elegant
- Encouraging

Example text style:

```html
text-sm text-neutral-500
```

Example message:

- “Start writing your first journal entry.”
- “No entries yet.”

---

# Responsive Design Rules

## Mobile Experience Must Stay Minimal

On mobile:
- Collapse sidebar cleanly
- Maintain whitespace
- Avoid overcrowding
- Keep typography readable

---

# Accessibility Rules

Always:
- Maintain sufficient contrast
- Use semantic HTML
- Keep focus states visible
- Ensure keyboard accessibility

---

# Tailwind Styling Preferences

Preferred utility categories:

- Neutral backgrounds
- Thin borders
- Typography-focused styles
- Minimal shadows
- Consistent spacing

Preferred classes:

```html
border-neutral-200
text-neutral-700
bg-neutral-50
shadow-sm
tracking-tight
leading-7
```

---

# Component Design Rules

Each component should:
- Have a single clear purpose
- Feel visually lightweight
- Blend naturally into the system
- Maintain consistency with Notion-like UI

---

# Copilot Design Behavior

When generating UI code:

- Prioritize minimalism
- Prefer whitespace over decoration
- Keep layouts editorial and clean
- Use neutral palettes
- Avoid flashy modern SaaS aesthetics
- Generate subtle professional interfaces
- Keep interactions understated

If uncertain:
- Choose the simpler and more minimal design

---

# Final Product Vision

The final application should feel like:

- A calm digital writing workspace
- A professional productivity tool
- A minimalist journaling platform
- A modern Notion-inspired editor experience

The UI should communicate:
- Focus
- Clarity
- Calmness
- Simplicity
- Professional quality