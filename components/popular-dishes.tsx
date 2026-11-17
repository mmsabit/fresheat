"use client"

import Image from "next/image"
import { useState } from "react"
import {
  ArrowRight,
  Clock3,
  Flame,
  Heart,
  Minus,
  Plus,
  Search,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import { useMenuFilter } from "@/components/menu-filter"
import { dishCategories, dishes, type Dish } from "@/lib/restaurant"
import { cn } from "@/lib/utils"

const tagStyles: Record<NonNullable<Dish["tag"]>["tone"], string> = {
  discount: "bg-destructive text-white",
  hot: "bg-primary text-primary-foreground",
  fresh: "bg-ember text-charcoal",
  bestseller: "bg-ember text-charcoal",
  healthy: "bg-success text-charcoal",
}

export function PopularDishes() {
  const { filter, setFilter, query, setQuery } = useMenuFilter()
  const { quantities, add, decrement } = useCart()
  const [favorites, setFavorites] = useState<string[]>([])

  const normalizedQuery = query.trim().toLowerCase()

  const visibleDishes = dishes.filter((dish) => {
    const matchesCategory = filter === "all" || dish.category === filter
    const matchesQuery =
      normalizedQuery.length === 0 ||
      dish.name.toLowerCase().includes(normalizedQuery) ||
      dish.description.toLowerCase().includes(normalizedQuery) ||
      dish.category.includes(normalizedQuery)

    return matchesCategory && matchesQuery
  })

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favorite) => favorite !== id)
        : [...current, id]
    )
  }

  return (
    <section id="menu" className="scroll-mt-28 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
              Best food · Fresh picks
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Popular food items
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Selected top-rated favorites ordered by thousands of customers
              daily.
            </p>
          </div>

          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto rounded-full bg-muted p-1.5">
            {dishCategories.map((category) => {
              const active = filter === category.value

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setFilter(category.value)}
                  aria-pressed={active}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-1.5 text-[11px] font-bold whitespace-nowrap transition-all",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        {normalizedQuery && (
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>
              {visibleDishes.length} result
              {visibleDishes.length === 1 ? "" : "s"} for
            </span>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
              &ldquo;{query}&rdquo;
            </span>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Clear search
            </button>
          </div>
        )}

        {visibleDishes.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border bg-muted/40 px-6 py-16 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-card text-muted-foreground shadow-sm">
              <Search className="size-6" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-foreground">
                No dishes found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a different search or browse the full seasonal menu.
              </p>
            </div>
            <Button
              onClick={() => {
                setQuery("")
                setFilter("all")
              }}
              className="h-10 rounded-full px-5 text-[10px]"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDishes.map((dish) => {
            const quantity = quantities[dish.id] ?? 0
            const favorite = favorites.includes(dish.id)

            return (
              <Card
                key={dish.id}
                className="group/card flex flex-col gap-0 overflow-hidden rounded-3xl border-0 py-0 shadow-md ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />

                  {dish.tag && (
                    <span
                      className={cn(
                        "absolute top-3 left-3 rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] uppercase shadow-sm backdrop-blur",
                        tagStyles[dish.tag.tone]
                      )}
                    >
                      {dish.tag.label}
                    </span>
                  )}

                  <button
                    type="button"
                    aria-label={
                      favorite
                        ? `Remove ${dish.name} from favorites`
                        : `Save ${dish.name} to favorites`
                    }
                    aria-pressed={favorite}
                    onClick={() => toggleFavorite(dish.id)}
                    className={cn(
                      "absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-full bg-card/85 shadow-sm backdrop-blur transition-colors",
                      favorite
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    <Heart
                      className={cn("size-4", favorite && "fill-current")}
                    />
                  </button>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span className="flex items-center gap-1 rounded-full bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm backdrop-blur">
                      <Star className="size-3 fill-rating text-rating" />
                      {dish.rating.toFixed(1)} ({dish.reviews})
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-ember shadow-sm backdrop-blur">
                      <Clock3 className="size-3" />
                      {dish.deliveryTime}
                    </span>
                  </div>
                </div>

                <CardContent className="flex flex-1 flex-col justify-between gap-4 px-5 pt-4 pb-5">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg leading-snug font-bold text-foreground transition-colors group-hover/card:text-primary">
                        {dish.name}
                      </h3>
                      <span className="font-display shrink-0 text-lg font-bold text-primary">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                      {dish.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-3.5">
                    <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                      <Flame className="size-3.5 shrink-0 text-ember" />
                      <span className="truncate">{dish.note}</span>
                    </span>

                    {quantity > 0 ? (
                      <div className="inline-flex shrink-0 items-center rounded-full bg-charcoal p-1 text-cream shadow-sm">
                        <button
                          type="button"
                          aria-label={`Remove one ${dish.name}`}
                          onClick={() => decrement(dish.id)}
                          className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-cream/10"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="min-w-6 text-center text-xs font-bold">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Add one ${dish.name}`}
                          onClick={() => add(dish.id)}
                          className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-cream/10"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => add(dish.id)}
                        className="h-9 shrink-0 gap-1 rounded-full px-4 text-[10px] shadow-sm shadow-primary/20"
                      >
                        <Plus className="size-3.5" />
                        Add
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            render={<a href="#menu" />}
            nativeButton={false}
            className="h-12 gap-2 rounded-full bg-charcoal px-7 text-[11px] text-cream hover:bg-primary"
          >
            View full seasonal menu
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
