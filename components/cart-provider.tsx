"use client"

import Image from "next/image"
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { dishes } from "@/lib/restaurant"

type CartContextValue = {
  quantities: Record<string, number>
  count: number
  subtotal: number
  add: (id: string) => void
  decrement: (id: string) => void
  remove: (id: string) => void
  clear: () => void
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider")
  }

  return context
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [cartOpen, setCartOpen] = useState(false)

  const add = useCallback((id: string) => {
    setQuantities((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }))
  }, [])

  const decrement = useCallback((id: string) => {
    setQuantities((current) => {
      const next = { ...current }
      const quantity = (next[id] ?? 0) - 1

      if (quantity <= 0) {
        delete next[id]
      } else {
        next[id] = quantity
      }

      return next
    })
  }, [])

  const remove = useCallback((id: string) => {
    setQuantities((current) => {
      const next = { ...current }
      delete next[id]
      return next
    })
  }, [])

  const clear = useCallback(() => setQuantities({}), [])

  const { count, subtotal } = useMemo(() => {
    return Object.entries(quantities).reduce(
      (totals, [id, quantity]) => {
        const dish = dishes.find((item) => item.id === id)

        if (!dish) {
          return totals
        }

        return {
          count: totals.count + quantity,
          subtotal: totals.subtotal + dish.price * quantity,
        }
      },
      { count: 0, subtotal: 0 }
    )
  }, [quantities])

  const value = useMemo<CartContextValue>(
    () => ({
      quantities,
      count,
      subtotal,
      add,
      decrement,
      remove,
      clear,
      cartOpen,
      setCartOpen,
    }),
    [quantities, count, subtotal, add, decrement, remove, clear, cartOpen]
  )

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  )
}

function CartDrawer() {
  const {
    quantities,
    count,
    subtotal,
    add,
    decrement,
    remove,
    clear,
    cartOpen,
    setCartOpen,
  } = useCart()

  const lines = dishes
    .filter((dish) => quantities[dish.id])
    .map((dish) => ({ dish, quantity: quantities[dish.id] }))

  const delivery = subtotal === 0 || subtotal >= 35 ? 0 : 3.99
  const total = subtotal + delivery

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent
        side="right"
        className="w-full gap-0 border-l-border/70 bg-background p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border/70 px-6 py-5">
          <SheetTitle className="font-display text-xl font-bold tracking-tight text-foreground normal-case">
            Your order
          </SheetTitle>
          <SheetDescription>
            {count === 0
              ? "Your bag is empty — the hearth is still hot."
              : `${count} item${count === 1 ? "" : "s"} ready for the kitchen.`}
          </SheetDescription>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <ShoppingBag className="size-8" />
            </div>
            <div className="space-y-1">
              <p className="font-display text-lg font-bold text-foreground">
                Nothing in the bag yet
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Add a fiery favorite and we&apos;ll fire up the grill.
              </p>
            </div>
            <Button
              className="h-11 rounded-full px-6 text-xs"
              onClick={() => setCartOpen(false)}
            >
              Browse the menu
            </Button>
          </div>
        ) : (
          <div className="flex-1 divide-y divide-border/70 overflow-y-auto px-6">
            {lines.map(({ dish, quantity }) => (
              <div key={dish.id} className="flex gap-4 py-5">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-foreground">
                        {dish.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        ${dish.price.toFixed(2)} each
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${dish.name}`}
                      onClick={() => remove(dish.id)}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center rounded-full bg-secondary p-1">
                      <button
                        type="button"
                        aria-label={`Remove one ${dish.name}`}
                        onClick={() => decrement(dish.id)}
                        className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-background"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="min-w-7 text-center text-xs font-bold">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Add one ${dish.name}`}
                        onClick={() => add(dish.id)}
                        className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-background"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      ${(dish.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <SheetFooter className="gap-4 border-t border-border/70 bg-card px-6 py-5">
          <div className="space-y-2.5 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="font-semibold text-foreground">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Delivery</span>
              <span className="font-semibold text-foreground">
                {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-base font-bold text-foreground">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button
            className="h-12 w-full rounded-full text-xs"
            disabled={lines.length === 0}
          >
            Checkout — ${total.toFixed(2)}
          </Button>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Free delivery over $35
            </p>
            {lines.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                Clear bag
              </button>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
