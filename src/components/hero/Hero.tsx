import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { brand, logoPaths } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A2E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#9B1B1B]/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C9A227]/15 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="text-center lg:text-left space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-sm font-medium text-[#C9A227]">
              <span>😈</span>
              <span className="opacity-70">+</span>
              <span>😇</span>
              <span className="ml-1">Ambos coinciden</span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white">
                <span className="block text-[#9B1B1B]">PECADO</span>
                <span className="block text-[#C9A227]">CELESTIAL</span>
              </h1>
              <p className="mt-5 text-xl sm:text-2xl text-white/80 font-medium italic">
                {brand.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-white/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Snacks con proteína real y vegetales crocantes.  
              El diablito tienta por el sabor. El angelito aprueba porque no hay culpa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link href="/#catalogo">
                <Button size="lg" variant="gold" className="min-w-[160px]">
                  Ver catálogo
                </Button>
              </Link>
              <Link href="/pedido">
                <Button size="lg" variant="secondary" className="min-w-[160px] border-white/30 text-white hover:bg-white/10">
                  Hacer pedido
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-4 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                Proteína real
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                Vegetales crocantes
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                Sin culpa
              </span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={logoPaths.mascotDuo}
                alt="Diablito y Angelito de Pecado Celestial"
                width={600}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}