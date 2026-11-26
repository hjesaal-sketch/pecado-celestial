import Image from "next/image";
import { logoPaths } from "@/lib/brand";

const points = [
  {
    title: "Proteína real",
    description: "Ingredientes de calidad con aporte proteico claro. Ideal para tu día a día o post-entreno.",
    icon: "💪",
  },
  {
    title: "Vegetales crocantes",
    description: "Textura y sabor que no se logran con snacks industriales. Frescura y crunch en cada bocado.",
    icon: "🥦",
  },
  {
    title: "Sin culpa",
    description: "El diablito tienta por el sabor. El angelito aprueba porque es una mejor opción.",
    icon: "😇",
  },
  {
    title: "Hecho en Venezuela",
    description: "Producido localmente. Pedidos por WhatsApp, pago móvil o transferencia. Cercano y confiable.",
    icon: "🇻🇪",
  },
];

export function TrustSection() {
  return (
    <section id="confianza" className="py-16 lg:py-24 bg-[#F8F1E9]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E]">
              ¿Por qué <span className="text-[#9B1B1B]">Pecado Celestial</span>?
            </h2>
            <p className="mt-4 text-[#1A1A2E]/70 leading-relaxed">
              El nombre es un juego. El producto es serio: snacks pensados para que disfrutes
              sin el remordimiento típico. El diablito y el angelito coinciden en una sola cosa:
              <strong className="text-[#9B1B1B]"> ¡Hazlo!</strong>
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <span className="text-2xl shrink-0">{point.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#1A1A2E]">{point.title}</h3>
                    <p className="mt-1 text-sm text-[#1A1A2E]/60">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <Image
                src={logoPaths.advertising}
                alt="Símbolo Pecado Celestial"
                fill
                className="object-contain drop-shadow-xl"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
