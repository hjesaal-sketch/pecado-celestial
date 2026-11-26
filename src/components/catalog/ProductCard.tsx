"use client";

import { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { addItem, getItemQuantity } = useCart();
  const qty = getItemQuantity(product.id);

  const emoji =
    product.category === "ahumado"
      ? "🍗"
      : product.category === "curry"
      ? "🍛"
      : product.category === "dulce"
      ? "🥜"
      : "✨";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#e8dfd3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-[#9B1B1B] px-3 py-1 text-xs font-semibold text-white shadow-md">
          {product.badge}
        </span>
      )}

      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F8F1E9] to-[#f5e6e6] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
            {emoji}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-[#1A1A2E] group-hover:text-[#9B1B1B] transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-[#1A1A2E]/60 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#F8F1E9] px-2.5 py-0.5 text-xs font-medium text-[#1A1A2E]/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5 flex items-center justify-between gap-3">
          <div>
            <span className="text-xl font-bold text-[#9B1B1B]">
              ${product.price.toFixed(2)}
            </span>
            <span className="block text-xs text-[#1A1A2E]/45 mt-0.5">
              {product.nutrition.protein} proteína
            </span>
          </div>

          <Button
            size="sm"
            variant={qty > 0 ? "gold" : "primary"}
            onClick={() => addItem(product.id)}
          >
            {qty > 0 ? `+1 (${qty})` : "Agregar"}
          </Button>
        </div>
      </div>
    </article>
  );
}
