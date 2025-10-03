import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gauge, Zap, Shield, Thermometer } from "lucide-react"
import Link from "next/link"

export function ProductsSection() {
  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Nuestros Hornos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dos modelos diseñados para satisfacer todas tus necesidades de cocción cerámica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Horno Compacto */}
          <Card className="overflow-hidden border-2 hover:border-accent transition-colors">
            <div className="aspect-square bg-secondary/50 relative overflow-hidden">
              <img
                src="/compact-ceramic-kiln-oven-industrial-front-view.jpg"
                alt="Horno Compacto ThunderHornos"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Compacto
              </div>
            </div>
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Thunder Compact</h3>
                <p className="text-muted-foreground">
                  Ideal para talleres pequeños y medianos. Eficiencia y potencia en un diseño compacto.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Thermometer className="h-5 w-5 text-accent" />
                  <span className="text-sm">Temperatura máxima: 1300°C</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gauge className="h-5 w-5 text-accent" />
                  <span className="text-sm">Capacidad: 50 litros</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm">Potencia: 6 kW</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm">Garantía: 2 años</span>
                </div>
              </div>

              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#cotizacion">Solicitar Cotización</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Horno Industrial */}
          <Card className="overflow-hidden border-2 hover:border-accent transition-colors">
            <div className="aspect-square bg-secondary/50 relative overflow-hidden">
              <img
                src="/large-industrial-ceramic-kiln-oven-professional.jpg"
                alt="Horno Industrial ThunderHornos"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Industrial
              </div>
            </div>
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Thunder Industrial</h3>
                <p className="text-muted-foreground">
                  Para producción a gran escala. Máxima capacidad y rendimiento profesional.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Thermometer className="h-5 w-5 text-accent" />
                  <span className="text-sm">Temperatura máxima: 1300°C</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gauge className="h-5 w-5 text-accent" />
                  <span className="text-sm">Capacidad: 200 litros</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm">Potencia: 18 kW</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm">Garantía: 3 años</span>
                </div>
              </div>

              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#cotizacion">Solicitar Cotización</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
