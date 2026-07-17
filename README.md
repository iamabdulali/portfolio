# Abdul Ali — Developer Portfolio

A playful, fully responsive portfolio website built to showcase my work as a full-stack developer. Single-page layout with smooth in-page navigation, dark mode, and a working contact form.

🔗 **Live site:** [add your deployed URL here]

![Portfolio preview](./public/preview.png)

## About

This is my personal portfolio — a single-page React app with five sections (Home, About, Projects, Skills, Contact). It leans into a playful, hand-crafted aesthetic with micro-interactions, an orbiting tech-stack animation, and a light/dark theme that follows the system preference.

## Features

- **Responsive design** — works across mobile, tablet, and desktop
- **Dark mode** — follows the system setting by default, with a toggle that remembers your choice
- **Working contact form** — sends messages straight to my inbox via EmailJS (no backend required)
- **Smooth scroll navigation** — nav links and buttons scroll to sections on one page
- **Resume download** — one-click PDF download
- **Animated tech stack** — icons orbit a central chip, with hover interactions throughout
- **Accessible** — respects `prefers-reduced-motion`, semantic markup, aria labels

## Tech Stack

- **Framework:** React + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI components:** shadcn/ui (Base UI)
- **Icons:** Lucide + Simple Icons
- **Theming:** next-themes
- **Contact form:** EmailJS
- **Deployment:** [Netlify / Vercel — update to match]

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repo
git clone https://github.com/iamabdulali/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root with your own credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these for free at [emailjs.com](https://www.emailjs.com). Without them, every part of the site works except sending a message through the form.

### Build

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── assets/         # Images, screenshots, avatar
├── components/     # Shared components (ThemeToggle, shadcn/ui)
├── pages/          # Home, About, Projects, TechStack, Contact
├── App.tsx         # Composes the sections into one page
└── main.tsx        # Entry point + ThemeProvider
public/
└── Resume-Abdul-Ali.pdf
```

## Contact

- **Portfolio:** [your live URL]
- **GitHub:** [@iamabdulali](https://github.com/iamabdulali)
- **Fiverr:** [@abdulalli](https://www.fiverr.com/abdulalli)
- **Email:** iamabdulali@gmail.com

---

Built with care by Abdul Ali · 2026