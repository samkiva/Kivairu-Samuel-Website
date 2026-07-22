# Kivairu Samuel — Portfolio & Engineering Platform

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-cyan?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> The official digital headquarters and portfolio platform for **Kivairu Samuel** — AI Engineer, Software Developer, Data Analyst, and Embedded Systems Innovator based in Nairobi, Kenya.

---

## 🌟 Key Features

- **Server-First Architecture**: 88%+ of all UI components render as pure React Server Components (RSC) for instantaneous page loads and minimal JavaScript bundle footprint.
- **Capability-Based Skills Engine**: Groups technical expertise into actionable engineering capabilities rather than unhelpful progress bars.
- **Detailed Engineering Case Studies**: Interactive case study modals detailing Problem Statements, Architectural Solutions, Lessons Learned, and Technical Roadmaps for 6 signature projects.
- **Embedded & Aerospace Spotlight**: Prominently highlights hardware firmware development (ESP32/STM32) and the **Aerospace System Research Initiative**.
- **Scroll-Spy Section Navigation**: Dynamic `IntersectionObserver` active tab highlighting across all 7 home sections.
- **Production-Ready Contact Handler**: Server-side API handler (`app/api/contact/route.ts`) featuring Zod-style validation, honeypot spam protection, and Resend email service integration.
- **Accessibility & SEO Excellence**: Screen-reader skip-to-content links, keyboard focus management, Schema.org `Person` JSON-LD structured data, dynamic sitemap, robots, and webmanifest.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 + Vanilla CSS Variables |
| **Animation System** | Framer Motion (Centralized Motion Wrappers) |
| **Icons** | Lucide React + React Icons |
| **Email API** | Resend API |
| **Analytics** | Vercel Analytics + GA4 / Clarity Event Tracker |
| **Deployment** | Vercel Platform |

---

## 📁 Repository Architecture

```text
├── app/                        # Next.js App Router routes & layouts
│   ├── api/contact/route.ts    # Contact form API backend handler
│   ├── privacy/page.tsx        # Privacy policy page
│   ├── terms/page.tsx          # Terms of service page
│   ├── not-found.tsx           # Custom 404 error page
│   ├── layout.tsx              # Root layout & global metadata
│   ├── page.tsx                # Homepage section orchestrator
│   ├── robots.ts               # Dynamic robots.txt
│   ├── sitemap.ts              # Dynamic sitemap.xml
│   └── manifest.ts             # Web Application Manifest
├── components/                 # React UI & Section Components
│   ├── animations/             # Reusable motion wrappers (SlideUp, HoverLift, etc.)
│   ├── layout/                 # Container, Section, Navbar, Footer, DesktopNav
│   ├── ui/                     # GlassCard, Badge, Button, Input, Textarea, Modal
│   └── sections/               # Feature modules (hero, about, skills, services, projects, experience, contact)
├── config/                     # Centralized configuration (SEO, navigation, socials, theme)
├── data/                       # Strongly typed data layers (about.ts, skills.ts, projects.ts, etc.)
├── lib/                        # Utility libraries & analytics trackers
└── public/                     # Static media assets & resume.pdf
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/samkiva/Kivairu-Samuel-Website.git
   cd Kivairu-Samuel-Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API Key:
   ```env
   RESEND_API_KEY=re_123456789...
   NEXT_PUBLIC_APP_URL=https://kivairusamuel.com
   ```

4. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Production Build & Quality Validation

Run the full validation suite:

```bash
# 1. Run ESLint
npm run lint

# 2. Run TypeScript strict type check
npx tsc --noEmit

# 3. Build optimized production bundle
npm run build
```

---

## ☁️ Deployment (Vercel)

The repository is configured for one-click deployment on Vercel:

1. Import your GitHub repository to [Vercel](https://vercel.com).
2. Set Environment Variables:
   - `RESEND_API_KEY`: Your Resend secret key.
   - `NEXT_PUBLIC_APP_URL`: Production domain URL.
3. Deploy! Vercel will automatically build static pages and serverless API handlers.

---

## 📄 License

This repository is open-sourced under the **MIT License**. Feel free to inspect the architecture and adapt the design system for your own projects.

---

**Built with precision & passion by Kivairu Samuel.**
