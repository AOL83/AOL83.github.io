# Alex Olivares Portfolio

A mobile-first GitHub Pages portfolio site for showcasing projects, services, and contact details.

## Purpose

This site highlights featured work, shares a short bio, and provides a contact form for new
collaborations.

## File tree

```
.
├── about
│   └── index.html
├── assets
│   ├── css
│   │   └── main.css
│   └── js
│       └── main.js
├── contact
│   └── index.html
├── projects
│   └── index.html
└── index.html
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
