export const brand = {
  name: "Pecado Celestial",
  tagline: "Malas influencias, ricos sabores.",
  sloganShort: "¡Hazlo!",
  whatsapp: "580000000000",
  email: "pedidos@pecadocelestial.com",
  phone: "+58 000 000 0000",
  colors: {
    primary: "#9B1B1B",
    gold: "#C9A227",
    cream: "#F8F1E9",
    dark: "#1A1A2E",
    softRed: "#C94C4C",
    white: "#FFFFFF",
  },
  social: {
    instagram: "https://instagram.com/pecadocelestial",
  },
  paymentMethods: [
    { id: "pagomovil", label: "Pago Móvil" },
    { id: "transferencia", label: "Transferencia bancaria" },
    { id: "efectivo", label: "Efectivo (contra entrega)" },
  ] as const,
} as const;

export const logoPaths = {
  horizontal: "/brand/horizontal-wide-format-logo-3.jpg",
  mascotDuo: "/brand/mascot-duo.jpg",
  icon: "/brand/icon-symbol-only-4.jpg",
  bold: "/brand/social-media-and-web-5.jpg",
  premium: "/brand/premium-luxury-version-2.jpg",
  minimal: "/brand/minimalist-refined-corporate-logo.jpg",
  advertising: "/brand/professional-advertising-logo-design.jpg",
  funHazlo: "/brand/logo-for-snack-brand-1.jpg",
} as const;