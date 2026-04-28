# EventFlow: Caso De Estudio

Fecha: 2026-04-28  
Demo: https://eventflow-cotizador.vercel.app

## Resumen

EventFlow es una static web app para un negocio de eventos. Permite configurar un evento, comparar paquetes, agregar extras y generar una propuesta lista para imprimir o enviar por WhatsApp, sin depender de backend.

El proyecto fue construido como pieza de portafolio para demostrar una experiencia comercial completa: UI responsive, estado local, reglas de negocio, pricing en vivo, persistencia, propuesta final y despliegue.

## Problema

Muchos negocios locales de eventos reciben prospectos con poca informacion: tipo de evento, numero de invitados, presupuesto y extras suelen resolverse en conversaciones largas. Eso retrasa la cotizacion y dificulta que el cliente entienda el alcance del servicio.

EventFlow reduce esa friccion con una herramienta guiada que muestra precios estimados y convierte una configuracion inicial en una propuesta clara.

## Solucion

La app presenta el producto funcionando desde la primera pantalla:

- Selector de tipo de evento.
- Rango de invitados validado.
- Comparador de paquetes con incluidos y recomendacion de uso.
- Extras opcionales con impacto en precio.
- Resumen en vivo.
- Propuesta imprimible.
- Mensaje preparado para WhatsApp.
- Persistencia local para conservar la cotizacion al recargar.

## Decisiones Tecnicas

- React, Vite y TypeScript para una SPA estatica rapida.
- Tailwind CSS para construir una UI a medida sin libreria pesada de componentes.
- Funciones puras en `src/domain` para pricing, validacion y propuesta.
- Hooks dedicados en `src/hooks` para estado y persistencia local.
- `localStorage` como persistencia suficiente para el MVP.
- Vercel como despliegue estatico.

## Calidad Y Verificacion

El proyecto se trabajo con pruebas automatizadas para las reglas principales:

- Pricing.
- Validacion de invitados.
- Generacion de propuesta.
- Persistencia local.
- Estado del cotizador.
- Render basico de UI.

Validacion ejecutada:

```bash
pnpm test
pnpm lint
pnpm build
```

Tambien se reviso visualmente con Playwright en desktop y mobile.

## Resultado

EventFlow quedo como MVP de portafolio desplegado:

- Demo publica: https://eventflow-cotizador.vercel.app
- Flujo comercial completo sin backend.
- Propuesta final imprimible.
- Capturas finales preparadas en `output/playwright/`.
- README actualizado con URL de demo.

## Siguientes Mejoras Posibles

- Conectar GitHub con Vercel para despliegues automaticos.
- Agregar un dominio personalizado.
- Crear una version del caso de estudio para el sitio personal.
- Hacer publico el repositorio despues de subir los cambios finales de Fase 6.
