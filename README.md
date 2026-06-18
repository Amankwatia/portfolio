# Bright Osei Amankwatia – Personal Website

Personal professional website for **Bright Osei Amankwatia** — ICT & Computing Educator, Computer Science Researcher, and AI & Web Solutions Developer.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Vue 3 (Composition API) |
| Build Tool | Vite |
| Routing | Vue Router 4 (Hash History) |
| CSS Framework | Bootstrap 5 |
| Icons | Bootstrap Icons |
| Deployment | GitHub Pages via GitHub Actions |

> Tailwind CSS was deliberately excluded to avoid visual conflicts with Bootstrap's utility classes. Bootstrap is the sole layout/component framework.

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/teaching` | Teaching & Leadership |
| `/research` | Research & Publications |
| `/projects` | Projects / Portfolio |
| `/software-solutions` | Software Solutions (AI & Web Studio) |
| `/programs-events` | Programs & Events |
| `/contact` | Contact |

---

## Setup & Development

### Prerequisites
- Node.js 18+
- npm 9+

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for production
```bash
npm run build
```
Output goes to `dist/`

### Preview production build locally
```bash
npm run preview
```

---

## GitHub Pages Deployment

The site deploys automatically via `.github/workflows/deploy.yml` on every push to `main`.

### Setup steps (first time)
1. Push this repository to GitHub.
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Source**, select **GitHub Actions**.
4. Push to `main` — the workflow will build and deploy automatically.

### Base URL configuration
The deploy workflow now sets `VITE_BASE_PATH` automatically:

- For project sites (`https://USERNAME.github.io/REPOSITORY_NAME/`): `VITE_BASE_PATH=/<repo>/`
- For user/org sites (`https://USERNAME.github.io/`): `VITE_BASE_PATH=/`

`vite.config.js` already reads this variable and falls back to `/` for local development.

The router uses **hash history** (`/#/route`), so no server-side redirect configuration is required.

---

## Updating Content

All content is in `src/data/` — edit these files without touching component code.

| File | What to update |
|------|---------------|
| `src/data/profile.js` | Name, title, bio, education, skills, social links, email |
| `src/data/publications.js` | Add/remove/edit peer-reviewed publications |
| `src/data/projects.js` | Add/remove/edit portfolio projects |
| `src/data/services.js` | Add/remove/edit software services |
| `src/data/programsEvents.js` | Add/remove programs, events, engagements |
| `src/data/timeline.js` | Add/remove professional experience items |
| `src/data/skills.js` | Add/remove skill groups and badges |

---

## Replacing the Profile Photo

1. Prepare a professional photo (portrait orientation, good lighting).
2. Save it as `src/assets/images/profile.jpg` (or `.png`).
3. Update the `src` attribute in `HeroSection.vue` and `AboutView.vue`:

```html
<!-- Before -->
<img src="../assets/images/profile-placeholder.svg" ... />

<!-- After -->
<img src="../assets/images/profile.jpg" ... />
```

---

## Contact Form

The contact form uses a **mailto fallback** — clicking "Send Message" opens the user's email client with the message pre-filled.

### To integrate Formspree (no backend needed):
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and get your endpoint URL.
3. In `ContactView.vue`, replace the form's `@submit.prevent` handler with:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## Notes on Tailwind CSS

Tailwind CSS was intentionally **not included**. Bootstrap 5 provides all necessary layout, grid, and utility styles. Adding Tailwind would create conflicting utility class names that Bootstrap already defines differently.

---

## Future Improvements

- Replace placeholder social links with real profile URLs
- Add real professional photo
- Integrate Formspree for serverless form submission
- Add favicon
- Expand projects as new work is completed
- Add mobile app development services when ready

