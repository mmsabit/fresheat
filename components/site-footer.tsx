"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock3,
  Flame,
  Send,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Seasonal menu", href: "#menu" },
      { label: "Popular picks", href: "#menu" },
      { label: "Today's specials", href: "#specials" },
      { label: "Our story", href: "#about" },
    ],
  },
  {
    title: "Kitchen",
    links: [
      { label: "Fried chicken", href: "#menu" },
      { label: "Chicago deep dish", href: "#menu" },
      { label: "Craft pasta", href: "#menu" },
      { label: "Chef desserts", href: "#menu" },
    ],
  },
]

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="border-t border-border/70 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Flame className="size-5" strokeWidth={2.4} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[22px] font-extrabold tracking-tight text-foreground">
                  Fresh<span className="text-primary">Eat</span>
                </span>
                <span className="mt-1 text-[9px] font-bold tracking-[0.28em] text-muted-foreground uppercase">
                  Hearth Kitchen
                </span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Artisanal hearth dining infused with contemporary gastronomy.
              Delivering flame-kissed burgers, hand-stretched pizzas, and
              chef-curated seasonal dishes straight to your table.
            </p>
            <p className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
              <ShieldCheck className="size-4 text-success" />
              100% certified organic &amp; halal kitchen
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Fresheat on Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Camera className="size-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Fresheat on X"
                className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Send className="size-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3 className="font-display text-sm font-bold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4 lg:col-span-4">
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">
                Fresh drops, weekly
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                Seasonal menus, secret specials, and hearth stories — no spam,
                just good food.
              </p>
            </div>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault()
                setSubscribed(true)
              }}
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-10 flex-1 rounded-full border border-border/70 bg-card px-4 text-sm focus-visible:border-primary/60"
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Subscribe to the newsletter"
                className="size-10 shrink-0 rounded-full"
              >
                <ArrowRight className="size-4" />
              </Button>
            </form>
            {subscribed && (
              <p className="flex items-center gap-1.5 text-[11px] font-semibold text-success">
                <CheckCircle2 className="size-3.5" />
                You&apos;re on the list — watch your inbox.
              </p>
            )}
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <Clock3 className="size-3.5 text-ember" />
              Open daily · 09:00 AM – 11:00 PM
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-3.5">
              <p className="text-[9px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Visit the hearth
              </p>
              <p className="mt-1 text-[13px] font-semibold text-foreground">
                4648 Rocky Road, Philadelphia, PA
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-[11px] text-muted-foreground md:flex-row">
          <p>© 2026 FreshEat Kitchen. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of service
            </Link>
            <span className="hidden items-center gap-1.5 sm:flex">
              Made with <Flame className="size-3 text-primary" /> in
              Philadelphia
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
