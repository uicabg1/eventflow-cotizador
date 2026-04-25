# EventFlow: Cotizador Interactivo Para Eventos

> **Tipo de proyecto:** static web app para portafolio personal y Upwork  
> **Objetivo:** demostrar que puedes construir una experiencia web comercial, visual y funcional sin depender de backend.  
> **Resultado esperado:** una app estatica donde una persona configura un evento, compara paquetes, ve precios en tiempo real y genera una propuesta lista para imprimir o enviar por WhatsApp.

---

## 1. Resumen Ejecutivo

EventFlow sera una web tipo producto para un negocio de eventos en Merida. La experiencia principal no sera una landing tradicional, sino un cotizador interactivo que guia al usuario por tipo de evento, cantidad de invitados, fecha, paquete base y extras. Al final, la app genera una propuesta clara con desglose de costos, recomendaciones y llamada a accion.

Este proyecto debe sentirse como una herramienta real que un negocio local podria comprar. Para portafolio, demuestra UI, formularios, calculos, estado, diseño responsive, copy comercial y pensamiento de producto.

---

## 2. Problema Que Resuelve

Muchos negocios locales pierden prospectos porque el cliente no sabe cuanto cuesta el servicio, tiene que mandar mensajes manualmente y espera una cotizacion personalizada. EventFlow reduce esa friccion con una experiencia inmediata:

- El cliente explora paquetes sin hablar con nadie.
- El negocio recibe una solicitud con contexto claro.
- La propuesta se ve profesional desde el primer contacto.
- El desarrollador demuestra que puede crear herramientas comerciales, no solo paginas informativas.

---

## 3. Usuario Objetivo

**Cliente final:** persona que esta organizando una boda, cumpleaños, reunion empresarial o fiesta familiar.

**Dueño del negocio:** proveedor de eventos que quiere recibir leads mejor calificados.

**Reclutador o cliente Upwork:** persona que revisa tu portafolio y quiere saber si puedes construir interfaces utiles, vendibles y visualmente cuidadas.

---

## 4. Propuesta De Valor Para Portafolio

Este proyecto debe mostrarse en tu portafolio como:

> "Interactive quote builder for an event business. Built as a static web app with dynamic pricing, package comparison, printable proposal, local state and responsive UI."

Puntos fuertes para mencionar:

- Static web app deployable en Vercel, Netlify o GitHub Pages.
- No requiere backend para funcionar.
- Experiencia comercial orientada a conversion.
- Calculos en tiempo real.
- Propuesta final imprimible.
- Flujo parecido a herramientas SaaS ligeras.

---

## 5. Alcance Del MVP

El MVP debe incluir solo lo necesario para que el proyecto se vea completo y vendible.

### Incluido

- Pantalla principal del cotizador.
- Selector de tipo de evento.
- Selector de cantidad de invitados.
- Selector de paquete.
- Extras opcionales.
- Estimacion de precio en tiempo real.
- Comparacion de paquetes.
- Resumen final de propuesta.
- Boton para imprimir o guardar como PDF desde el navegador.
- Boton para abrir WhatsApp con mensaje precargado.
- Persistencia local con `localStorage`.
- Diseño responsive para desktop y mobile.

### Fuera De Alcance

- Pagos reales.
- Login.
- Panel administrativo.
- Base de datos.
- Integracion real con calendario.
- Envio real de correos.
- Backend propio.

---

## 6. Stack Recomendado

**Stack final recomendado:** React + Vite + TypeScript + Tailwind CSS + Motion for React + lucide-react + localStorage + Vercel.

Motivo: permite construir una experiencia interactiva moderna, facil de desplegar como static web y suficientemente profesional para portafolio. Tailwind acelera el desarrollo visual, Motion for React agrega transiciones cuidadas y lucide-react mantiene la iconografia limpia.

Herramientas y librerias:

- Node.js LTS instalado con Homebrew.
- `pnpm`: gestor de paquetes recomendado.
- `react`: interfaz principal.
- `vite`: desarrollo y build estatico.
- `typescript`: tipos y estructura profesional.
- `lucide-react`: iconos.
- `motion`: microinteracciones y transiciones.
- `tailwindcss` y `@tailwindcss/vite`: estilos utilitarios y configuracion con Vite.
- `date-fns`: formato de fechas.

CSS:

- Usar Tailwind CSS como base principal.
- Mantener tokens visuales propios para colores, radios, sombras y espaciado.
- Evitar depender de una libreria de componentes grande para que el proyecto se sienta disenado a medida.

Comandos base:

```bash
brew install node pnpm
pnpm create vite eventflow-cotizador --template react-ts
cd eventflow-cotizador
pnpm install
pnpm add tailwindcss @tailwindcss/vite motion lucide-react date-fns
```

---

## 7. Direccion Visual

### Tesis Visual

Una herramienta premium para eventos locales: elegante, clara, calida y comercial, con sensacion de propuesta profesional.

### Estilo

- Fondo claro con secciones limpias.
- Acento principal en verde profundo, azul petroleo o dorado sobrio.
- Evitar exceso de gradientes.
- Usar fotografias reales o realistas de eventos, mesas, luces, espacios y detalles.
- Tipografia limpia, con una fuente de display moderada para marca y una sans-serif para UI.

### Primera Impresion

La primera pantalla debe mostrar el producto funcionando. No debe sentirse como una landing de texto. El usuario debe ver de inmediato:

- Nombre: EventFlow.
- Una frase corta de valor.
- El cotizador visible.
- Precio estimado o paquete destacado.
- CTA claro: "Crear cotizacion".

---

## 8. Arquitectura De La App

La app se puede construir como una SPA estatica con componentes separados por responsabilidad.

### Estructura Sugerida

```text
eventflow-cotizador/
  index.html
  package.json
  vite.config.ts
  src/
    main.tsx
    App.tsx
    data/
      packages.ts
      extras.ts
      eventTypes.ts
    domain/
      pricing.ts
      proposal.ts
      validation.ts
    hooks/
      useQuoteState.ts
      useLocalStorage.ts
    components/
      AppShell.tsx
      QuoteWizard.tsx
      EventTypeStep.tsx
      GuestCountStep.tsx
      PackageStep.tsx
      ExtrasStep.tsx
      PriceSummary.tsx
      PackageComparison.tsx
      ProposalPreview.tsx
      WhatsAppButton.tsx
      PrintButton.tsx
    styles/
      global.css
      tokens.css
```

### Responsabilidades

`data/` contiene informacion editable del negocio: paquetes, extras y tipos de evento.

`domain/pricing.ts` contiene la logica de calculo. No debe depender de React.

`domain/proposal.ts` arma el texto de la propuesta y el mensaje para WhatsApp.

`hooks/useQuoteState.ts` centraliza el estado del cotizador.

`components/` contiene piezas visuales y de interaccion.

---

## 9. Modelo De Datos

### Tipo De Evento

```ts
type EventType = {
  id: string;
  name: string;
  description: string;
  baseMultiplier: number;
};
```

Ejemplos:

- Boda: multiplicador 1.25.
- Cumpleanos: multiplicador 1.0.
- Evento empresarial: multiplicador 1.15.
- Cena privada: multiplicador 1.1.

### Paquete

```ts
type PackageOption = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pricePerGuest: number;
  included: string[];
  recommendedFor: string;
};
```

Paquetes sugeridos:

- Esencial.
- Celebracion.
- Premium.

### Extra

```ts
type ExtraOption = {
  id: string;
  name: string;
  description: string;
  priceType: "fixed" | "perGuest";
  price: number;
};
```

Extras sugeridos:

- Decoracion floral.
- Mesa de postres.
- Fotografia.
- DJ.
- Iluminacion ambiental.
- Coordinador del evento.

### Cotizacion

```ts
type QuoteState = {
  eventTypeId: string;
  guestCount: number;
  selectedPackageId: string;
  selectedExtraIds: string[];
  eventDate: string;
  clientName: string;
  notes: string;
};
```

---

## 10. Regla De Precios

La regla debe ser simple, transparente y facil de explicar:

```text
subtotal paquete = basePrice + (guestCount * pricePerGuest)
subtotal extras = suma de extras fijos + suma de extras por invitado
subtotal ajustado = (subtotal paquete + subtotal extras) * baseMultiplier
servicio = subtotal ajustado * 0.08
total estimado = subtotal ajustado + servicio
```

La app debe mostrar:

- Precio base.
- Costo por invitados.
- Extras seleccionados.
- Ajuste por tipo de evento.
- Servicio/operacion.
- Total estimado.

---

## 11. Flujo De Usuario

1. El usuario entra y ve el cotizador.
2. Selecciona tipo de evento.
3. Indica cantidad de invitados.
4. Escoge paquete.
5. Agrega extras.
6. Escribe fecha tentativa y nombre.
7. Revisa resumen.
8. Imprime propuesta o abre WhatsApp con mensaje precargado.

---

## 12. Pantallas Y Componentes

### Pantalla Principal

Debe combinar hero y herramienta. No debe haber una landing larga antes de llegar al cotizador.

Contenido:

- Marca.
- Frase de valor.
- Cotizador visible.
- Resumen de precio a la derecha en desktop o debajo en mobile.

### Wizard De Cotizacion

No usar demasiados pasos. Ideal:

- Paso 1: Evento.
- Paso 2: Invitados y fecha.
- Paso 3: Paquete.
- Paso 4: Extras.
- Paso 5: Propuesta.

### Comparador De Paquetes

Debe permitir ver tres paquetes con diferencias claras.

Cada paquete muestra:

- Nombre.
- Precio estimado.
- Incluye.
- Mejor uso.
- Boton para seleccionar.

### Vista De Propuesta

Debe verse como documento profesional.

Incluye:

- Nombre del cliente.
- Tipo de evento.
- Fecha tentativa.
- Invitados.
- Paquete.
- Extras.
- Total estimado.
- Nota de validez: "Estimacion sujeta a disponibilidad y detalles finales."
- CTA de WhatsApp.

---

## 13. Interacciones Clave

- Al cambiar invitados, el precio debe actualizarse inmediatamente.
- Al seleccionar un paquete, el comparador debe marcarlo visualmente.
- Al agregar extras, el resumen debe recalcular sin recargar la pagina.
- Al volver a abrir la app, se debe recuperar la ultima cotizacion desde `localStorage`.
- El boton de WhatsApp debe generar un mensaje legible con los datos principales.
- El boton de imprimir debe usar estilos `@media print` para ocultar controles y mostrar solo la propuesta.

---

## 14. Estados Y Errores

Aunque sea static web, debe manejar estados de forma profesional.

Validaciones:

- Invitados minimo: 10.
- Invitados maximo: 500.
- Fecha no obligatoria, pero si existe debe mostrarse en formato legible.
- Si no hay nombre, usar "Cliente interesado".
- Si no hay paquete seleccionado, usar el paquete recomendado por defecto.

Estados:

- Estado inicial con paquete recomendado.
- Estado con cotizacion incompleta.
- Estado listo para propuesta.
- Estado de impresion.

---

## 15. Plan De Implementacion

### Fase 1: Base Del Proyecto

- Crear proyecto con Vite, React y TypeScript.
- Instalar dependencias.
- Crear estructura de carpetas.
- Definir tokens visuales: colores, tipografia, espaciado.
- Crear datos mock de paquetes, extras y tipos de evento.

Criterio de aceptacion:

- La app carga en navegador.
- Hay una pantalla principal con marca y estructura base.
- Los datos se importan desde archivos separados.

### Fase 2: Logica De Cotizacion

- Crear tipos de datos.
- Implementar funcion `calculateQuoteTotal`.
- Implementar funcion `buildWhatsAppMessage`.
- Implementar funcion `buildProposalSummary`.
- Probar manualmente varios escenarios.

Criterio de aceptacion:

- El total cambia correctamente segun invitados, paquete y extras.
- La logica de precios esta separada de los componentes visuales.

### Fase 3: Wizard Interactivo

- Crear pasos del cotizador.
- Agregar navegacion entre pasos.
- Agregar validacion de invitados.
- Conectar inputs con estado global del cotizador.
- Guardar estado en `localStorage`.

Criterio de aceptacion:

- El usuario puede completar el flujo de inicio a fin.
- Al recargar, la cotizacion se mantiene.

### Fase 4: Resumen Y Comparador

- Crear `PriceSummary`.
- Crear `PackageComparison`.
- Mostrar desglose de precios.
- Resaltar paquete seleccionado.
- Agregar microinteracciones de seleccion y hover.

Criterio de aceptacion:

- El resumen siempre refleja la seleccion actual.
- El comparador ayuda a decidir, no solo decora.

### Fase 5: Propuesta Final

- Crear `ProposalPreview`.
- Agregar estilos de impresion.
- Crear boton de WhatsApp.
- Crear boton de imprimir.
- Pulir copy comercial.

Criterio de aceptacion:

- La propuesta se puede imprimir desde el navegador.
- El mensaje de WhatsApp incluye datos correctos.

### Fase 6: Pulido De Portafolio

- Revisar responsive en mobile, tablet y desktop.
- Agregar animaciones sutiles.
- Optimizar contraste.
- Crear captura o video corto del flujo.
- Redactar caso de estudio para tu portafolio.

Criterio de aceptacion:

- El proyecto se entiende en menos de 10 segundos.
- El flujo completo se puede grabar en menos de 45 segundos.

---

## 16. Checklist De Calidad

- [ ] La primera pantalla muestra una herramienta funcional, no solo texto.
- [ ] El precio cambia en tiempo real.
- [ ] Hay al menos tres paquetes comparables.
- [ ] Hay al menos seis extras.
- [ ] La propuesta final se ve profesional.
- [ ] WhatsApp abre con mensaje precargado.
- [ ] La app funciona sin backend.
- [ ] La app conserva datos con `localStorage`.
- [ ] La app es responsive.
- [ ] El proyecto tiene README con descripcion, stack y demo.
- [ ] Hay screenshots para portafolio.

---

## 17. Pruebas Manuales

### Escenario 1: Cotizacion Basica

Datos:

- Evento: cumpleanos.
- Invitados: 50.
- Paquete: Esencial.
- Extras: ninguno.

Resultado esperado:

- Total visible.
- Desglose sin extras.
- Propuesta imprimible.

### Escenario 2: Evento Premium

Datos:

- Evento: boda.
- Invitados: 150.
- Paquete: Premium.
- Extras: fotografia, DJ, iluminacion, decoracion floral.

Resultado esperado:

- Total mayor que escenario basico.
- Multiplicador de boda aplicado.
- WhatsApp incluye todos los extras.

### Escenario 3: Persistencia

Acciones:

- Crear una cotizacion.
- Recargar la pagina.

Resultado esperado:

- La cotizacion anterior permanece visible.

### Escenario 4: Mobile

Acciones:

- Abrir en ancho menor a 390px.
- Completar el flujo.

Resultado esperado:

- No hay textos encimados.
- Los botones son tocables.
- El resumen no rompe el layout.

---

## 18. Contenido Para README

```md
# EventFlow

Interactive quote builder for an event business. Built as a static web app with dynamic pricing, package comparison, local state and printable proposal.

## Features

- Dynamic event quote calculator
- Package comparison
- Optional extras
- Printable proposal
- WhatsApp-ready message
- Local persistence
- Responsive UI

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- lucide-react
- Motion for React
- localStorage
- Vercel

## Demo Flow

1. Select event type.
2. Enter guest count and date.
3. Choose a package.
4. Add optional extras.
5. Review and print the proposal.
```

---

## 19. Copy Sugerido Para Portafolio

**Titulo:** EventFlow - Interactive Quote Builder

**Descripcion corta:**  
Static web app for an event business that lets users configure an event, compare packages, calculate pricing in real time and generate a printable proposal.

**Descripcion larga:**  
EventFlow was designed as a commercial tool for local service businesses. The project focuses on conversion, clarity and interactivity: users can build a custom event quote, understand the price breakdown and contact the business with a prefilled WhatsApp message. The app runs fully as a static website and uses local state for a smooth product-like experience.

**Skills demostradas:**

- Product UI
- Dynamic forms
- Pricing logic
- State management
- Responsive design
- Static deployment
- Conversion-focused UX

---

## 20. Riesgos Y Decisiones

### Riesgo: Que parezca una landing comun

Decision: la herramienta debe estar visible desde el primer viewport.

### Riesgo: Que los precios parezcan falsos

Decision: mostrar desglose claro y nota de estimacion.

### Riesgo: Que el proyecto se vuelva muy grande

Decision: no agregar login, pagos, panel admin ni backend.

### Riesgo: Que el diseno se vea generico

Decision: usar fotografia fuerte, tipografia cuidada y una paleta sobria; evitar mosaicos de cards sin proposito.

---

## 21. Definicion De Terminado

El proyecto esta terminado cuando una persona puede abrir la demo, crear una cotizacion en menos de un minuto, entender el desglose, imprimir la propuesta y mandar el mensaje por WhatsApp. Para portafolio, debe incluir README, capturas, link de demo y descripcion del caso de uso.
