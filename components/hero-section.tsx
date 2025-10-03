import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(100,120,255,0.08),transparent)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <Zap className="h-4 w-4" />
            Tecnología de Alta Temperatura
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Hornos Cerámicos de <span className="text-accent">Alta Potencia</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Alcanza temperaturas de hasta 1300°C con nuestros hornos industriales de última generación
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8">
              <Link href="#cotizacion">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent">
              <Link href="#productos">Ver Productos</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">1300°C</div>
              <div className="text-sm text-muted-foreground">Temperatura Máxima</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">+10</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
