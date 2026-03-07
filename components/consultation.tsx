import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"

export function Consultation() {
  return (
    <section id="consulta" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Hablemos de tu proyecto.
            </h2>
            
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Cada marca es diferente. Agenda una llamada estratégica para evaluar tu idea y diseñar el camino para lanzar tu marca.
            </p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                <Calendar className="h-4 w-4" />
                Agendar llamada estratégica
              </Button>
              <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                Enviar mensaje
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
