# Pecado Celestial — Website

Sitio web de la marca de snacks **Pecado Celestial**.  
Catálogo + carrito simple + pedidos por WhatsApp (Pago Móvil / Transferencia).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Arquitectura hiper-modular por features

## Estructura principal

```
src/
├── app/                  # Rutas (page.tsx, layout, pedido/)
├── components/
│   ├── ui/               # Button y primitivos
│   ├── layout/           # Header, Footer
│   ├── hero/             # Hero banner
│   ├── catalog/          # ProductCard, CatalogSection
│   ├── cart/             # (futuro)
│   ├── trust/            # Sección de confianza
│   └── contact/          # Contacto
├── data/                 # products.ts (fuente de verdad)
├── lib/                  # cart-context, brand.ts
├── hooks/
└── types/
public/
├── brand/                # Logos e iconos de la marca
└── products/             # Fotos de productos (agregar)
```

## Cómo correr

```bash
cd pecado-celestial
npm install
npm run dev
```

Abre http://localhost:3000

## Configuración rápida

1. Edita `src/lib/brand.ts` → número de WhatsApp real, email, teléfono.
2. Agrega fotos de productos en `public/products/` y actualiza las rutas en `src/data/products.ts`.
3. (Opcional) Sustituye los emojis placeholder de las cards por `<Image>`.

## Flujo de pedido

1. Usuario agrega productos al carrito (localStorage).
2. Va a `/pedido`, revisa cantidades y completa datos.
3. Al enviar se genera un mensaje de WhatsApp con el resumen completo.
4. El cliente coordina pago por Pago Móvil o transferencia.

## Próximas expansiones (modular)

- Backend real (API routes o server actions) para guardar pedidos.
- Panel admin simple.
- Más sabores y filtros por categoría.
- Integración con inventario.
- Versión en inglés / multi-idioma.

---

**Marca:** Pecado Celestial — Malas influencias, ricos sabores.  
Diablito + Angelito: ambos dicen «¡Hazlo!»
