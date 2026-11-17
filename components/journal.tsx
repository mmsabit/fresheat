import Image from "next/image"
import { ArrowRight, User } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { posts } from "@/lib/restaurant"

export function Journal() {
  return (
    <section id="journal" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
              Latest news
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our latest food news
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Insights, recipes, and seasonal updates straight from our master
              hearth kitchen.
            </p>
          </div>
          <a
            href="#journal"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-ember"
          >
            Read all articles
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group/card flex flex-col gap-0 overflow-hidden rounded-3xl border-0 py-0 shadow-md ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute top-3 left-3 flex min-w-12 flex-col items-center rounded-xl bg-charcoal/90 px-2.5 py-1.5 text-cream shadow-sm backdrop-blur">
                  <span className="font-display text-base leading-none font-bold text-primary">
                    {post.date.day}
                  </span>
                  <span className="mt-0.5 text-[8px] font-bold tracking-[0.16em] uppercase">
                    {post.date.month}
                  </span>
                </div>
              </div>

              <CardContent className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-5">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="size-3" />
                    {post.author}
                  </span>
                  <span className="text-border">•</span>
                  <span className="font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display text-lg leading-snug font-bold text-foreground transition-colors group-hover/card:text-primary">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <a
                  href="#journal"
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-[11px] font-bold text-primary transition-all group-hover/card:gap-2 hover:text-ember"
                >
                  Read more
                  <ArrowRight className="size-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
