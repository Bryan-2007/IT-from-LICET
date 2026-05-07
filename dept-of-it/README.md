# LICET Information Technology Department

A React single-page website for the Information Technology Department at LICET. The app presents department information, programs, achievements, faculty highlights, and an animated film-reel gallery using images from `public/images`.

## Features

- Sticky navigation with section links
- Hero section with call-to-action buttons
- Expandable animated film reel that loads images from `public/images.json`
- About, services, achievements, faculty, and footer sections
- Responsive CSS grid layouts and hover animations
- Vercel-ready production build configuration

## Project Structure

```text
dept-of-it/
  public/
    images/
    images.json
    index.html
    manifest.json
  src/
    App.js
    App.css
    App.test.js
    index.js
    index.css
    reportWebVitals.js
    setupTests.js
  package.json
  vercel.json
```

## Scripts

```bash
npm start
npm run build
npm test
```

## Deployment

The project is configured for Vercel with `vercel.json`.

```bash
npm run build
```

The optimized production output is generated in the `build` directory.
