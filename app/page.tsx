import { AboutHearth } from "@/components/about-hearth"
import { CartProvider } from "@/components/cart-provider"
import { CategoryRail } from "@/components/category-rail"
import { ContactStrip } from "@/components/contact-strip"
import { FlashDeal } from "@/components/flash-deal"
import { Hero } from "@/components/hero"
import { Journal } from "@/components/journal"
import { MenuFilterProvider } from "@/components/menu-filter"
import { PopularDishes } from "@/components/popular-dishes"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SpecialPromos } from "@/components/special-promos"
import { Testimonials } from "@/components/testimonials"

export default function Page() {
  return (
    <CartProvider>
      <MenuFilterProvider>
        <SiteHeader />
        <main className="min-h-svh">
          <Hero />
          <CategoryRail />
          <SpecialPromos />
          <PopularDishes />
          <FlashDeal />
          <AboutHearth />
          <Testimonials />
          <Journal />
          <ContactStrip />
        </main>
        <SiteFooter />
      </MenuFilterProvider>
    </CartProvider>
  )
}
