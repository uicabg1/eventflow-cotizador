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

Fase 6 documentacion iniciada:

- Registro inicial creado en `docs/fase-6-portafolio-despliegue.md`.
- Alcance planeado: pulido de portafolio, despliegue en Vercel, capturas finales, README con demo y caso de estudio.
- Estado: pendiente de implementacion; no ampliar producto ni agregar backend.

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
b2cdcd1 main -> main
```

Recomendacion: mantenerlo privado hasta hacer revision visual final y tener demo desplegada. Hacerlo publico cuando exista URL de Vercel presentable.

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

Siguiente paso sugerido: implementar fase 6 de pulido de portafolio y despliegue.

Orden recomendado:

1. Ejecutar `pnpm test`, `pnpm lint` y `pnpm build`.
2. Revisar visualmente desktop y mobile.
3. Preparar capturas finales del flujo.
4. Desplegar en Vercel.
5. Actualizar README con URL de demo cuando exista.
6. Redactar caso de estudio para portafolio.
7. Revisar si el repositorio debe pasar a publico despues de tener demo presentable.

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
