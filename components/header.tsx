"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Image
            src="/images/ideadora-logo.png"
            alt="Ideadora"
            width={240}
            height={60}
            className="h-24 w-auto"
            priority
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#problema" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Problema
          </a>
          <a href="#solucion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Solución
          </a>
          <a href="#proceso" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Proceso
          </a>
          <a href="#cases" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Casos de Éxito
          </a>
        </nav>

        <div className="hidden md:block">
          <Button variant="default" size="sm" asChild>
  <a
    href="https://wa.me/525660498508?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Ideadora%20y%20me%20interesa%20crear%20mi%20marca.%20%C2%BFPodemos%20hablar%3F"
    target="_blank"
    rel="noopener noreferrer"
  >
    Comienza ahora
  </a>
</Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-4">
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
            <Button variant="default" size="sm" className="w-full" asChild>
  <a
    href="https://wa.me/525660498508?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Ideadora%20y%20me%20interesa%20crear%20mi%20marca.%20%C2%BFPodemos%20hablar%3F"
    target="_blank"
    rel="noopener noreferrer"
  >
    Comienza ahora
  </a>
</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
