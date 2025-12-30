# JS Tracking Demo

A focused JavaScript demo showcasing **Google Tag Manager (`dataLayer`) event tracking patterns**, including **intentional implementation errors** used for debugging and QA practice.

## Live Demo
https://resilient-kheer-c2cbff.netlify.app/

## What It Demonstrates

- Button click tracking
- Link click tracking
- `dataLayer` event structure
- Defensive coding with null checks
- Common real-world tracking mistakes and how to debug them

## Files

- `tracking.js` — Reusable tracking helpers and demo implementations
- `index.html` — Demo page with buttons and links

## How to Test

1. Open the live demo
2. Open the browser console (F12)
3. Click buttons and links
4. Watch for tracking logs (e.g. `Tracked: Button Name`)
5. Type `dataLayer` in the console to inspect pushed events

## Error Demos (Intentional)

The page includes intentionally broken examples to simulate common analytics issues:

| Button     | Error Type           |
|------------|----------------------|
| Click Me 1 | Empty event name     |
| Click Me 2 | Undefined variable   |
| Click Me 3 | Incorrect selector   |

These examples are meant for debugging and discussion, not production use.

## Purpose

Built to demonstrate real-world event tracking, debugging strategies, and defensive JavaScript patterns commonly encountered when implementing analytics with Google Tag Manager.
