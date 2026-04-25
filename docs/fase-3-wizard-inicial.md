# Fase 3: Wizard Inicial Con Precio En Vivo

Fecha: 2026-04-25  
Estado: completada y verificada

## Objetivo

Crear el primer wizard visual de EventFlow conectado a la logica pura de cotizacion.

## Resultado

Se reemplazo la pantalla base por una experiencia usable de cotizacion con:

- Selector de tipo de evento.
- Control de cantidad de invitados.
- Campos de cliente y fecha tentativa.
- Selector de paquete base.
- Selector de extras.
- Resumen comercial con subtotal de paquete, ajuste por evento, extras y total.
- Imagen local de evento en `public/event-setup.jpg`.
- Copy visible de la app en ingles para presentacion de portafolio.

## Estado Agregado

`src/hooks/useQuoteState.ts` centraliza el estado del cotizador y expone:

- `createInitialQuoteState()`
- `updateQuoteState(quote, patch)`
- `toggleExtraId(quote, extraId)`
- `useQuoteState()`

La UI consume `calculateQuotePricing` por medio del hook. Los calculos no se duplican dentro de componentes React.

## Pruebas Agregadas

`src/hooks/useQuoteState.test.ts` valida:

- Estado inicial usable.
- Actualizaciones parciales sin mutar el estado original.
- Alternar extras preservando el resto de la cotizacion.

## Asset Visual

La imagen `public/event-setup.jpg` viene de Unsplash:

- Foto: "Formal event setup with round tables and elegant lighting"
- Autor: Filip Rankovic Grobgaard
- Fuente: https://unsplash.com/photos/formal-event-setup-with-round-tables-and-elegant-lighting-YYD8eqHwlFw

## Verificacion Ejecutada

```bash
pnpm test
pnpm lint
pnpm build
```

Resultado:

- `pnpm test`: 3 archivos de prueba passed, 7 tests passed.
- `pnpm lint`: sin errores reportados.
- `pnpm build`: build generado correctamente en `dist/`.

## Revision Visual

Se reviso la app con Playwright en:

- Desktop: 1440 x 1100.
- Mobile: 390 x 844.

Tambien se verifico interaccion del extra `DJ`: el total cambio de `$75,925` a `$83,425`, confirmando que la UI consume el estado y pricing en vivo.

## Correccion Posterior

Se ajusto el bloque `Client and date` para que los campos internos queden contenidos visualmente dentro del recuadro. Tambien se tradujo a ingles la UI visible y el catalogo renderizado.

## Siguiente Fase

Fase 4: generar propuesta final, texto para WhatsApp y accion de imprimir/guardar desde el navegador.
