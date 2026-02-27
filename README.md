# iris project website

A GitHub Pages-ready website for the **iris** accessibility concept.

## About iris

**iris** is a flight-booking concept for travelers with narrowed vision due to glaucoma.
It combines:

- **ContextVoice** for context-aware voice guidance
- **InkView** for persistent high-contrast booking summaries
- **ProgressBar** for clear orientation and error recovery
- **MagSnap** for intentional confirmation on high-stakes actions
- **FocusFrame** as a future adaptive calibration layer

Tagline: **See less. Do more.**

## Project structure

- `index.html` - main one-page site
- `styles.css` - responsive styles and motion system
- `script.js` - mobile menu, reveal animation, active section nav
- `assets/` - renders, icon, and demo media

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

- <http://localhost:8080>

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings -> Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Save and wait for deployment.
5. Your site will be live at the GitHub Pages URL shown in the Pages settings.

## Content source

Website content is based on:

- `Team2_MD8215_CA1_Slides.pdf`
