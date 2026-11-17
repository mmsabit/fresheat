import Image from "next/image"
import { ArrowUpRight, Clock, Flame, Leaf, ShieldCheck, Star } from "lucide-react"
import { HERO_IMAGE } from "@/lib/restaurant"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-linear-to-b from-sand via-background to-background"
    >
      <div
        className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-24 size-120 rounded-full bg-ember/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:mt-10 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-7 lg:col-span-7">
            <div className="space-y-5">
              <h1 className="font-display text-[2.75rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance text-foreground uppercase sm:text-6xl xl:text-[4.6rem]">
                Spicy fried chicken{" "}
                <span className="text-primary">&amp;</span> artisan craft
                dishes
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Authentic flame-grilled delights, hand-stretched Chicago deep
                pizza, and gourmet pasta crafted fresh daily with locally
                sourced organic ingredients.
              </p>
            </div>



            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                100% halal certified
              </span>
              <span className="flex items-center gap-2">
                <Leaf className="size-4 text-success" />
                Locally sourced
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-ember" />
                Hot in 28 minutes
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 lg:col-span-5 lg:max-w-none">
            <div
              className="absolute inset-6 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative aspect-square w-76 rounded-full bg-linear-to-tr from-ember via-primary to-[#ffb3ae] p-2 shadow-[0_40px_80px_-40px_rgba(227,0,43,0.65)] sm:w-92 lg:w-[24rem]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-muted shadow-inner">
                <Image
                  src={HERO_IMAGE}
                  alt="Gourmet fried chicken and a loaded cheeseburger on a rustic wooden board"
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 368px, 304px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-white/30 ring-inset" />
              </div>
            </div>

            <div className="animate-float-soft absolute -top-1 right-0 z-10 flex items-center gap-3 rounded-2xl bg-charcoal p-3 pr-4 text-cream shadow-2xl sm:top-3 sm:right-2">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <Flame className="size-5" />
              </span>
              <span>
                <span className="block text-[9px] font-bold tracking-[0.18em] text-cream/50 uppercase">
                  Wood-fired hearth
                </span>
                <span className="font-display block text-sm font-bold">
                  Flame-kissed
                </span>
              </span>
            </div>

            <div className="animate-float-soft absolute -bottom-2 -left-2 z-10 flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-3 pr-5 shadow-xl [animation-delay:1.6s] sm:bottom-2 sm:left-0">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-rating shadow-md shadow-primary/20">
                <Star className="size-5 fill-current" />
              </span>
              <span>
                <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.14em] text-primary uppercase">
                  Award winning
                  <span className="text-muted-foreground/40">·</span>
                  <span className="flex items-center gap-0.5 text-rating normal-case">
                    <Star className="size-3 fill-current" />
                    4.9
                  </span>
                </span>
                <span className="font-display mt-0.5 block text-sm font-bold text-foreground">
                  Top rated hearth
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  1.2k+ verified reviews
                </span>
              </span>
            </div>

            <div className="absolute top-16 -left-3 hidden flex-col items-center justify-center rounded-2xl border border-border/60 bg-card px-3 py-2.5 shadow-lg sm:flex">
              <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                <Clock className="size-3 text-ember" />
                Avg. delivery
              </span>
              <span className="font-display mt-0.5 text-lg font-extrabold text-foreground">
                28 min
              </span>
            </div>

            <div className="absolute right-1 bottom-24 hidden size-20 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-cream text-charcoal shadow-xl ring-1 ring-charcoal/10 sm:flex">
              <span className="font-display text-xl leading-none font-extrabold">
                30%
              </span>
              <span className="mt-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                Off
              </span>
            </div>

            <a
              href="#menu"
              aria-label="Jump to the menu"
              className="absolute top-1/2 -right-2 hidden size-11 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground lg:flex"
            >
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
