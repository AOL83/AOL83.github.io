# Alex Olivares Portfolio

A mobile-first GitHub Pages portfolio site for showcasing projects, services, and contact details.

## Purpose

This site highlights featured work, shares a short bio, and provides a contact form for new
collaborations with a shared, CabinApp-inspired footer and a light/dark theme toggle.

## File tree

```
.
├── 404.html
├── about
│   └── index.html
├── assets
│   ├── css
│   │   └── main.css
│   └── js
│       ├── include-partials.js
│       ├── main.js
│       └── theme.js
├── contact
│   └── index.html
├── index.html
├── partials
│   └── footer.html
├── projects
│   ├── cabin-app
│   │   └── index.html
│   ├── index.html
│   ├── replicator-terminal
│   │   └── index.html
│   └── rock-paper-scissors
│       └── index.html
```

## How to run locally

Open `index.html` directly in a browser, or serve the folder with a simple static server:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment notes (GitHub Pages)

1. Push the repository to GitHub.
2. In **Settings → Pages**, select the branch and `/ (root)` folder.
3. Save. GitHub Pages will publish the site automatically.

## Known limitations

- Contact form submissions are currently client-side only and do not send data anywhere.
- Image assets are referenced but must be supplied in `assets/img/`.

## Next steps

- Connect the contact form to a form handling service.
- Add real project imagery and performance-optimized assets.
- Expand case studies with measurable outcomes and testimonials.
