import { Thermometer, Clock, Cpu, Leaf } from "lucide-react"

export function SpecsSection() {
  const features = [
    {
      icon: Thermometer,
      title: "Control Preciso",
      description: "Sistema de control digital con precisión de ±5°C para resultados perfectos",
    },
    {
      icon: Clock,
      title: "Calentamiento Rápido",
      description: "Alcanza 1000°C en menos de 2 horas gracias a nuestro sistema de resistencias",
    },
    {
      icon: Cpu,
      title: "Programable",
      description: "Hasta 20 programas personalizables con rampas de temperatura y tiempos",
    },
    {
      icon: Leaf,
      title: "Eficiencia Energética",
      description: "Aislamiento térmico de alta calidad que reduce el consumo hasta un 30%",
    },
  ]

  return (
    <section id="especificaciones" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Tecnología de Vanguardia</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Características que hacen de nuestros hornos la mejor opción del mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/20">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-card border-2 border-accent/20 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Especificaciones Técnicas</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Rango de temperatura: 0°C - 1300°C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Voltaje: 220V / 380V trifásico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Material refractario: Fibra cerámica de alta densidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Resistencias: Kanthal APM de larga duración</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Incluye</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Controlador digital programable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Termocupla tipo K de alta precisión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Manual de usuario y recetas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Soporte técnico especializado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
