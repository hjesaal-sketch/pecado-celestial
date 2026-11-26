"use client";

import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function CatalogSection() {
  return (
    <section id="catalogo" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E]">
            Nuestros <span className="text-[#9B1B1B]">Pecados</span>
          </h2>
          <p className="mt-3 text-[#1A1A2E]/70">
            Cada sabor tiene su propia personalidad. Elige tu tentación favorita.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#1A1A2E]/50">
          Pronto más sabores: Picante, Veggie, Redención Proteica y ediciones de temporada.
        </p>
      </div>
    </section>
  );
}
