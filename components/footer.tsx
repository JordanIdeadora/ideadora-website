import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          <div className="flex flex-col gap-4">
            <Image
              src="/images/ideadora-logo.png"
              alt="Ideadora"
              width={260}
              height={65}
              className="h-20 w-auto"
            />

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/ideadora_latam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/ideadoralatam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="max-w-sm">
            <h3 className="text-sm font-semibold text-foreground">
              Contacto
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-muted-foreground">

              <a
                href="https://wa.me/525660498508?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Ideadora%20y%20me%20interesa%20crear%20mi%20marca.%20%C2%BFPodemos%20hablar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                WhatsApp
              </a>

              <p>
                Avenida Homero 1425, Oficina 105, 11510 Miguel Hidalgo, Ciudad de México, México
              </p>

            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ideadora. Todos los derechos reservados.
         <div className="mt-10 border-t border-border pt-6">
  <p className="text-sm text-muted-foreground">
    © {new Date().getFullYear()} Ideadora. Todos los derechos reservados.
  </p>

  <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
    <a href="/privacidad" className="hover:text-foreground">
      Aviso de privacidad
    </a>

    <a href="/terminos" className="hover:text-foreground">
      Términos de uso
    </a>
  </div>
</div>
