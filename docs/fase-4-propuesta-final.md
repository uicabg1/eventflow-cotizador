# Fase 4: Propuesta Final, WhatsApp E Impresion

Fecha: 2026-04-26  
Estado: completada y verificada

## Objetivo

Convertir la cotizacion viva de EventFlow en una propuesta comercial lista para compartir con cliente, sin agregar backend ni salir del flujo local del navegador.

## Alcance Esperado

La fase 4 agrego:

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

## Resultado

Se agrego un modulo de propuesta final conectado al estado vivo del cotizador. La app ahora permite:

- Revisar una propuesta imprimible dentro del mismo flujo.
- Ver detalles de cliente, fecha tentativa, tipo de evento e invitados.
- Revisar paquete, incluidos, extras, subtotales y total estimado.
- Copiar el mensaje comercial para WhatsApp.
- Abrir WhatsApp con el texto precargado.
- Imprimir o guardar como PDF usando el dialogo del navegador.

## Archivos Modificados

- Creado `src/domain/proposal.ts`.
- Creado `src/domain/proposal.test.ts`.
- Modificado `src/App.tsx`.
- Modificado `src/App.test.tsx`.
- Actualizado `docs/contexto-minimo.md`.
- Actualizado `README.md`.

## API Agregada

`src/domain/proposal.ts` expone:

- `createProposalSummary(quote, pricing)`: devuelve secciones de propuesta legibles para UI.
- `createWhatsAppMessage(quote, pricing)`: devuelve texto breve y compartible.

Tambien expone tipos para la UI:

- `ProposalDetail`
- `ProposalSummary`

La implementacion mantiene estas reglas:

- No depender de `window`, DOM ni React.
- No mutar `quote` ni `pricing`.
- Incluir cliente cuando `clientName` exista.
- Incluir fecha tentativa cuando `eventDate` exista.
- Incluir paquete, tipo de evento, invitados, extras seleccionados y total.

## Pruebas Agregadas

`src/domain/proposal.test.ts` valida:

- Propuesta con cliente, fecha, paquete, extras y total.
- Propuesta sin cliente ni fecha, usando copy generico.
- Mensaje de WhatsApp con resumen corto y total.

`src/App.test.tsx` ahora valida:

- Render de la seccion `#proposal`.
- Controles de copiar WhatsApp, abrir WhatsApp e imprimir/guardar PDF.
- Enlace `https://wa.me/?text=` generado desde el estado inicial.

## TDD Ejecutado

Se escribio `src/domain/proposal.test.ts` antes de crear `src/domain/proposal.ts`.

Primera ejecucion:

```bash
pnpm test -- src/domain/proposal.test.ts
```

Resultado esperado y observado:

- Falla por modulo faltante `./proposal`.

Despues de implementar `src/domain/proposal.ts`, la prueba puntual paso.

## Plan De Implementacion

1. Escribir `src/domain/proposal.test.ts` con casos para propuesta completa, propuesta sin cliente/fecha y mensaje de WhatsApp.
2. Ejecutar `pnpm test -- src/domain/proposal.test.ts` y confirmar que falla por modulo faltante.
3. Crear `src/domain/proposal.ts` con funciones puras de resumen y WhatsApp.
4. Ejecutar la prueba puntual hasta que pase.
5. Conectar `src/App.tsx` al resumen generado sin recalcular precios.
6. Ampliar `src/App.test.tsx` para verificar controles de propuesta, WhatsApp e impresion en render inicial.
7. Ejecutar `pnpm test`, `pnpm lint` y `pnpm build`.
8. Actualizar este documento y `docs/contexto-minimo.md` con resultados reales.

## UI Agregada

La UI de fase 4 sigue el lenguaje visual de fase 3:

- Sin landing page nueva.
- Sin backend, login, pagos ni panel admin.
- Sin recalcular precios en componentes React.
- El boton `Prepare proposal` debe abrir o enfocar la propuesta generada.
- La accion de imprimir debe usar `window.print()` desde un control claro.
- El mensaje de WhatsApp debe poder copiarse o abrirse en un enlace compartible.

## Verificacion Ejecutada

Se ejecuto:

```bash
pnpm test -- src/domain/proposal.test.ts
pnpm test -- src/App.test.tsx
pnpm test
pnpm lint
pnpm build
```

Resultado:

- `pnpm test -- src/domain/proposal.test.ts`: 5 archivos de prueba passed, 12 tests passed.
- `pnpm test -- src/App.test.tsx`: 5 archivos de prueba passed, 13 tests passed.
- `pnpm test`: 5 archivos de prueba passed, 13 tests passed.
- `pnpm lint`: sin errores reportados.
- `pnpm build`: build generado correctamente en `dist/`.

## Fuera De Alcance

- Persistencia en localStorage.
- Envio real por API de WhatsApp Business.
- Backend.
- Autenticacion.
- Pagos.
- CRM o panel admin.
- Generacion programatica de PDF en servidor.

## Cierre

La fase 4 queda cerrada como MVP local: cotizacion, propuesta, WhatsApp e impresion funcionan sin backend. La siguiente tarea sugerida es revision visual en navegador y, despues, definir si la fase 5 sera persistencia local, pulido responsive final o despliegue en Vercel.
