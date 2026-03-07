import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Process } from "@/components/process"
import { Features } from "@/components/features"
import { Audience } from "@/components/audience"
import { Cases } from "@/components/cases"
import { Consultation } from "@/components/consultation"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <Process />
      <Features />
      <Audience />
      <Cases />
      <Consultation />
      <CTA />
      <Footer />
    </main>
  )
}
