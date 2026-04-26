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

Fase 4 documentacion iniciada:

- Registro inicial creado en `docs/fase-4-propuesta-final.md`.
- Alcance planeado: propuesta final, texto de WhatsApp y accion de imprimir/guardar desde el navegador.
- Estado: pendiente de luz verde antes de escribir codigo.

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

Recomendacion: mantenerlo privado mientras se construyen propuesta final, WhatsApp e impresion. Hacerlo publico cuando tenga demo visual presentable y flujo completo.

## Stack

React, Vite, TypeScript, Tailwind CSS, Motion for React, lucide-react, date-fns, Vitest. Despliegue planeado: Vercel.

## Archivos Clave

- `README.md`: resumen publico para GitHub.
- `docs/fase-1-base.md`: registro de base tecnica.
- `docs/fase-2-logica-cotizacion.md`: registro de logica de precios.
- `docs/fase-3-wizard-inicial.md`: registro del wizard inicial.
- `docs/fase-4-propuesta-final.md`: documentacion inicial de propuesta final, WhatsApp e impresion.
- `docs/eventflow-cotizador-interactivo.md`: especificacion larga del producto.
- `src/data/eventTypes.ts`: tipos de evento.
- `src/data/packages.ts`: paquetes.
- `src/data/extras.ts`: extras.
- `src/domain/types.ts`: tipos compartidos.
- `src/domain/pricing.ts`: logica pura de cotizacion.
- `src/domain/pricing.test.ts`: pruebas de logica de cotizacion.
- `src/hooks/useQuoteState.ts`: estado del cotizador y pricing derivado.
- `src/hooks/useQuoteState.test.ts`: pruebas de estado del cotizador.
- `src/App.test.tsx`: prueba de render del wizard inicial.
- `src/App.tsx`: wizard visual inicial.

## Siguiente Paso

Esperar luz verde para implementar fase 4: crear propuesta final, texto para WhatsApp y accion de imprimir/guardar desde el navegador.

Orden recomendado:

1. Crear `src/domain/proposal.ts` con texto de propuesta y mensaje de WhatsApp.
2. Probar la generacion de propuesta con Vitest.
3. Conectar boton de propuesta en la UI.
4. Agregar accion de imprimir con `window.print()`.
5. Verificar con `pnpm test`, `pnpm lint` y `pnpm build`.

No crear `src/domain/proposal.ts` ni tocar `src/App.tsx` para fase 4 hasta recibir aprobacion explicita.

## Ultima Validacion

```bash
pnpm test
pnpm lint
pnpm build
```

Resultado:

- `pnpm test`: 4 archivos de prueba passed, 9 tests passed.
- `pnpm lint`: sin errores reportados.
- `pnpm build`: build generado correctamente en `dist/`.

## Reglas De Trabajo

- La UI del wizard debe consumir `src/domain/pricing.ts`, no recrear calculos.
- No agregar backend, login, pagos ni panel admin.
- No meter calculos dentro de componentes React.
- Mantener funciones puras en `src/domain`.
- Documentar cada fase antes de avanzar a la siguiente.
