# Vinoth Rasamanickam — Portfolio

A modern, responsive portfolio built with React 19, Vite, Tailwind CSS v4, and Framer Motion. Showcases projects, skills, experience, and contact information in a single-page layout with scroll-based navigation.

## Features

- **Modern UI**: Glass sticky navbar, bento-style about section, featured project layout, and scroll reveal animations
- **Responsive**: Mobile-first layout from 480px through desktop
- **Accessible**: Skip link, semantic landmarks, keyboard focus styles, reduced-motion support
- **SEO**: Meta description, Open Graph tags, and JSON-LD Person schema
- **Fast builds**: Vite 6 with optimized asset bundling

## Tech stack

- React 19
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion
- Lucide React (icons)
- Outfit (via `@fontsource/outfit`)
- ESLint 9

## Project structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Experience/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   ├── Skills/
│   └── ui/           # SectionHeading, Reveal
├── data/
│   ├── skills.js
│   ├── projects.js
│   └── history.js
├── hooks/
│   └── useActiveSection.js
├── App.jsx
├── main.jsx
└── index.css         # Tailwind + theme tokens
public/
└── assets/cv/        # CV PDF for download
```

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install and run

```bash
git clone https://github.com/vinoth1211/rvinoth11-Portfolio.git
cd rvinoth11-Portfolio
npm install
npm run dev
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Customization

1. **Copy & content**: Edit section components in `src/components/` (Hero, About, etc.)
2. **Skills**: Update `src/data/skills.js` — import images from `assets/skills/`
3. **Projects**: Update `src/data/projects.js` — set `featured: true` on one project; add live demo URLs when deployed
4. **Experience**: Update `src/data/history.js` with roles, dates, and bullet points
5. **Theme**: Adjust colors in `src/index.css` under `@theme`
6. **CV**: Place `Vinoth_Rasamanickam_CV.pdf` in `public/assets/cv/`

### Adding a skill

```javascript
import newImg from "../../assets/skills/new-skill.png";

export const skills = [
  // ...
  { title: "New Skill", imageSrc: newImg },
];
```

## Deployment

Optimized for [Vercel](https://vercel.com):

1. Run `npm run build`
2. Connect the GitHub repo to Vercel
3. Update `index.html` canonical and `og:url` to your live domain

## Contact

- **Email**: [vino6810403@gmail.com](mailto:vino6810403@gmail.com)
- **LinkedIn**: [vinoth-rasamanickam](https://www.linkedin.com/in/vinoth-rasamanickam-537597302/)
- **GitHub**: [vinoth1211](https://github.com/vinoth1211)

## License

MIT — see [LICENSE](LICENSE).
