import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { HeroIllustration } from "./hero-illustration"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Creamos marcas listas para vender en eCommerce.
            </h1>
            
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Desde la idea hasta las primeras ventas. Desarrollamos productos, construimos tu marca y lanzamos tu negocio en marketplaces como Amazon, Mercado Libre y Walmart.
            </p>
            
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Comienza tu marca
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
                <Play className="h-4 w-4" />
                Agendar llamada estratégica
              </Button>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative lg:pl-8">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
