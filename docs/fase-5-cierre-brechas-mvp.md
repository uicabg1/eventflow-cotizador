# Fase 5: Cierre De Brechas Del MVP

Fecha: 2026-04-26  
Estado: documentacion inicial, pendiente de implementacion

## Objetivo

Alinear EventFlow con los pendientes detectados al comparar la app actual contra `docs/eventflow-cotizador-interactivo.md`, sin agregar backend ni ampliar el producto fuera del MVP.

## Contexto

La fase 4 dejo completo el flujo funcional principal: cotizacion, precio en vivo, propuesta final, WhatsApp e impresion desde el navegador.

La revision de la especificacion principal mostro que el MVP todavia requiere cerrar brechas antes de considerarse listo para portafolio:

- Persistencia local con `localStorage`.
- Validacion de invitados con minimo 10 y maximo 500.
- Estilos `@media print` para ocultar controles y mostrar solo la propuesta.
- Nota de validez en la propuesta.
- Comparador de paquetes con incluidos y mejor uso.
- Revision responsive formal en mobile, tablet y desktop.
- Decision sobre la regla de precios: mantener la regla implementada o alinear con la formula historica de la especificacion principal.

## Alcance Esperado

La fase 5 debe agregar:

- Persistencia local de la cotizacion actual.
- Validacion y normalizacion de invitados al rango 10-500.
- Estilos de impresion dedicados.
- Nota de validez en la propuesta final.
- Mejor informacion en el comparador de paquetes.
- Pruebas automatizadas para persistencia, validacion y propuesta actualizada.
- Revision visual documentada en desktop y mobile.

## Fuera De Alcance

- Backend.
- Login.
- Pagos.
- Panel administrativo.
- Base de datos.
- Envio real por WhatsApp Business API.
- Despliegue en Vercel.
- Capturas finales para portafolio.

## Arquitectura Planeada

La fase 5 debe mantener la separacion actual:

- Persistencia en un hook dedicado, probablemente `src/hooks/useLocalStorage.ts`.
- Validacion de cotizacion en `src/domain`, no dentro de componentes React.
- Propuesta comercial en `src/domain/proposal.ts`.
- Calculos de precios en `src/domain/pricing.ts`.
- UI en `src/App.tsx`, consumiendo hooks y funciones puras.

Si se cambia la formula de precios, debe hacerse en `src/domain/pricing.ts` con pruebas primero. Si se decide conservar la formula actual, debe registrarse la decision en la documentacion antes de cerrar la fase.

## Archivos Esperados

- Crear `src/hooks/useLocalStorage.ts`.
- Crear `src/hooks/useLocalStorage.test.ts` o ampliar pruebas de estado si el entorno de test lo permite.
- Crear `src/domain/validation.ts` si la validacion de invitados crece mas alla de una funcion pequena.
- Crear o modificar pruebas para validar rango de invitados 10-500.
- Modificar `src/domain/proposal.ts`.
- Modificar `src/domain/proposal.test.ts`.
- Modificar `src/App.tsx`.
- Modificar `src/App.test.tsx`.
- Modificar `src/index.css` con estilos `@media print`.
- Actualizar `docs/contexto-minimo.md`.
- Actualizar este documento al terminar la implementacion.

## Pruebas Esperadas

La fase 5 debe validar:

- La cotizacion se guarda y recupera desde `localStorage`.
- Invitados menores a 10 se normalizan o rechazan segun la decision de implementacion.
- Invitados mayores a 500 se normalizan o rechazan segun la decision de implementacion.
- La propuesta incluye la nota de validez.
- El mensaje de WhatsApp conserva evento, invitados, paquete, extras y total.
- La UI renderiza informacion de incluidos y mejor uso en paquetes.
- Los controles de accion quedan ocultos en estilos de impresion.

## Plan De Implementacion

1. Escribir pruebas para validacion de invitados.
2. Implementar validacion o normalizacion en `src/domain`.
3. Escribir pruebas para persistencia local.
4. Implementar `useLocalStorage` y conectarlo con `useQuoteState`.
5. Escribir pruebas para nota de validez y propuesta actualizada.
6. Actualizar `src/domain/proposal.ts`.
7. Ampliar comparador de paquetes en `src/App.tsx`.
8. Agregar estilos `@media print` en `src/index.css`.
9. Ejecutar revision visual en desktop y mobile.
10. Actualizar documentacion de fase y contexto minimo.

## Verificacion Planeada

Al implementar fase 5 se debe ejecutar:

```bash
pnpm test
pnpm lint
pnpm build
```

Tambien se debe revisar manualmente:

- Desktop: 1440 x 1100.
- Mobile: 390 x 844.
- Flujo de recarga para confirmar persistencia.
- Dialogo de impresion para confirmar que la propuesta queda limpia.

## Gate De Implementacion

No iniciar codigo de fase 5 hasta recibir luz verde explicita. La siguiente accion aprobada deberia ser TDD sobre validacion de invitados o persistencia local.
