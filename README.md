# Task 1 — Responsive Landing Page

**Karvaan Coffee** — a landing page for a small specialty coffee roastery that roasts in small batches and delivers fresh.

## What I built

A single-page site in plain HTML, CSS and vanilla JavaScript — no framework, no build step.

- Sticky header with a mobile hamburger menu that actually opens/closes
- Hero with a photo, a clear headline and two calls to action
- "Why us" features, a bestsellers section (4 coffees, prices in Rs), and subscription steps
- Three subscription plans, sample testimonials, and an FAQ accordion
- A newsletter form with front-end validation and inline success/error messages
- Footer with shop/company links and contact details

The look is deliberately warm and editorial — cream background, deep brown text, a terracotta accent, Fraunces for headings and Inter for body text. I avoided gradients and generic template styling because a coffee brand should feel a bit more like a printed menu than a SaaS page.

## What I learned

- Writing the responsive rules properly took longer than the desktop layout. The 900px breakpoint (where the nav and grids collapse) needed the most testing.
- An accordion is simple once you animate `max-height` from JS using `scrollHeight` — my first version jumped instead of animating.
- Small accessibility things are easy to miss: `aria-expanded` on the menu and FAQ buttons, visible focus outlines, and labels on inputs even when they're visually hidden.

Prices, reviews and contact details are realistic demo content for this task, not a real business.

## How to run

Just open `index.html` in a browser. No server or install needed — an internet connection is only used for Google Fonts and the hero photo.

## Folder structure

```
task-1-responsive-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```
