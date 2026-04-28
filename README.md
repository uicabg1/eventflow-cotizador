# EventFlow

Static web app for an event business quote builder. EventFlow lets users configure an event, compare packages, add extras and prepare a professional proposal without requiring a backend.

Live demo: https://eventflow-cotizador.vercel.app

## Current Status

Phase 6 is in progress: the MVP is complete, deployed to Vercel and being prepared as a portfolio case study.

The app includes quote pricing logic, tested quote state helpers, a live pricing wizard, a client-ready proposal module, local persistence, print polish and responsive review.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Motion for React
- lucide-react
- date-fns
- Vitest
- localStorage for quote persistence
- Vercel for deployment

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
- `docs/fase-5-cierre-brechas-mvp.md`: completed MVP gap closure.
- `docs/fase-6-portafolio-despliegue.md`: planned portfolio, deployment and demo handoff.
- `docs/caso-estudio-eventflow.md`: portfolio case study.
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
