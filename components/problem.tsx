import { Package, Palette, Factory, ListChecks, BarChart3, Truck } from "lucide-react"

const problems = [
  {
    icon: Package,
    title: "Elegir el producto correcto",
    description: "Investigación infinita sin un camino claro hacia un producto ganador que se venda.",
  },
  {
    icon: Palette,
    title: "Crear una marca",
    description: "Construir una identidad de marca que destaque en un marketplace abarrotado.",
  },
  {
    icon: Factory,
    title: "Manufactura",
    description: "Encontrar proveedores confiables y gestionar la calidad de producción.",
  },
  {
    icon: ListChecks,
    title: "Listar productos correctamente",
    description: "Optimizar listados para algoritmos de marketplace y conversiones.",
  },
  {
    icon: BarChart3,
    title: "Estrategia de marketplace",
    description: "Entender las reglas, tarifas y sistemas de ranking de cada plataforma.",
  },
  {
    icon: Truck,
    title: "Logística y operaciones",
    description: "Gestionar inventario, envíos y cumplimiento a escala.",
  },
]

export function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            El Problema
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            La mayoría de personas quieren vender en línea. Muy pocos saben cómo empezar.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Los emprendedores se quedan atrapados en un laberinto de decisiones antes de lanzar. ¿Te suena familiar?
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <problem.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-base text-muted-foreground">
          La mayoría de emprendedores se quedan atrapados antes de lanzar.{" "}
          <span className="font-medium text-foreground">Nos aseguraremos de que no lo hagas.</span>
        </p>
      </div>
    </section>
  )
}
