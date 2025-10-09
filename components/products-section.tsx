"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gauge, Zap, Shield, Thermometer, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1i30sDB9UzRv6qAjsCXMo0YRyHG9Jg.png",
      title: "Cerámica Artesanal",
      description: "Jarrones, platos y piezas decorativas con acabados perfectos",
    },
    {
      image: "/beautiful-glazed-ceramic-bowls-and-vases-in-warm-e.jpg",
      title: "Esmaltados Vibrantes",
      description: "Colores intensos y acabados brillantes a 1300°C",
    },
    {
      image: "/glass-fused-art-pieces-colorful-vitrofusion-artwor.jpg",
      title: "Vitrofusión",
      description: "Piezas de vidrio fusionado con detalles impresionantes",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden rounded-lg bg-secondary/30">
        <img
          src={products[currentIndex].image || "/placeholder.svg"}
          alt={products[currentIndex].title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Controles del carrusel */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-accent w-6" : "bg-background/60"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Información del producto actual */}
      <div className="mt-4 text-center">
        <h4 className="font-bold text-lg mb-1">{products[currentIndex].title}</h4>
        <p className="text-sm text-muted-foreground">{products[currentIndex].description}</p>
      </div>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Nuestros Hornos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Potencia profesional con resultados excepcionales
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Información del horno */}
              <Card className="overflow-hidden border-2 hover:border-accent transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-3xl">Thunder 12L</CardTitle>
                </CardHeader>
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
                      <span className="text-sm">Capacidad: 12 litros</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-accent" />
                      <span className="text-sm">Potencia: 2700 W</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-accent" />
                      <span className="text-sm">Garantía: 1 año</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#cotizacion">Solicitar Cotización</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="h-full min-h-[500px]">
                <div className="sticky top-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Resultados Profesionales</h3>
                  <ProductCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
