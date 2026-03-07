import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center">
            <Image
              src="/images/ideadora-logo.png"
              alt="Ideadora"
              width={140}
              height={35}
              className="h-9 w-auto"
            />
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#problema" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Problema
            </a>
            <a href="#solucion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Solución
            </a>
            <a href="#proceso" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Proceso
            </a>
            <a href="#precio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Precio
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Ideadora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
