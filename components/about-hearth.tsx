import Image from "next/image"
import { Award, Leaf, Package, Timer, Zap } from "lucide-react"

import { hearthImage } from "@/lib/restaurant"

const features = [
  {
    icon: Leaf,
    title: "100% organic",
    description: "Locally grown vegetables and certified halal poultry.",
  },
  {
    icon: Zap,
    title: "Thermal express",
    description: "Insulated boxes keep crusts crisp and piping hot.",
  },
  {
    icon: Timer,
    title: "48-hour dough",
    description: "Cold-fermented for a deep, airy, blistered crust.",
  },
  {
    icon: Package,
    title: "Zero-waste packing",
    description: "Compostable kraft boxes and recyclable seals.",
  },
]

const stats = [
  { value: "12k+", label: "Orders monthly" },
  { value: "4.9", label: "Average rating" },
  { value: "28m", label: "Median delivery" },
]

export function AboutHearth() {
  return (
    <section id="about" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
              About our hearth
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.05] font-extrabold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
              A variety of flavours from American cuisine &amp; hearth
              gastronomy
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              At FreshEat Kitchen, every pizza dough undergoes a 48-hour cold
              fermentation, and our poultry is sourced exclusively from
              sustainable local farms. We merge traditional slow-roasting
              techniques with hyper-efficient dispatch.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/60 bg-muted/60 p-4 transition-colors hover:bg-muted"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-[18px]" />
                  </span>
                  <h3 className="font-display mt-3 text-sm font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted shadow-xl ring-1 ring-border/60">
              <Image
                src={hearthImage}
                alt="Chefs sliding a freshly baked artisan pizza into a wood-fired brick oven"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="absolute top-5 left-5 rounded-full bg-charcoal/70 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-cream uppercase backdrop-blur">
                Live hearth · Philadelphia
              </span>
            </div>

            <div className="absolute -bottom-6 -left-2 flex max-w-xs items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-xl sm:-left-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-cream">
                <Award className="size-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-foreground">
                  Master culinary award
                </p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                  Best deep dish &amp; fried chicken · 2023–2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
