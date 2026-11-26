import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/lib/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Snacks ricos en proteína y vegetales. Malas influencias, ricos sabores. Pedidos por WhatsApp, pago móvil o transferencia en Venezuela.",
  keywords: [
    "snacks",
    "proteína",
    "Pecado Celestial",
    "comida saludable",
    "Venezuela",
    "pago móvil",
  ],
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    locale: "es_VE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A2E]">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
