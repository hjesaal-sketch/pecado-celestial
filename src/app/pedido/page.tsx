"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import { brand } from "@/lib/brand";
import { Button } from "@/components/ui/Button";
import type { OrderPayload } from "@/types";

export default function PedidoPage() {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    paymentMethod: "pagomovil" as const,
  });

  const cartProducts = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return {
        ...item,
        product,
        subtotal: product.price * item.quantity,
      };
    })
    .filter(Boolean) as Array<{
    productId: string;
    quantity: number;
    product: (typeof products)[0];
    subtotal: number;
  }>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: OrderPayload = {
      items: cartProducts.map((c) => ({
        productId: c.productId,
        name: c.product.name,
        quantity: c.quantity,
        unitPrice: c.product.price,
        subtotal: c.subtotal,
      })),
      customer: {
        name: form.name,
        phone: form.phone,
        email: form.email || undefined,
        address: form.address || undefined,
        notes: form.notes || undefined,
      },
      paymentMethod: form.paymentMethod,
      total: totalPrice,
      currency: "USD",
      createdAt: new Date().toISOString(),
    };

    // Build WhatsApp message
    const lines = [
      `*Nuevo pedido - ${brand.name}*`,
      "",
      `*Cliente:* ${form.name}`,
      `*Teléfono:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      form.address ? `*Dirección:* ${form.address}` : null,
      "",
      "*Productos:*",
      ...payload.items.map(
        (i) => `• ${i.name} x${i.quantity} = $${i.subtotal.toFixed(2)}`
      ),
      "",
      `*Total:* $${totalPrice.toFixed(2)}`,
      `*Pago:* ${
        brand.paymentMethods.find((m) => m.id === form.paymentMethod)?.label
      }`,
      form.notes ? `*Notas:* ${form.notes}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${brand.whatsapp}?text=${text}`;

    window.open(url, "_blank");
    setSubmitted(true);
    // optional: clearCart();
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#1A1A2E]">Tu carrito está vacío</h1>
        <p className="mt-3 text-[#1A1A2E]/60">
          El diablito y el angelito te esperan en el catálogo.
        </p>
        <Link href="/#catalogo" className="mt-8 inline-block">
          <Button size="lg">Ir al catálogo</Button>
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <div className="text-6xl mb-4">😈😇</div>
        <h1 className="text-3xl font-bold text-[#1A1A2E]">¡Pedido listo!</h1>
        <p className="mt-3 text-[#1A1A2E]/70">
          Se abrió WhatsApp con el resumen de tu pedido. Confirma el envío y
          coordina el pago (Pago Móvil o transferencia).
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              clearCart();
            }}
          >
            Nuevo pedido
          </Button>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-8">
        Tu pedido
      </h1>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Items */}
        <div className="lg:col-span-3 space-y-4">
          {cartProducts.map(({ product, quantity, subtotal }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-xl border border-[#F8F1E9] p-4 bg-white"
            >
              <div className="h-20 w-20 rounded-lg bg-[#F8F1E9] flex items-center justify-center text-3xl shrink-0">
                {product.category === "ahumado" && "🍗"}
                {product.category === "curry" && "🍛"}
                {product.category === "dulce" && "🥜"}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#1A1A2E]">{product.name}</h3>
                <p className="text-sm text-[#1A1A2E]/60">
                  ${product.price.toFixed(2)} c/u
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-[#F8F1E9]">
                    <button
                      type="button"
                      className="px-3 py-1 text-lg"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                    >
                      −
                    </button>
                    <span className="px-2 font-medium">{quantity}</span>
                    <button
                      type="button"
                      className="px-3 py-1 text-lg"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-[#9B1B1B] hover:underline"
                    onClick={() => removeItem(product.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
              <div className="text-right font-semibold text-[#9B1B1B]">
                ${subtotal.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Form + summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-[#F8F1E9] bg-[#F8F1E9]/40 p-6">
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span className="text-[#9B1B1B]">${totalPrice.toFixed(2)}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-[#e5d9c8] bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B1B1B]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-[#e5d9c8] bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B1B1B]"
                  placeholder="0412..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-[#e5d9c8] bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B1B1B]"
                  placeholder="opcional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Dirección de entrega
                </label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full rounded-xl border border-[#e5d9c8] bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B1B1B]"
                  placeholder="Zona / referencia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Método de pago *
                </label>
                <select
                  required
                  value={form.paymentMethod}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      paymentMethod: e.target.value as typeof form.paymentMethod,
                    })
                  }
                  className="w-full rounded-xl border border-[#e5d9c8] bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B1B1B]"
                >
                  {brand.paymentMethods.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Notas</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={2}
                  className="w-full rounded-xl border border-[#e5d9c8] bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B1B1B]"
                  placeholder="Horario preferido, etc."
                />
              </div>

              <Button type="submit" size="lg" fullWidth variant="primary">
                Enviar pedido por WhatsApp
              </Button>
            </form>

            <p className="mt-4 text-xs text-center text-[#1A1A2E]/50">
              Se abrirá WhatsApp con el resumen listo para enviar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
