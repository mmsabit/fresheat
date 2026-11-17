import type { ReactNode } from "react"
import { ChevronDown, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function AuthDivider({ children }: { children: ReactNode }) {
  return (
    <div className="my-7 flex items-center gap-3">
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
      <span className="text-[9px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}

export function DataPreview({ data }: { data: Record<string, unknown> }) {
  return (
    <details className="group rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[9px] font-bold tracking-[0.16em] text-muted-foreground uppercase select-none [&::-webkit-details-marker]:hidden">
        Captured form data
        <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <pre className="mt-2.5 overflow-x-auto font-mono text-[11px] leading-relaxed text-foreground/80">
        {JSON.stringify(data, null, 2)}
      </pre>
      <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
        Frontend only — nothing has been sent to a server.
      </p>
    </details>
  )
}

type SuccessPanelProps = {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: ReactNode
  children?: ReactNode
  actions?: ReactNode
  className?: string
}

export function SuccessPanel({
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
  actions,
  className,
}: SuccessPanelProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-4">
        <span className="relative flex size-14 items-center justify-center rounded-2xl bg-success/10 text-success">
          <Icon className="size-7" />
          <span
            className="absolute -top-1 -right-1 size-3 rounded-full bg-success ring-4 ring-background"
            aria-hidden="true"
          />
        </span>
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-[0.22em] text-success uppercase">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-balance text-foreground uppercase">
            {title}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      {children}
      {actions ? <div className="space-y-2.5">{actions}</div> : null}
    </div>
  )
}
