import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    name: "Puppy",
    category: "Cuidado para mascotas",
    description: "Creamos una marca de cuidado para mascotas desarrollada para marketplaces.",
    color: "from-sky-100 to-blue-100",
    logo: "/images/puppy-logo.jpeg",
  },
  {
    name: "Natural Snacks",
    category: "Snacks naturales para mascotas",
    description: "Creamos una marca de snacks deshidratados para mascotas, desarrollamos desde la idea de producto hasta su lanzamiento en marketplaces.",
    color: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-600",
    logo: "/images/woofwoof-logo.png",
  },
  {
    name: "Clean Fresh & Cat",
    category: "Arena premium para gatos",
    description: "Desarrollamos la marca Clean Fresh & Cat para marketplaces, desde la identidad visual y empaque hasta la creación de imágenes de producto y contenido comercial para venta online.",
    color: "from-yellow-400/20 to-emerald-500/20",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600",
    logo: "/images/clean-fresh-cat-logo.png",
  },
  {
    name: "Ideastore",
    category: "Importación y eCommerce",
    description: "Analizamos las tendencias del mercado, seleccionamos el producto, lo importamos desde China y lo lanzamos en marketplaces de México.",
    color: "from-primary/20 to-accent/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    logo: "/images/ideastore-logo.png",
  },
]

export function Cases() {
  return (
    <section id="cases" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Casos de Éxito
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Marcas que hemos ayudado a desarrollar.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
            >
              {/* Visual area */}
              <div className={`h-52 bg-gradient-to-br ${caseItem.color} flex items-center justify-center p-6`}>
                {caseItem.logo ? (
                  <div className="flex items-center justify-center rounded-xl bg-white p-8 shadow-md">
                    <Image
                      src={caseItem.logo}
                      alt={caseItem.name}
                      width={200}
                      height={100}
                      className="h-auto w-56 object-contain"
                    />
                  </div>
                ) : (
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${caseItem.iconBg || "bg-muted"}`}>
                    <span className={`text-3xl font-bold ${caseItem.iconColor || "text-muted-foreground"}`}>
                      {caseItem.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {caseItem.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{caseItem.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {caseItem.description}
                </p>
                
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Ver caso
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
