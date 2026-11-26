import { brand } from "@/lib/brand";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "¡Hola! Quiero hacer un pedido de Pecado Celestial 😈😇"
  )}`;

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E]">
          ¿Listo para <span className="text-[#9B1B1B]">pecar</span>?
        </h2>
        <p className="mt-4 text-[#1A1A2E]/70">
          Escríbenos por WhatsApp, arma tu pedido en el sitio o contáctanos directamente.
          Pagamos con Pago Móvil o transferencia bancaria.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="primary">
              Pedir por WhatsApp
            </Button>
          </a>
          <a href={`mailto:${brand.email}`}>
            <Button size="lg" variant="secondary">
              Escribir al correo
            </Button>
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-sm text-[#1A1A2E]/70">
          <div className="rounded-xl bg-[#F8F1E9] p-4">
            <p className="font-semibold text-[#1A1A2E]">WhatsApp</p>
            <p className="mt-1">{brand.phone}</p>
          </div>
          <div className="rounded-xl bg-[#F8F1E9] p-4">
            <p className="font-semibold text-[#1A1A2E]">Correo</p>
            <p className="mt-1">{brand.email}</p>
          </div>
          <div className="rounded-xl bg-[#F8F1E9] p-4">
            <p className="font-semibold text-[#1A1A2E]">Pagos</p>
            <p className="mt-1">Pago Móvil · Transferencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
