import { Check } from "lucide-react"

const features = [
  "Estrategia de lanzamiento",
  "Configuración de tienda",
  "Lanzamiento en Amazon, Mercado Libre y Walmart Marketplace",
  "Listados de productos optimizados para marketplaces",
  "Estrategia de marketplace",
  "Obtención y validación de productos",
  "Creación de marca",
]

export function Solution() {
  return (
    <section id="solucion" className="border-y border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            La Solución
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Construimos tu marca de eCommerce desde cero.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nos encargamos de todo el proceso de lanzamiento, desde la creación de tu marca y desarrollo de producto hasta tus primeras ventas en los marketplaces más grandes de México.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Tú enfócate en la visión. Nosotros nos encargamos de construirla y llevarla al mercado.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Programa de Lanzamiento
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              Todo lo que necesitas para lanzar
            </h3>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Check className="h-3 w-3 text-background" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
