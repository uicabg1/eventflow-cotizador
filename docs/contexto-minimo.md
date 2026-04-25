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

## Estado GitHub

GitHub CLI (`gh`) esta instalado, pero no hay sesion autenticada.

Bloqueo actual:

```bash
gh auth status
```

Resultado actual:

```text
You are not logged into any GitHub hosts. To log in, run: gh auth login
```

Para subir el proyecto, primero ejecutar:

```bash
gh auth login
```

Despues de autenticar, crear el repo y subir:

```bash
gh repo create eventflow-cotizador --private --source=. --remote=origin --push
```

Recomendacion: mantenerlo privado mientras se construyen Fase 2 y el wizard. Hacerlo publico cuando tenga demo visual presentable.

## Stack

React, Vite, TypeScript, Tailwind CSS, Motion for React, lucide-react, date-fns, Vitest. Despliegue planeado: Vercel.

## Archivos Clave

- `README.md`: resumen publico para GitHub.
- `docs/fase-1-base.md`: registro de la fase actual.
- `eventflow-cotizador-interactivo.md`: especificacion larga del producto.
- `src/data/eventTypes.ts`: tipos de evento.
- `src/data/packages.ts`: paquetes.
- `src/data/extras.ts`: extras.
- `src/domain/types.ts`: tipos compartidos.

## Siguiente Paso

Fase 2: crear logica de cotizacion con TDD.

Orden recomendado:

1. Crear prueba `src/domain/pricing.test.ts`.
2. Verla fallar porque `pricing.ts` no existe.
3. Crear `src/domain/pricing.ts`.
4. Implementar calculo minimo.
5. Verificar con `pnpm test`, `pnpm lint` y `pnpm build`.

## Reglas De Trabajo

- No pasar a UI del wizard antes de tener la logica de precios.
- No agregar backend, login, pagos ni panel admin.
- No meter calculos dentro de componentes React.
- Mantener funciones puras en `src/domain`.
- Documentar cada fase antes de avanzar a la siguiente.
