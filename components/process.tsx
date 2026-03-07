const steps = [
  {
    step: "01",
    title: "Estrategia de marca",
    description: "Definimos tu propuesta de valor, mercado objetivo y posicionamiento competitivo.",
  },
  {
    step: "02",
    title: "Desarrollo de producto",
    description: "Encontramos proveedores, validamos productos y desarrollamos tu oferta.",
  },
  {
    step: "03",
    title: "Configuración de marketplaces",
    description: "Creamos y optimizamos tus tiendas en Amazon, Mercado Libre y otros marketplaces.",
  },
  {
    step: "04",
    title: "Lanzamiento y primeras ventas",
    description: "Ejecutamos la estrategia de lanzamiento y te acompañamos hasta generar tracción.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            El Proceso
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            De la idea a las primeras ventas.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un proceso probado de cuatro pasos que te lleva de cero a vender en los marketplaces más grandes de México.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground">Paso {step.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-4 hidden h-px w-8 bg-border lg:block" style={{ transform: "translateX(100%)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
