"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { brand, logoPaths } from "@/lib/brand";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A2E]/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={logoPaths.horizontal}
              alt={brand.name}
              width={160}
              height={42}
              className="h-9 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <Link href="/#catalogo" className="hover:text-[#C9A227] transition-colors">
              Catálogo
            </Link>
            <Link href="/#confianza" className="hover:text-[#C9A227] transition-colors">
              Por qué nosotros
            </Link>
            <Link href="/pedido" className="hover:text-[#C9A227] transition-colors">
              Pedido
            </Link>
            <Link href="/#contacto" className="hover:text-[#C9A227] transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Cart */}
          <Link
            href="/pedido"
            className="relative inline-flex items-center justify-center rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition-colors"
            aria-label="Ver pedido"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#9B1B1B] text-[11px] font-bold text-white">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
