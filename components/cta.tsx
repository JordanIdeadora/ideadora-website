import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Construyamos tu próxima marca.
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Si tienes una idea de producto o quieres lanzar una nueva marca, podemos ayudarte a llevarla desde la idea hasta el mercado.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
           <Button size="lg" variant="secondary" className="w-full gap-2 sm:w-auto" asChild>
  <a
    href="https://calendly.com/ventas-ideadora/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    Agendar asesoría
    <ArrowRight className="h-4 w-4" />
  </a>
</Button>
           <Button 
  size="lg" 
  variant="outline" 
  className="w-full gap-2 sm:w-auto border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
  asChild
>
  <a
    href="https://wa.me/525660498508?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Ideadora%20y%20me%20interesa%20crear%20mi%20marca.%20%C2%BFPodemos%20hablar%3F"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle className="h-4 w-4" />
    Hablar con Ideadora
  </a>
</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
