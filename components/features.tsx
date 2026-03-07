import { Tag, ShoppingBag, Store, Headphones, LineChart } from "lucide-react"

const features = [
  {
    icon: Tag,
    title: "Tu propia marca de productos",
    description: "Una identidad de marca diseñada profesionalmente que resuena con tus clientes objetivo y destaca en marketplaces.",
  },
  {
    icon: ShoppingBag,
    title: "Productos listos para vender",
    description: "Productos validados, obtenidos y manufacturados listos para listar en marketplaces desde el día uno.",
  },
  {
    icon: Store,
    title: "Tiendas en vivo en marketplaces",
    description: "Tiendas completamente configuradas y optimizadas en Amazon, Mercado Libre y Walmart Marketplace México.",
  },
  {
    icon: Headphones,
    title: "Soporte de lanzamiento",
    description: "Soporte dedicado durante tu fase de lanzamiento para asegurar un inicio suave y primeras ventas fuertes.",
  },
  {
    icon: LineChart,
    title: "Experiencia en marketplaces",
    description: "Acceso a nuestro conocimiento profundo de algoritmos de marketplace, factores de ranking y optimización de conversiones.",
  },
]

export function Features() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Qué Obtienes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tu marca. Tus productos. Tu negocio.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Todo lo que necesitas para poseer y operar una marca de eCommerce próspera en los principales marketplaces de México.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground">
                <feature.icon className="h-6 w-6 text-background" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
