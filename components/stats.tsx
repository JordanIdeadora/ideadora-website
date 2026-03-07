export function Stats() {
  const stats = [
    { value: "30", label: "Días al lanzamiento" },
    { value: "3", label: "Marketplaces" },
    { value: "100%", label: "Hecho para ti" },
    { value: "Primeras ventas", label: "En 30 días", isText: true },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`font-bold text-foreground ${stat.isText ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
