import { ArrowRight, Rocket, Building2, Store } from "lucide-react"

const audiences = [
  {
    icon: Rocket,
    title: "Emprendedores",
    description: "Personas que quieren lanzar su primera marca de productos y construir un negocio de eCommerce desde cero.",
    cta: "Explorar opción",
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Empresas que quieren lanzar nuevos productos o desarrollar marcas propias para vender en marketplaces.",
    cta: "Explorar opción",
  },
  {
    icon: Store,
    title: "Marcas existentes",
    description: "Marcas de retail que quieren expandirse a canales digitales o marcas internacionales que quieren comenzar a vender en México.",
    cta: "Explorar opción",
  },
]

export function Audience() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Para Quién Es Ideadora
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Soluciones para cada etapa de tu negocio.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{audience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audience.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {audience.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
