# Archies Media

Marketing website for **Archies Media** — a performance-driven digital marketing agency in India. The site showcases services, team, pricing, testimonials, and a contact form on a single scrollable landing page.

**Live sections:** Hero · Services · About · Why Archies · Team · Testimonials · Pricing · Contact

---

## Tech stack

| Layer           | Technology                                                    |
| --------------- | ------------------------------------------------------------- |
| Framework       | [TanStack Start](https://tanstack.com/start) (React 19 + SSR) |
| Routing         | [TanStack Router](https://tanstack.com/router) (file-based)   |
| Build tool      | [Vite](https://vitejs.dev/) 7                                 |
| Styling         | [Tailwind CSS](https://tailwindcss.com/) 4 + custom CSS       |
| UI components   | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)     |
| Icons           | [Lucide React](https://lucide.dev/)                           |
| Server / deploy | [Nitro](https://nitro.build/) (Cloudflare Workers preset)     |
| Language        | TypeScript                                                    |

**Fonts:** Plus Jakarta Sans (body & headings), Playfair Display (italic accents)

**Brand colors:** Navy `#0A1F44` · Amber `#F59E0B` · Accent gold `#D97706`

---

## Prerequisites

- **Node.js** 22 or newer
- **npm** (or Bun)

---

## Getting started

```bash
# Clone the repository (if applicable)
cd Archies

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:8080** in your browser.

---

## Scripts

| Command             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Start Vite dev server with hot reload (port **8080**)  |
| `npm run build`     | Production build → `dist/` (client + server via Nitro) |
| `npm run build:dev` | Build in development mode                              |
| `npm run preview`   | Preview the production build locally                   |
| `npm run lint`      | Run ESLint                                             |
| `npm run format`    | Format code with Prettier                              |

---

## Project structure

```
Archies/
├── src/
│   ├── routes/
│   │   ├── index.tsx       # Homepage (all landing sections)
│   │   ├── __root.tsx      # Root layout, fonts, meta tags
│   │   └── README.md       # TanStack Start routing notes
│   ├── components/ui/      # shadcn/Radix UI components
│   ├── assets/             # Logo and static images
│   ├── lib/                # Server config, utils, error handling
│   ├── hooks/              # Shared React hooks
│   ├── styles.css          # Global styles + section CSS
│   ├── server.ts           # SSR server entry
│   ├── start.ts            # TanStack Start instance
│   ├── router.tsx          # Router setup
│   └── routeTree.gen.ts    # Auto-generated route tree (do not edit)
├── vite.config.ts          # Vite + TanStack Start + Nitro config
├── package.json
├── tsconfig.json
└── README.md
```

---

## Key features

- **Floating pill navbar** — Logo left, centered nav pill, CTA right; scroll-spy active states; mobile hamburger drawer
- **Split typography headings** — Bold uppercase navy + italic Playfair Display accent
- **Scroll animations** — Reveal, slide, and counter effects on scroll
- **Contact form** — Client-side demo submit (no backend wired yet)
- **Pricing toggle** — Monthly / annual (-20%) plans
- **Testimonials carousel** — Auto-rotating with manual controls
- **Custom cursor** — Desktop-only amber ring (hidden on touch devices)

---

## Environment variables

Create a `.env` file in the project root if needed:

```env
# Public (client-safe) — must be prefixed with VITE_
# VITE_API_URL=https://example.com

# Server-only — use in src/lib/config.server.ts or server functions
# DATABASE_URL=
# STRIPE_SECRET_KEY=
```

Server-only values belong in `src/lib/config.server.ts` or TanStack Start `createServerFn` handlers — never in `VITE_` variables.

---

## Production build & deploy

```bash
npm run build
```

Output:

- `dist/client/` — static assets
- `dist/server/` — server bundle (Cloudflare Workers by default)

Preview locally:

```bash
npm run preview
```

Deploy to Cloudflare (Nitro generates `wrangler.json` in `dist/server/`):

```bash
npx nitro deploy --prebuilt
```

Override the Nitro preset:

```bash
NITRO_PRESET=node-server npm run build
```

---

## Customization

| What to change           | Where                              |
| ------------------------ | ---------------------------------- |
| Page content & sections  | `src/routes/index.tsx`             |
| Global / section styles  | `src/styles.css`                   |
| Logo                     | `src/assets/archies-logo.png`      |
| Team members             | `team` array in `index.tsx`        |
| Pricing plans            | `Pricing` component in `index.tsx` |
| Meta / SEO defaults      | `src/routes/__root.tsx`            |
| Contact email / WhatsApp | Contact section in `index.tsx`     |

---

## Adding routes

TanStack Start uses **file-based routing** in `src/routes/`. See `src/routes/README.md` for conventions. The homepage is `src/routes/index.tsx` (`/`).

---

## License

Private project. All rights reserved © Archies Media.
