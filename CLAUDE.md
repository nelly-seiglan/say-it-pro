# CLAUDE.md — say-it-pro

## Stack
- Framework: React + Vite
- Language: TypeScript
- Styling: Tailwind CSS v3 + CSS variables
- Icons: Lucide React
- Utils: clsx + tailwind-merge (`cn()` in `src/lib/utils.ts`)
- Voice: Web Speech API (browser-native, no library)
- AI: Anthropic SDK (`@anthropic-ai/sdk`)
- Package manager: npm
- Deploy: Vercel

## Code rules
- Never use inline styles — Tailwind classes or CSS variables only
- Never use Inter, Roboto, Arial, or system fonts
- Never install Framer Motion unless explicitly asked
- Mobile-first: design for small screens first, scale up

## Design
- Fonts: Syne (display) + DM Sans (body) — loaded from Google Fonts
- Theme: light
- Primary accent: `#7c3aed` (violet-600)
- CSS variables defined in `src/index.css`

## Project-specific notes
- **What it does**: POC of a voice-to-message AI rewriter. User speaks → voice is transcribed → Claude reformulates into a friendly-pro message ready to send.
- **Type**: POC/prototype, single page
- **Priority**: Speed — ship fast, rough edges ok
- **Language toggle**: French / English (affects speech recognition language + Claude prompt)
- **Copy targets**: Email, Slack, generic message
- **Interface**: Mobile-first, single page, minimalist
