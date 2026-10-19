# Mohammed Hasen — Full-Stack Developer Portfolio

A premium, responsive personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Sticky navigation with active-section highlighting and mobile menu
- Hero with floating technology icons orbit
- About, Skills, Featured Projects, Experience (timeline), and Education sections
- Working contact form with validation, loading/success/error states, and spam honeypot
- Contact form delivers messages to your inbox via EmailJS
- Dark/light theme toggle (defaults to dark)
- SEO metadata, sitemap, and robots config
- Reduced-motion aware animations

## Local Development

```bash
npm install
npm run dev
```

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, and `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` in the Vercel dashboard under Settings → Environment Variables.
4. Deploy.

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion
- Lucide React + react-icons
- EmailJS (email delivery for the contact form)

# my-personal-portfolio