"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { PartyPopper, ShoppingCart, Timer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { flashDealImage } from "@/lib/restaurant"

const DEAL_SECONDS = 2 * 86400 + 8 * 3600 + 45 * 60 + 19

function unitParts(totalSeconds: number) {
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export function FlashDeal() {
  const [secondsLeft, setSecondsLeft] = useState(DEAL_SECONDS)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0))
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const { days, hours, minutes, seconds } = unitParts(secondsLeft)
  const units = [
    { label: "Days", value: days },
    { label: "Hrs", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-charcoal py-16 text-cream sm:py-20">
      <div
        className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-ember/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="relative mx-auto flex justify-center lg:col-span-5">
            <div className="relative aspect-square w-72 overflow-hidden rounded-[2rem] bg-gradient-to-tr from-primary via-ember to-[#ffd7c2] p-1 shadow-2xl sm:w-80">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
                <Image
                  src={flashDealImage}
                  alt="Crispy fried chicken burger with melted cheddar and chilli sauce"
                  fill
                  sizes="(min-width: 640px) 320px, 288px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute -top-5 -right-1 flex size-24 rotate-12 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl sm:-top-7 sm:right-4">
              <span className="font-display text-xl leading-none font-extrabold">
                30%
              </span>
              <span className="mt-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                Off
              </span>
            </div>

            <div className="absolute -bottom-5 -left-1 flex items-center gap-2 rounded-2xl border border-cream/10 bg-charcoal/80 px-3.5 py-2.5 shadow-lg backdrop-blur sm:left-2">
              <Timer className="size-4 text-ember" />
              <span className="text-[11px] font-semibold text-cream/70">
                Ends in{" "}
                <span className="font-bold text-cream">
                  {days}d {hours}h {minutes}m
                </span>
              </span>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-primary uppercase ring-1 ring-primary/20">
                <PartyPopper className="size-3.5" />
                Special flash promotion
              </span>
              <h2 className="font-display text-3xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
                Get 30% discount on every item
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-cream/60 sm:text-base">
                Order any signature deep pizza, golden fried chicken bucket, or
                craft pasta. Apply code{" "}
                <span className="font-bold text-ember">FRESH30</span> at checkout
                before the countdown hits zero.
              </p>
            </div>

            <div className="flex items-center gap-2 py-1 sm:gap-3">
              {units.map((unit, index) => (
                <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex size-16 flex-col items-center justify-center rounded-2xl border border-cream/10 bg-cream/5 shadow-inner backdrop-blur-sm sm:size-20">
                    <span className="font-display text-2xl font-extrabold tabular-nums sm:text-3xl">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                    <span className="mt-0.5 text-[9px] font-bold tracking-[0.16em] text-cream/45 uppercase">
                      {unit.label}
                    </span>
                  </div>
                  {index < units.length - 1 && (
                    <span className="font-display text-lg font-bold text-primary">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button
                render={<a href="#menu" />}
                nativeButton={false}
                className="h-12 gap-2 rounded-full px-7 text-[11px] shadow-xl shadow-primary/25"
              >
                Claim discount now
                <ShoppingCart className="size-4" />
              </Button>
              <span className="text-[11px] text-cream/40">
                *Applies automatically to delivery and pick-up orders over $25.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
