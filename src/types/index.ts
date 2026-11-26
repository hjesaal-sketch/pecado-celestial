export type { Product } from "@/data/products";

export type CartItem = {
  productId: string;
  quantity: number;
};

export type OrderPayload = {
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
  }>;
  customer: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
    notes?: string;
  };
  paymentMethod: "pagomovil" | "transferencia" | "efectivo";
  total: number;
  currency: string;
  createdAt: string;
};
