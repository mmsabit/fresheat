"use client"

import Image from "next/image"
import { Flame } from "lucide-react"


import { categories } from "@/lib/restaurant"
import { cn } from "@/lib/utils"

export function CategoryRail() {
  return (
    <section className="w-full border-y border-border/70 bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] text-ember uppercase">
              Scannable selection
            </p>
            <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Your favourite cuisines
            </h2>
          </div>
          
        </div>

        <div
          
          className="no-scrollbar flex scroll-smooth gap-3 overflow-x-auto pb-1"
        >
          {categories.map((category) => {

            return (
              <button
                key={category.label}
                type="button"
                
                
                className={cn(
                  "group flex min-w-26 shrink-0 flex-col items-center gap-2.5 rounded-2xl p-3 transition-all duration-300"
                )}
              >
                <span
                  className={cn(
                    "relative flex size-14 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105",
                  )}
                >
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <Flame className="size-6" />
                  )}
                </span>
                <span className="text-[11px] font-bold whitespace-nowrap">
                  {category.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
