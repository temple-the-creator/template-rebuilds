# Pet Blog — Tailwind Rebuild

A simple two-column blog layout built with Tailwind CSS (via CDN) as a practice exercise in utility-first styling and responsive layout with Flexbox.

## Original Design

This page is a rebuild of the **["The best pet blogs"](https://nicepage.com/sd/636305/the-best-pet-blogs-website-design)** design by [Nicepage](https://nicepage.com) (ID: 636305, Grid / Pets & Animals category). The original design, layout structure, and copy are credited to Nicepage — this repo is a personal practice rebuild of the front-end using Tailwind CSS, not a redistribution of the original template files.

## Overview

A split hero-style layout for a pet blog: an image and short intro paragraph on one side, a large heading and a circular profile-style image on the other. Built to practice Tailwind's utility classes and responsive `md:` breakpoints instead of custom CSS.

## Features

- **Responsive split layout** — stacked on mobile, side-by-side (`md:flex`) on larger screens
- **Tailwind utility-first styling** — no custom CSS file, all styling done via classes
- Rounded circular image treatment (`rounded-full`)
- Custom background and spacing via Tailwind's utility scale

## Tech Stack

- HTML5
- Tailwind CSS (via CDN — `cdn.tailwindcss.com`)

## Project Structure

```
├── tailwind.html   # Page markup and Tailwind classes
└── README.md
```

## Getting Started

1. Clone or download this repository
2. Open `tailwind.html` directly in your browser — Tailwind loads from CDN, so no build step or local install is required

```bash
git clone <repo-url>
cd pet-blog-tailwind
open tailwind.html
```

## What I Practiced

- Building layout with Tailwind's utility classes instead of writing custom CSS
- Using `md:` responsive prefixes to control layout at different breakpoints
- Working with Tailwind's spacing and typography scale
- Tracing an asset back to its original source for proper attribution

## Image Credit

The photos in this page are sourced from Freepik. **Note:** the "freepik" credit link currently points to `magnific.com/photos/dog`

## Possible Next Steps

- [ ] Add real blog content in place of placeholder Lorem Ipsum text
- [ ] Consider a more descriptive page title
- [ ] Deploy and link a live preview

## Author

**Temple Emeka**
