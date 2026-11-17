import Image from "next/image"
import { ArrowRight, Clock3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { promos } from "@/lib/restaurant"

export function SpecialPromos() {
  return (
    <section id="specials" className="w-full bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
            Limited time deals
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Today&apos;s special hot picks
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Signature combos prepared fresh with our proprietary spice blend
            and hearth ovens.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {promos.map((promo, index) => (
            <Card
              key={promo.title}
              className="relative min-h-[420px] justify-end gap-0 overflow-hidden rounded-3xl border-0 bg-charcoal py-0 text-cream shadow-xl ring-0"
            >
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover/card:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/5"
                aria-hidden="true"
              />

              <CardContent className="relative z-10 flex flex-col gap-3 px-6 pb-6">
                <span
                  className={
                    index === 1
                      ? "inline-flex w-fit items-center rounded-full bg-ember px-2.5 py-1 text-[9px] font-bold tracking-[0.16em] text-charcoal uppercase"
                      : "inline-flex w-fit items-center rounded-full bg-primary px-2.5 py-1 text-[9px] font-bold tracking-[0.16em] text-primary-foreground uppercase"
                  }
                >
                  {promo.badge}
                </span>
                <h3 className="font-display text-2xl leading-tight font-bold text-balance">
                  {promo.title}
                </h3>
                <p className="line-clamp-2 text-[13px] leading-relaxed text-cream/60">
                  {promo.description}
                </p>
                <div className="mt-3 flex items-end justify-between gap-3 border-t border-cream/10 pt-4">
                  <div>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.16em] text-cream/45 uppercase">
                      <Clock3 className="size-3" />
                      {promo.label}
                    </span>
                    <span className="font-display mt-1 block text-xl font-bold text-ember">
                      ${promo.price.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    render={<a href="#menu" />}
                    nativeButton={false}
                    className="h-9 gap-1.5 rounded-full px-4 text-[10px] shadow-lg shadow-primary/20"
                  >
                    Order now
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
