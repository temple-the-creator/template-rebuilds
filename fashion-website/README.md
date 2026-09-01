# Model Say — Fashion Landing Page (Template Rebuild)

A responsive landing page rebuilt from a design template, focused on clean typography, a split hero layout, and mobile-first responsive design.

## Live Preview

*(Add a link here once deployed — e.g. GitHub Pages, Netlify, or Vercel)*

## Overview

This project recreates a fashion-brand landing page from a provided template. The goal was to practice translating a static design into semantic, responsive HTML/CSS — paying attention to spacing consistency, typography, and breakpoint behavior rather than just copying markup.

## Features

- **Split hero layout** — text content and image sit side by side on larger screens, and stack on mobile
- **Responsive breakpoint** at `992px` using a media query, switching from a stacked to a flex layout
- **Consistent spacing system** via CSS custom properties (`--spacing-sm`, `--spacing-md`, `--spacing-lg`)
- **Custom typography** using Google Fonts (Roboto)
- **CSS reset** for consistent cross-browser rendering
- **BEM-style class naming** (e.g. `header__title`, `img__container`) for readable, maintainable CSS

## Tech Stack

- HTML5
- CSS3 (custom properties, Flexbox, media queries)
- Google Fonts

## Project Structure

```
├── index.html      # Page markup
├── style.css       # Styles, layout, and responsive rules
└── README.md
```

## Responsive Behavior

| Breakpoint | Layout |
|---|---|
| Below 992px | Content and image stacked vertically |
| 992px and up | Split layout — content and image side by side using Flexbox |

## Getting Started

1. Clone or download this repository
2. Open `index.html` directly in your browser — no build step required

```bash
git clone <repo-url>
cd model-say
open index.html
```

## What I Practiced

- Rebuilding a design from scratch with attention to spacing and hierarchy
- Using CSS variables to keep spacing consistent across components
- Writing a mobile-first stylesheet with a single breakpoint for larger screens
- Structuring class names using BEM conventions

## Possible Next Steps

- [ ] Add hover/focus states for the buttons
- [ ] Improve accessibility (alt text detail, focus outlines, semantic landmarks)
- [ ] Add a navigation bar
- [ ] Deploy and link a live preview

## Author

**Temple Emeka**
© 2025 Temple Emeka. All Rights Reserved.
