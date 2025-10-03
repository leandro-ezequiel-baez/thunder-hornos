import Link from "next/link"
import { Zap, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">ThunderHornos</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Hornos cerámicos de alta/baja temperatura para profesionales y talleres.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Productos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#productos" className="hover:text-accent transition-colors">
                  Thunder Low
                </Link>
              </li>
              <li>
                <Link href="#productos" className="hover:text-accent transition-colors">
                  Thunder High
                </Link>
              </li>
              <li>
                <Link href="#especificaciones" className="hover:text-accent transition-colors">
                  Especificaciones
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Garantía
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Soporte Técnico
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@thunderhornos.com" className="hover:text-accent transition-colors">
                  thunderhornos@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+521234567890" className="hover:text-accent transition-colors">
                  +52 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>La Plata, Buenos Aires, Argentina.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ThunderHornos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
