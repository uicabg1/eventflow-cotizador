# EventFlow

Static web app for an event business quote builder. EventFlow lets users configure an event, compare packages, add extras and prepare a professional proposal without requiring a backend.

## Current Status

Phase 4 is complete: the app has quote pricing logic, tested quote state helpers, a usable visual wizard with live pricing, and a client-ready proposal module.

Next phase: close MVP gaps with local persistence, print polish and responsive review.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Motion for React
- lucide-react
- date-fns
- Vitest
- localStorage planned for quote persistence
- Vercel planned for deployment

## Project Structure

```text
src/
  components/     Reusable UI components
  data/           Editable event, package and extras catalog
  domain/         Types and pure business logic
  hooks/          React hooks for quote state and persistence
  styles/         Shared style helpers and future tokens
  App.tsx         Visual quote wizard with live pricing
  main.tsx        React entry point
```

## Scripts

```bash
pnpm dev
pnpm test
pnpm lint
pnpm build
pnpm preview
```

## Documentation

- `docs/contexto-minimo.md`: shortest handoff context for future AI/dev sessions.
- `docs/fase-1-base.md`: what Phase 1 created and verified.
- `docs/fase-2-logica-cotizacion.md`: pricing logic created with TDD.
- `docs/fase-3-wizard-inicial.md`: first visual wizard with live pricing.
- `docs/fase-4-propuesta-final.md`: completed proposal, WhatsApp and print module.
- `docs/fase-5-cierre-brechas-mvp.md`: planned MVP gap closure.
- `eventflow-cotizador-interactivo.md`: full product spec and implementation direction.

## Development Notes

- Keep business logic in `src/domain`.
- Keep editable catalog data in `src/data`.
- Write tests before pricing, proposal or validation logic.
- Avoid adding backend, auth, payments or admin panel in the MVP.
- Keep the first screen focused on the working quote builder once the wizard exists.

## Verification

The current baseline was verified with:

```bash
pnpm test
pnpm lint
pnpm build
```
