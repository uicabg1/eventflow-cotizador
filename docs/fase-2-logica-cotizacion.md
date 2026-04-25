# Fase 2: Logica De Cotizacion

Fecha: 2026-04-25  
Estado: completada y verificada

## Objetivo

Crear la logica pura de precios antes de construir el wizard visual.

## Resultado

Se agrego `src/domain/pricing.ts` con funciones puras para calcular una cotizacion a partir del estado actual, los tipos de evento, paquetes y extras.

## API Agregada

- `calculateQuotePricing(quote)`: devuelve evento, paquete, extras seleccionados, subtotales, ajuste por tipo de evento y total.
- `calculateExtraPrice(extra, guestCount)`: calcula extras fijos o por invitado.

## Regla De Calculo

1. El subtotal del paquete es `basePrice + guestCount * pricePerGuest`.
2. El multiplicador del tipo de evento se aplica al subtotal del paquete.
3. Los extras se suman despues del ajuste del tipo de evento.
4. Los extras `fixed` usan su precio directo.
5. Los extras `perGuest` usan `price * guestCount`.
6. El total final se redondea a pesos con `Math.round`.

## Pruebas Agregadas

`src/domain/pricing.test.ts` valida:

- Cotizacion con paquete premium, boda, extra fijo y extra por invitado.
- Cotizacion base sin extras.
- Rechazo de cotizaciones sin cantidad positiva de invitados.

## Verificacion Ejecutada

```bash
pnpm test -- src/domain/pricing.test.ts
pnpm test
pnpm lint
pnpm build
```

Resultado de la ultima verificacion:

- `pnpm test -- src/domain/pricing.test.ts`: 2 archivos de prueba passed, 4 tests passed.
- `pnpm test`: 2 archivos de prueba passed, 4 tests passed.
- `pnpm lint`: sin errores reportados.
- `pnpm build`: build generado correctamente en `dist/`.

## Siguiente Fase

Fase 3: construir el estado del cotizador y el primer wizard visual consumiendo `calculateQuotePricing`, sin mover la logica de precios a componentes React.
