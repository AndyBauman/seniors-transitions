# Senior Transitions Group Website

A modern, responsive website for Senior Transitions Group - expert senior transition specialists guiding families with compassion and expertise.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with header/footer
│   ├── globals.css           # Global styles
│   ├── about/                # About page
│   ├── services/             # Services pages
│   │   ├── page.tsx          # Services overview
│   │   ├── placement/        # Placement services
│   │   ├── real-estate/      # Real estate & downsizing
│   │   └── transition/       # Transition coordination
│   ├── for-families/         # For seniors & families
│   ├── for-placement-agents/ # For placement agents
│   ├── for-communities/      # For communities
│   ├── contact/              # Contact page with form
│   ├── privacy/              # Privacy policy
│   └── terms/                # Terms of service
└── components/
    ├── Header.tsx            # Site header with navigation
    └── Footer.tsx            # Site footer
```

## Features

- Responsive design for all screen sizes
- Modern, clean aesthetic with serif/sans-serif font pairing
- Accessible navigation with mobile menu
- Contact form with validation
- SEO-optimized metadata for all pages

## Deployment

This site is designed to be deployed on Vercel or any platform that supports Next.js.

```bash
# Deploy to Vercel
npx vercel
```

## License

© 2026 Senior Transitions Group. All rights reserved.
