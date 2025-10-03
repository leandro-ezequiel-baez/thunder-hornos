import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Zap className="h-8 w-8 text-accent lightning-hover" />
          <span className="text-xl font-bold lightning-hover group-hover:text-accent transition-colors">
            ThunderHornos
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#productos" className="text-sm font-medium hover:text-accent transition-colors">
            Productos
          </Link>
          <Link href="#especificaciones" className="text-sm font-medium hover:text-accent transition-colors">
            Especificaciones
          </Link>
          <Link href="#cotizacion" className="text-sm font-medium hover:text-accent transition-colors">
            Cotización
          </Link>
        </nav>

        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#cotizacion">Solicitar Cotización</Link>
        </Button>
      </div>
    </header>
  )
}
