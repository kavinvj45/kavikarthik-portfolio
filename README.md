# KaviKarthik Portfolio

Modern single-page portfolio for KaviKarthik V highlighting internships, skills, and projects with immersive visuals and theme personalization.

## Tech Stack
- HTML for semantic content and layout
- CSS for the layered cosmic design system, animations, and responsive grid
- Vanilla JavaScript for theme cycling, scroll animations, dynamic greetings, and a toast-based contact form UX

## Key Features
- **Hero & Summary**: Highlights role, availability, and executive overview with animated background elements.
- **Theme System**: Six pre-built themes (`glow`, `light`, `sunset`, `forest`, `midnight`, `neon`) persisted via `localStorage`.
- **Human-first Storytelling**: Human approach, skills, projects, and timeline showcased with animated panels.
- **Contact Experience**: Form validates client-side, resets after submission, and shows a temporary toast confirmation.
- **Progressive Enhancements**: Intersection Observer reveals sections smoothly; profile image has an inline SVG fallback.

## Getting Started
```bash
git clone https://github.com/kavinvj45/kavikarthik-portfolio.git
cd kavikarthik-portfolio
```

Open `index.html` directly in a browser or use any static server (e.g., VS Code Live Server, `npx serve .`) to benefit from localStorage-backed themes.

## Customization
- Replace `assets/kavikarthik coat photo.png` with another portrait while maintaining the same path or update the `<picture>` sources in `index.html`.
- Adjust theme palettes and background effects inside `style.css` (each theme is defined under `.theme-*`).
- Extend the projects, skills, or timeline sections by duplicating cards in `index.html`.

## Contact
- Email: `kavikarthikvit22@jkkmct.edu.in`
- Phone: `+91 93616 27774`
- Location: Tamil Nadu, India (remote-friendly)

Feel free to open issues or suggestions via GitHub if you have ideas to improve the portfolio experience.

