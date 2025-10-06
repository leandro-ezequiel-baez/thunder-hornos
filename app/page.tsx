import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { SpecsSection } from "@/components/specs-section"
import { QuoteSection } from "@/components/quote-section"
import { Footer } from "@/components/footer"
import WhatsappFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <SpecsSection />
        <QuoteSection />
        <WhatsappFloat />
      </main>
      <Footer />
    </div>
  )
}
