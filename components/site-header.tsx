"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Flame,
  Heart,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  User,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { useMenuFilter } from "@/components/menu-filter"

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#specials", label: "Specials" },
  { href: "#about", label: "Our story" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const { count, subtotal, setCartOpen } = useCart()
  const { query, setQuery } = useMenuFilter()
  const [menuOpen, setMenuOpen] = useState(false)

  const jumpToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const tag = document.activeElement?.tagName
      const isTyping = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT"

      if (event.key === "/" && !isTyping) {
        event.preventDefault()
        document
          .querySelector<HTMLInputElement>('header input[type="search"]')
          ?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-charcoal text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold tracking-[0.14em] uppercase">
              <Sparkles className="size-3" />
              Offer
            </span>
            <p className="truncate text-cream/80">
              Free delivery over $35 · Use code{" "}
              <span className="font-bold tracking-wider text-ember">FRESH30</span>{" "}
              for 30% off
            </p>
          </div>
          <div className="hidden items-center gap-5 text-cream/70 lg:flex">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-success" />
              Open daily · 09:00 – 23:00
            </span>
            <span className="h-3 w-px bg-cream/20" aria-hidden="true" />
            <a
              href="tel:+18003737432"
              className="flex items-center gap-1.5 transition-colors hover:text-ember"
            >
              <Phone className="size-3.5" />
              (800) 373-7432
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2.5">
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

          <form
            className="relative hidden max-w-sm flex-1 md:block"
            role="search"
            onSubmit={(event) => {
              event.preventDefault()
              jumpToMenu()
            }}
          >
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dishes, burgers, pizza…"
              aria-label="Search the menu"
              className="h-11 rounded-full border border-border/70 bg-card pr-12 pl-10 text-sm shadow-sm transition-all focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/10"
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute top-1/2 right-3 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            ) : (
              <kbd className="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground lg:block">
                /
              </kbd>
            )}
          </form>

          <nav className="ml-auto hidden items-center gap-7 text-[13px] font-semibold text-muted-foreground lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Wishlist, 3 items"
              className="relative hidden size-10 rounded-full bg-secondary text-foreground hover:bg-secondary/80 sm:inline-flex"
            >
              <Heart className="size-[18px]" />
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </Button>

            <Button
              onClick={() => setCartOpen(true)}
              className="h-10 gap-2 rounded-full px-4 tracking-normal normal-case shadow-lg shadow-primary/20"
            >
              <ShoppingBag className="size-4" />
              <span className="hidden text-[13px] font-bold sm:inline">
                ${subtotal.toFixed(2)}
              </span>
              <span className="flex min-w-5 items-center justify-center rounded-full bg-primary-foreground/20 px-1.5 text-[10px] font-bold">
                {count}
              </span>
            </Button>

            <Link
              href="/sign-in"
              aria-label="Sign in to your FreshEat account"
              className="hidden size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:flex"
            >
              <User className="size-[18px]" />
            </Link>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open navigation menu"
                    className="size-10 rounded-full border-border bg-card lg:hidden"
                  />
                }
              >
                <Menu className="size-[18px]" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full border-r-border/70 bg-background p-0 sm:max-w-xs"
              >
                <SheetHeader className="border-b border-border/70 px-6 py-5">
                  <SheetTitle className="flex items-center gap-2 text-foreground">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Flame className="size-4" />
                    </span>
                    <span className="font-display text-lg font-extrabold tracking-tight normal-case">
                      Fresh<span className="text-primary">Eat</span>
                    </span>
                  </SheetTitle>
                  <SheetDescription>
                    Flame-kissed favorites, delivered hot.
                  </SheetDescription>
                </SheetHeader>
                <form
                  className="border-b border-border/70 p-4"
                  onSubmit={(event) => {
                    event.preventDefault()
                    setMenuOpen(false)
                    jumpToMenu()
                  }}
                >
                  <div className="relative">
                    <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search the menu…"
                      aria-label="Search the menu"
                      className="h-11 rounded-full border border-border/70 bg-card pr-4 pl-10 text-sm focus-visible:border-primary/60"
                    />
                  </div>
                </form>
                <nav className="flex flex-col gap-1 px-4 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 border-t border-border/70 p-6">
                  <Button
                    className="h-11 w-full rounded-full"
                    onClick={() => {
                      setMenuOpen(false)
                      setCartOpen(true)
                    }}
                  >
                    <ShoppingBag />
                    View bag ({count})
                  </Button>
                  <Link
                    href="/sign-in"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card text-[11px] font-bold tracking-[0.16em] text-foreground uppercase transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <User className="size-4" />
                    Sign in or create account
                  </Link>
                  <a
                    href="tel:+18003737432"
                    className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground"
                  >
                    <Phone className="size-3.5" />
                    (800) 373-7432
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
