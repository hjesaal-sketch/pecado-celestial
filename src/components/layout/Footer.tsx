import Link from "next/link";
import Image from "next/image";
import { brand, logoPaths } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src={logoPaths.horizontal}
              alt={brand.name}
              width={160}
              height={42}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {brand.tagline}
              <br />
              Snacks con proteína, vegetales y cero culpa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#C9A227] mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/#catalogo" className="hover:text-white transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/pedido" className="hover:text-white transition-colors">
                  Hacer pedido
                </Link>
              </li>
              <li>
                <Link href="/#confianza" className="hover:text-white transition-colors">
                  Confianza
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#C9A227] mb-4">Pedidos y contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>WhatsApp: {brand.phone}</li>
              <li>{brand.email}</li>
              <li className="pt-2 text-white/60">
                Pago Móvil · Transferencia · Efectivo
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ y un poco de pecado en Venezuela</p>
        </div>
      </div>
    </footer>
  );
}
