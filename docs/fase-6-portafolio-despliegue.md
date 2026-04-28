# Fase 6: Portafolio Y Despliegue

Fecha: 2026-04-28  
Estado: ejecutada localmente, pendiente publicar cambios finales en GitHub

## Objetivo

Preparar EventFlow para mostrarse como proyecto de portafolio: demo desplegada, README presentable, capturas finales y caso de estudio breve.

## Contexto

La fase 5 cerro el MVP funcional: cotizacion, comparador, propuesta, WhatsApp, impresion limpia, persistencia local, validacion de invitados y revision responsive basica.

La fase 6 no debe ampliar el producto. Su trabajo es convertir el MVP en una pieza publicable y facil de evaluar por clientes, reclutadores o prospectos de Upwork.

## Alcance Planeado

La fase 6 debe agregar:

- Despliegue estatico en Vercel.
- URL de demo registrada en README y contexto minimo.
- Capturas finales del flujo principal.
- Caso de estudio corto para portafolio.
- Revision visual final en desktop y mobile.
- Decision documentada sobre visibilidad del repositorio.

## Resultado

La fase 6 dejo el proyecto preparado como pieza de portafolio:

- Verificacion base ejecutada con `pnpm test`, `pnpm lint` y `pnpm build`.
- Revision visual desktop/mobile ejecutada con Playwright.
- Capturas finales generadas en `output/playwright/`.
- Demo desplegada en Vercel: `https://eventflow-cotizador.vercel.app`.
- README actualizado con la URL de demo.
- Caso de estudio creado en `docs/caso-estudio-eventflow.md`.
- Decision de visibilidad documentada: mantener privado hasta hacer commit/push de los cambios finales de Fase 6.

## Fuera De Alcance

- Backend.
- Login.
- Pagos.
- Panel administrativo.
- Cambios de formula de precios.
- Nuevas pantallas del producto.
- Reescritura de componentes.

## Plan De Implementacion

1. Ejecutar verificacion base antes de publicar: `pnpm test`, `pnpm lint`, `pnpm build`.
2. Revisar visualmente el flujo principal en desktop y mobile.
3. Generar capturas finales: pantalla inicial, comparador, propuesta final y vista mobile.
4. Desplegar en Vercel desde la rama principal o desde el flujo configurado en GitHub.
5. Actualizar `README.md` con la URL de demo, resumen de valor y capturas si se agregan al repo.
6. Crear o actualizar caso de estudio de portafolio con problema, solucion, stack, decisiones y resultado.
7. Actualizar `docs/contexto-minimo.md` con URL de demo, validacion final y siguiente paso.
8. Decidir si el repositorio pasa a publico despues de confirmar que la demo es presentable.

## Archivos Esperados

- Modificar `README.md`.
- Modificar `docs/contexto-minimo.md`.
- Crear o modificar documentacion de caso de estudio, si se decide mantenerla dentro del repo.
- Agregar capturas en una carpeta dedicada solo si aportan al README o al caso de estudio.

## Criterios De Cierre

La fase 6 queda cerrada cuando:

- Existe URL de demo funcional.
- El README explica el proyecto como pieza de portafolio.
- Las capturas o el caso de estudio muestran el flujo principal.
- La verificacion base pasa antes del despliegue.
- El contexto minimo deja clara la ubicacion de la demo y el estado de publicacion.

## Verificacion Planeada

Antes de cerrar la fase 6 se debe ejecutar:

```bash
pnpm test
pnpm lint
pnpm build
```

Tambien se debe revisar manualmente:

- Desktop: 1440 x 1100.
- Mobile: 390 x 844.
- Flujo completo desde seleccion inicial hasta propuesta final.
- URL desplegada en navegador.

## Decision Pendiente

El repositorio debe mantenerse privado hasta confirmar que:

- La demo desplegada carga correctamente.
- El README contiene la URL correcta.
- Las capturas o el caso de estudio no muestran datos sensibles.

Revision 2026-04-28:

- La demo desplegada carga correctamente.
- El README local contiene la URL correcta.
- Las capturas y el caso de estudio no muestran datos sensibles.
- El repositorio remoto todavia no contiene estos cambios finales porque estan pendientes de commit/push.

Decision: mantener privado por ahora y hacerlo publico despues de publicar los cambios finales de Fase 6 en GitHub.
