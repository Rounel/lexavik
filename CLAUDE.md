# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
```

## Architecture

**LEXAVIK** is a Next.js 16 law firm website using the App Router with React 19 and Tailwind CSS v4.

### Routing

Pages live in `src/app/` using Next.js App Router conventions:
- Static pages: `about/`, `contact/`, `locations/`, `team/`
- Dynamic pages: `news/[slug]/`, `practices/[id]/`
- API route: `api/contact/route.ts` — contact form handler using Resend for email

### Internationalization

Custom i18n with Zustand + dictionaries (no next-intl):

- **Store:** `src/hooks/use-language.ts` — Zustand store with `language: 'en' | 'fr'` (defaults to `'fr'`) and `changeLanguage(lang)`
- **Dictionaries:** `src/hooks/dictionnary/` — one file per page/section, each exporting an object where values are `{ en: string, fr: string }`
- **Usage pattern:**
  ```ts
  const { language } = useStore()
  const text = SOME_DICT.Key[language]
  ```

When adding or editing text, always add both `en` and `fr` entries to the relevant dictionary file.

### Content / Data

All site content (practice areas, team members, news, company info) lives in `src/constants/company.ts`. There is no CMS or database — content is static. Images are in `public/`.

### Component Structure

- `src/components/ui/` — Shadcn UI primitives (do not edit directly)
- `src/components/` — Custom components (Navbar, Footer, HeroSection, HeroBanner, Section, FadeUp, etc.)

**Shadcn config:** `components.json` — style "new-york", stone base color, `@/*` alias maps to `src/*`.

### Styling

Tailwind CSS v4 with CSS variables in `src/app/globals.css`:
- Color palette: `primary` (golden), `secondary` (navy), `tertiary` — each with 50–950 scale in OKLCH
- Fonts: DM Sans (body), DM Serif Text, Bitter (headings)
- Dark navy background (`secondary-950`), golden accent (`primary-700`)

### Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Email delivery via Resend in `/api/contact` |

Set in `.env.local`.
