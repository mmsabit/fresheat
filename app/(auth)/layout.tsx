import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Flame, Star } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { testimonialImage } from "@/lib/restaurant"

const stats = [
  { value: "28 min", label: "Avg. delivery" },
  { value: "4.9", label: "Guest rating" },
  { value: "12k+", label: "Weekly orders" },
]

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-svh flex-col bg-background lg:h-svh lg:overflow-hidden">
      <header className="shrink-0 border-b border-border/60">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Flame className="size-4.5" strokeWidth={2.4} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Fresh<span className="text-primary">Eat</span>
              </span>
              <span className="mt-1 text-[8px] font-bold tracking-[0.26em] text-muted-foreground uppercase">
                Hearth Kitchen
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              aria-label="Back to the restaurant"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <ArrowLeft className="size-4" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="grid flex-1 lg:min-h-0 lg:grid-cols-2">
        <aside className="relative hidden overflow-hidden bg-charcoal lg:block">
          <Image
            src={testimonialImage}
            alt="Friends sharing pizza and fried chicken at a candlelit FreshEat table"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-80"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/80 to-charcoal/30"
            aria-hidden="true"
          />
          <div
            className="absolute -top-24 -right-24 size-80 rounded-full bg-primary/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-16 size-72 rounded-full bg-ember/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full flex-col justify-between gap-10 p-10 xl:p-14">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-[9px] font-bold tracking-[0.18em] text-cream/70 uppercase backdrop-blur">
                <span className="size-1.5 animate-pulse rounded-full bg-success" />
                Hearth open now
              </span>
              <span className="text-[9px] font-bold tracking-[0.18em] text-cream/40 uppercase">
                Est. 2014 · Philadelphia
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="font-display max-w-lg text-4xl leading-[0.95] font-extrabold tracking-tight text-balance text-cream uppercase xl:text-5xl">
                Good food.
                <br />
                Better company.
                <br />
                <span className="text-ember">One tap away.</span>
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-cream/60">
                Join 12,000 neighbours who order flame-kissed chicken, Chicago
                deep dish, and chef-crafted pasta from our hearth to their door
                — hot, in under 30 minutes.
              </p>
              <dl className="flex flex-wrap gap-x-8 gap-y-4 border-t border-cream/10 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[9px] font-bold tracking-[0.16em] text-cream/40 uppercase">
                      {stat.label}
                    </dt>
                    <dd className="font-display mt-1 text-2xl font-extrabold text-cream">
                      {stat.value}
                      {stat.value === "4.9" ? (
                        <Star className="mb-1 ml-1 inline size-3.5 fill-rating text-rating" />
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="rounded-2xl border border-cream/10 bg-cream/5 p-5 backdrop-blur-md">
              <div className="flex gap-0.5 text-rating" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-cream/80">
                “FreshEat is the only app my whole family agrees on. Dinner
                lands hot, every single time.”
              </blockquote>
              <figcaption className="mt-3 text-[9px] font-bold tracking-[0.16em] text-cream/40 uppercase">
                Amelia R. · 41 orders and counting
              </figcaption>
            </figure>
          </div>
        </aside>

        <main className="flex flex-1 flex-col px-4 py-10 sm:px-8 lg:min-h-0 lg:overflow-y-auto lg:px-12 lg:py-14 xl:px-16">
          <div className="m-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
