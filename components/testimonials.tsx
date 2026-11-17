import Image from "next/image"
import {
  BadgeCheck,
  Quote,
  Recycle,
  ShieldCheck,
  Star,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { testimonialAvatar, testimonialImage } from "@/lib/restaurant"

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "100% contactless",
    description: "Safe sealed bags",
    tone: "text-primary bg-primary/10",
  },
  {
    icon: BadgeCheck,
    title: "Halal certified",
    description: "Strict quality control",
    tone: "text-success bg-success/10",
  },
  {
    icon: Recycle,
    title: "Eco packaging",
    description: "Biodegradable kraft",
    tone: "text-ember bg-ember/10",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 bg-sand py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted shadow-xl">
              <Image
                src={testimonialImage}
                alt="Customer enjoying freshly delivered pizza and fried chicken at home"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-6 bottom-6 text-cream">
                <span className="text-[9px] font-bold tracking-[0.2em] text-ember uppercase">
                  Verified reviews
                </span>
                <p className="font-display mt-1.5 text-lg leading-snug font-bold text-balance">
                  &ldquo;The crunch on the fried chicken is unmatched in
                  Philadelphia.&rdquo;
                </p>
              </div>
              <span className="absolute top-5 left-5 flex items-center gap-1.5 rounded-full bg-charcoal/70 px-3 py-1.5 text-[10px] font-bold text-cream backdrop-blur">
                <Star className="size-3 fill-rating text-rating" />
                4.9 average · 12k reviews
              </span>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
                Testimonials
              </p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                What our foodies say
              </h2>
            </div>

            <Card className="relative gap-0 rounded-3xl border-0 bg-card px-6 py-7 shadow-xl ring-1 ring-border/60 sm:px-8">
              <Quote className="absolute top-6 right-6 size-10 text-muted" />
              <div className="flex items-center gap-1 text-rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
                <span className="ml-2 text-xs font-bold text-foreground">
                  5.0 / 5.0
                </span>
              </div>

              <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground italic sm:text-lg">
                &ldquo;Penatibus magnis dis point parturient montes nascetur
                ridiculus mus. Ut id lorem ac enim the vestibulum blandit nec
                sit amet felis. Delivered piping hot in 22 minutes!&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-5">
                <Avatar className="size-12">
                  <AvatarImage src={testimonialAvatar} alt="Albert Flores" />
                  <AvatarFallback>AF</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">
                    Albert Flores
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Verified customer · Web designer
                  </p>
                </div>
                <span className="ml-auto hidden items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-bold text-success sm:flex">
                  <BadgeCheck className="size-3.5" />
                  Verified
                </span>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustBadges.map(({ icon: Icon, title, description, tone }) => (
                <div
                  key={title}
                  className="flex items-center gap-2.5 rounded-2xl border border-border/60 bg-card p-3.5 shadow-sm"
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full ${tone}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] leading-tight font-bold text-foreground">
                      {title}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
