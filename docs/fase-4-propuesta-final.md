# Fase 4: Propuesta Final, WhatsApp E Impresion

Fecha: 2026-04-26  
Estado: documentacion inicial, pendiente de implementacion

## Objetivo

Convertir la cotizacion viva de EventFlow en una propuesta comercial lista para compartir con cliente, sin agregar backend ni salir del flujo local del navegador.

## Alcance Esperado

La fase 4 debe agregar:

- Generacion de propuesta final a partir de `QuoteState` y `QuotePricing`.
- Texto comercial listo para WhatsApp.
- Accion de imprimir o guardar como PDF desde el navegador con `window.print()`.
- Conexion del boton `Prepare proposal` con una vista o bloque de propuesta.
- Pruebas de la generacion de texto antes de conectar la UI.

## Arquitectura Planeada

La generacion de propuesta debe vivir en `src/domain/proposal.ts` como logica pura. La UI solo debe consumir esa salida, igual que en fase 3 consume `calculateQuotePricing`.

La propuesta debe recibir datos ya calculados, no recalcular precios dentro de React. El flujo esperado es:

1. `useQuoteState()` mantiene `quote` y `pricing`.
2. `src/domain/proposal.ts` transforma `quote` y `pricing` en contenido comercial.
3. `src/App.tsx` renderiza la propuesta y ofrece acciones para WhatsApp e impresion.

## Archivos Esperados

- Crear `src/domain/proposal.ts`.
- Crear `src/domain/proposal.test.ts`.
- Modificar `src/App.tsx`.
- Actualizar `docs/contexto-minimo.md`.
- Actualizar este documento al terminar la implementacion.

## API Esperada

`src/domain/proposal.ts` debe exponer funciones puras similares a:

- `createProposalSummary(quote, pricing)`: devuelve secciones de propuesta legibles para UI.
- `createWhatsAppMessage(quote, pricing)`: devuelve texto breve y compartible.

La forma exacta puede ajustarse durante implementacion, pero debe mantener estas reglas:

- No depender de `window`, DOM ni React.
- No mutar `quote` ni `pricing`.
- Incluir cliente cuando `clientName` exista.
- Incluir fecha tentativa cuando `eventDate` exista.
- Incluir paquete, tipo de evento, invitados, extras seleccionados y total.

## Pruebas Esperadas

`src/domain/proposal.test.ts` debe validar:

- Propuesta con cliente, fecha, paquete, extras y total.
- Propuesta sin cliente ni fecha, usando copy generico.
- Mensaje de WhatsApp con resumen corto y total.

Las pruebas deben escribirse antes de la implementacion de `proposal.ts`.

## UI Esperada

La UI de fase 4 debe seguir el lenguaje visual de fase 3:

- Sin landing page nueva.
- Sin backend, login, pagos ni panel admin.
- Sin recalcular precios en componentes React.
- El boton `Prepare proposal` debe abrir o enfocar la propuesta generada.
- La accion de imprimir debe usar `window.print()` desde un control claro.
- El mensaje de WhatsApp debe poder copiarse o abrirse en un enlace compartible.

## Verificacion Planeada

Al implementar fase 4 se debe ejecutar:

```bash
pnpm test -- src/domain/proposal.test.ts
pnpm test
pnpm lint
pnpm build
```

Resultado esperado:

- Pruebas de propuesta passing.
- Suite completa passing.
- Lint sin errores.
- Build generado correctamente en `dist/`.

## Fuera De Alcance

- Persistencia en localStorage.
- Envio real por API de WhatsApp Business.
- Backend.
- Autenticacion.
- Pagos.
- CRM o panel admin.
- Generacion programatica de PDF en servidor.

## Gate De Implementacion

No iniciar codigo de fase 4 hasta recibir luz verde explicita. La siguiente accion aprobada deberia ser TDD sobre `src/domain/proposal.test.ts`.
