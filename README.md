# HexSentinel Portfolio

A premium, high-performance personal website and digital headquarters for Kivairu Samuel,a Statistician, Data Scientist, AI Engineer, Software Engineer, and Hardware Innovator.

## Tech Stack
* **Framework**: Next.js (App Router)
* **Language**: TypeScript (Strict)
* **Styling**: Tailwind CSS v4
* **Animations**: Framer Motion
* **Icons**: Lucide React / React Icons
* **Package Manager**: npm

## Architecture Overview
This project strictly adheres to a predefined **Engineering Constitution**, ensuring modularity, scalability, and performance.
Key principles include:
- Separation of Concerns (UI vs Data)
- Server-First Components
- Single Responsibility Principle (SRP)
- Strict TypeScript constraints

## Folder Structure
```
/
├── app/                  # Next.js pages and API routes
├── components/           # React Components
│   ├── animations/       # Reusable Framer Motion wrappers
│   ├── layout/           # Structural components (Nav, Footer)
│   ├── sections/         # Page sections
│   └── ui/               # Granular design system components
├── constants/            # Global constant values and config
├── data/                 # Content separated from UI
├── hooks/                # Custom React hooks
├── lib/                  # Third-party library initializations
├── public/               # Static assets
├── styles/               # CSS modules and variables
├── types/                # TypeScript definitions
└── utils/                # Pure helper functions (e.g., tailwind merger)
```

## Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and add necessary variables.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing
This project utilizes Vitest and React Testing Library.
Run tests using:
```bash
npm run test
```
(Tests configuration pending in later phases)

## License
All rights reserved © Kivairu Samuel 2026
