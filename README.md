# JS Tracking Demo

A simple event tracking demo using JavaScript and Google Tag Manager.

## Live Demo
https://resilient-kheer-c2cbff.netlify.app/

## What It Demonstrates

- Button click tracking
- Link click tracking
- dataLayer implementation
- Defensive coding with null checks
- Common tracking errors and how to debug them

## Files

- `tracking.js` - Main tracking code with reusable functions
- `index.html` - Demo page with buttons and links

## How to Test

1. Open the live demo
2. Open browser console (F12)
3. Click buttons/links
4. Watch for tracking logs: `✓ Tracked: Button Name`
5. Type `dataLayer` in console to see pushed events

## Error Demos

The page includes intentional errors for debugging practice:

| Button | Error Type |
|--------|------------|
| Click Me 1 | Empty event name |
| Click Me 2 | Undefined variable |
| Click Me 3 | Wrong selector |

## Built For

Interview preparation - demonstrating JavaScript tracking and debugging skills.