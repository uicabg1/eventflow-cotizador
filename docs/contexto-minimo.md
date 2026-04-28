# Contexto Minimo Documentado

Usar este archivo como primer contexto en nuevas sesiones. La idea es ahorrar tokens: leer esto antes de abrir la especificacion larga.

## Proyecto

EventFlow es una static web app para cotizar eventos. Debe sentirse como una herramienta comercial real para un negocio local, no como una landing generica.

## Estado Actual

Fase 1 completada:

- Proyecto creado con Vite, React y TypeScript.
- Tailwind CSS configurado con `@tailwindcss/vite`.
- Dependencias instaladas: `motion`, `lucide-react`, `date-fns`, `vitest`.
- Datos mock creados en `src/data`.
- Tipos base creados en `src/domain/types.ts`.
- Prueba minima creada en `src/data/eventflowData.test.ts`.
- README y docs iniciales agregados.
- Repositorio git local inicializado en rama `main`.
- Commit base creado: `4ea3a54 chore: scaffold eventflow base`.

Fase 2 completada:

- Logica de cotizacion creada en `src/domain/pricing.ts`.
- Pruebas TDD agregadas en `src/domain/pricing.test.ts`.
- El calculo devuelve subtotal de paquete, ajuste por tipo de evento, extras y total.
- La logica valida que `guestCount` sea un entero positivo.
- Registro de fase agregado en `docs/fase-2-logica-cotizacion.md`.

Fase 3 completada:

- Estado del cotizador creado en `src/hooks/useQuoteState.ts`.
- Pruebas de estado agregadas en `src/hooks/useQuoteState.test.ts`.
- Prueba de render inicial agregada en `src/App.test.tsx`.
- Primer wizard visual creado en `src/App.tsx`.
- La UI consume `calculateQuotePricing` y muestra precio en vivo.
- Copy visible de la app y catalogo renderizado en ingles.
- Fecha tentativa capturada con selectores de mes, dia y ano para evitar texto libre ambiguo.
- Imagen local agregada en `public/event-setup.jpg`.
- Registro de fase agregado en `docs/fase-3-wizard-inicial.md`.

Fase 4 completada:

- Logica pura de propuesta creada en `src/domain/proposal.ts`.
- Pruebas TDD agregadas en `src/domain/proposal.test.ts`.
- `src/App.tsx` ahora renderiza propuesta imprimible, mensaje de WhatsApp y accion de imprimir/guardar PDF.
- `src/App.test.tsx` valida controles de propuesta, WhatsApp e impresion.
- Registro de fase actualizado en `docs/fase-4-propuesta-final.md`.

Fase 5 completada:

- Validacion de invitados creada en `src/domain/validation.ts`.
- Persistencia local creada en `src/hooks/useLocalStorage.ts`.
- `useQuoteState` ahora recupera y guarda la cotizacion en `localStorage`.
- `src/domain/pricing.ts` rechaza invitados fuera del rango 10-500.
- `src/domain/proposal.ts` agrega nota de validez.
- `src/App.tsx` muestra incluidos/recomendacion en paquetes y usa estilos de impresion.
- `src/index.css` agrega `@media print` para imprimir solo la propuesta.
- Registro de fase actualizado en `docs/fase-5-cierre-brechas-mvp.md`.
- La Fase 5 cierra el MVP: cotizacion, comparador de paquetes, resumen en vivo, propuesta, WhatsApp, impresion limpia, persistencia local, validacion de invitados y responsive basico.
- La fase documental de resumen/comparador ya no se mantiene como fase separada; ese alcance queda absorbido por el cierre de Fase 5.

Fase 6 completada:

- Registro inicial creado en `docs/fase-6-portafolio-despliegue.md`.
- Alcance planeado: pulido de portafolio, despliegue en Vercel, capturas finales, README con demo y caso de estudio.
- Verificacion base de Fase 6 ejecutada el 2026-04-28: `pnpm test`, `pnpm lint` y `pnpm build`.
- Revision visual desktop/mobile ejecutada el 2026-04-28 con Playwright en `http://localhost:5173/`.
- Capturas finales del flujo preparadas el 2026-04-28 en `output/playwright/`.
- Despliegue en Vercel completado el 2026-04-28 con `npx vercel deploy --yes`.
- Demo publica: `https://eventflow-cotizador.vercel.app`.
- README actualizado el 2026-04-28 con la URL de demo.
- Caso de estudio creado el 2026-04-28 en `docs/caso-estudio-eventflow.md`.
- Cambios finales de Fase 6 publicados en GitHub con commit `7d21c8b docs: publish phase 6 portfolio assets`.
- Estado final documentado con commit `150f721 docs: mark phase 6 published`.
- Repositorio cambiado a publico el 2026-04-28.
- Estado: fase 6 completada.

## Estado GitHub

Repositorio remoto configurado:

```text
origin https://github.com/uicabg1/eventflow-cotizador.git
```

GitHub CLI (`gh`) esta instalado y autenticado con la cuenta `uicabg1`.

Ultimo push ejecutado:

```bash
git push origin main
```

Resultado:

```text
150f721 main -> main
```

Visibilidad actual:

```text
PUBLIC
```

## Stack

React, Vite, TypeScript, Tailwind CSS, Motion for React, lucide-react, date-fns, Vitest. Despliegue planeado: Vercel.

## Archivos Clave

- `README.md`: resumen publico para GitHub.
- `docs/fase-1-base.md`: registro de base tecnica.
- `docs/fase-2-logica-cotizacion.md`: registro de logica de precios.
- `docs/fase-3-wizard-inicial.md`: registro del wizard inicial.
- `docs/fase-4-propuesta-final.md`: registro de propuesta final, WhatsApp e impresion.
- `docs/fase-5-cierre-brechas-mvp.md`: cierre verificado de brechas del MVP.
- `docs/fase-6-portafolio-despliegue.md`: plan de portafolio, despliegue y demo.
- `docs/caso-estudio-eventflow.md`: caso de estudio breve para portafolio.
- `docs/eventflow-cotizador-interactivo.md`: especificacion larga del producto.
- `src/data/eventTypes.ts`: tipos de evento.
- `src/data/packages.ts`: paquetes.
- `src/data/extras.ts`: extras.
- `src/domain/types.ts`: tipos compartidos.
- `src/domain/pricing.ts`: logica pura de cotizacion.
- `src/domain/pricing.test.ts`: pruebas de logica de cotizacion.
- `src/domain/proposal.ts`: logica pura de propuesta y mensaje de WhatsApp.
- `src/domain/proposal.test.ts`: pruebas de generacion de propuesta.
- `src/domain/validation.ts`: validacion y normalizacion de invitados.
- `src/domain/validation.test.ts`: pruebas de rango de invitados 10-500.
- `src/hooks/useLocalStorage.ts`: helpers de persistencia local de cotizacion.
- `src/hooks/useLocalStorage.test.ts`: pruebas de lectura/escritura de cotizacion persistida.
- `src/hooks/useQuoteState.ts`: estado del cotizador y pricing derivado.
- `src/hooks/useQuoteState.test.ts`: pruebas de estado del cotizador.
- `src/App.test.tsx`: pruebas de render del wizard y modulo de propuesta.
- `src/App.tsx`: wizard visual con propuesta final integrada.

## Siguiente Paso

Siguiente paso sugerido: usar EventFlow como evidencia de portafolio.

Orden recomendado:

1. Agregar la demo al portafolio personal.
2. Usar `docs/caso-estudio-eventflow.md` como base del caso publico.
3. Opcional: conectar GitHub con Vercel para despliegues automaticos.

## Ultima Validacion

```bash
pnpm test
pnpm lint
pnpm build
```

Resultado:

- `pnpm test`: 7 archivos de prueba passed, 21 tests passed.
- `pnpm lint`: sin errores reportados.
- `pnpm build`: build generado correctamente en `dist/`.

Nota 2026-04-28: esta validacion corresponde a la primera tarea ejecutada de Fase 6.

## Ultima Revision Visual

Fecha: 2026-04-28

Se reviso con Playwright sobre servidor local `pnpm dev`:

- Desktop: 1440 x 1100, sin overflow horizontal, sin errores de consola, hero/wizard/resumen/extras visibles en el primer viewport.
- Mobile: 390 x 844, sin overflow horizontal, sin errores de consola, tarjetas apiladas correctamente.
- Mobile propuesta: controles de WhatsApp e impresion visibles y sin encimes en la seccion final.

## Capturas Finales

Fecha: 2026-04-28

Capturas generadas con Playwright sobre servidor local `pnpm dev`:

- `output/playwright/eventflow-desktop-initial.png`: pantalla inicial desktop.
- `output/playwright/eventflow-desktop-comparison.png`: comparador de paquetes desktop.
- `output/playwright/eventflow-desktop-proposal.png`: propuesta final desktop.
- `output/playwright/eventflow-mobile-initial.png`: vista inicial mobile.

## Despliegue Vercel

Fecha: 2026-04-28

Comandos ejecutados:

```bash
npx vercel --version
npx vercel whoami
npx vercel deploy --yes
curl -I -L https://eventflow-cotizador.vercel.app
```

Resultado:

- `npx vercel --version`: Vercel CLI 52.0.0 disponible via `npx`.
- `npx vercel deploy --yes`: deployment completado en Vercel.
- URL de deployment: `https://eventflow-cotizador-gqni5yt6n-uicabgadiel67-1227s-projects.vercel.app`.
- Alias publico: `https://eventflow-cotizador.vercel.app`.
- Inspector: `https://vercel.com/uicabgadiel67-1227s-projects/eventflow-cotizador/BZrB9wJWN5nF3bF6uaUx56XUfiT7`.
- Verificacion URL: `curl -I -L` devuelve `HTTP/2 200`.
- Nota: Vercel creo `.vercel/project.json` local y agrego `.vercel` a `.gitignore`.
- Nota: el intento de conectar el repo GitHub a Vercel fallo por falta de Login Connection de GitHub en Vercel; el deployment manual si quedo publicado.

## README Publico

Fecha: 2026-04-28

Actualizacion ejecutada:

- `README.md` incluye `https://eventflow-cotizador.vercel.app`.
- Estado publico del proyecto descrito como Fase 6 en progreso.
- Stack actualizado para reflejar Vercel como despliegue activo, no solo planeado.

## Caso De Estudio

Fecha: 2026-04-28

Archivo creado:

- `docs/caso-estudio-eventflow.md`

Contenido:

- Resumen del proyecto.
- Problema.
- Solucion.
- Decisiones tecnicas.
- Calidad y verificacion.
- Resultado.
- Siguientes mejoras posibles.

## Decision De Visibilidad

Fecha: 2026-04-28

Revision:

- Demo publica responde correctamente.
- README en GitHub ya incluye la URL de demo.
- Capturas finales no contienen datos sensibles.
- GitHub reporta el repositorio `uicabg1/eventflow-cotizador` como publico.
- Cambios finales de Fase 6 publicados en `main`.

Decision:

- Repositorio publico para usarlo como evidencia de portafolio.

## Reglas De Trabajo

- La UI del wizard debe consumir `src/domain/pricing.ts`, no recrear calculos.
- La UI de propuesta debe consumir `src/domain/proposal.ts`, no armar copy comercial dentro de React.
- La persistencia local debe pasar por `src/hooks/useLocalStorage.ts`.
- Los invitados soportados son 10-500.
- La fase 6 debe enfocarse en presentacion, despliegue y evidencia de portafolio; no ampliar el producto.
- No agregar backend, login, pagos ni panel admin.
- No meter calculos dentro de componentes React.
- Mantener funciones puras en `src/domain`.
- Documentar cada fase antes de avanzar a la siguiente.
