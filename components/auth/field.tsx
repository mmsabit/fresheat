"use client"

import { useState, type ComponentProps, type ReactNode } from "react"
import {
  AlertCircle,
  Check,
  Eye,
  EyeOff,
  type LucideIcon,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { getPasswordStrength } from "@/lib/auth-validation"
import { cn } from "@/lib/utils"

type FieldMeta = {
  label: string
  hint?: ReactNode
  error?: string
  optional?: boolean
  action?: ReactNode
}

type FieldFrameProps = FieldMeta & {
  id: string
  className?: string
  children: ReactNode
}

function FieldFrame({
  id,
  label,
  hint,
  error,
  optional,
  action,
  className,
  children,
}: FieldFrameProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor={id}
          className="text-[10px] font-bold tracking-[0.16em] text-muted-foreground uppercase"
        >
          {label}
          {optional ? (
            <span className="ml-1.5 font-semibold tracking-normal text-muted-foreground/60 normal-case">
              (optional)
            </span>
          ) : null}
        </label>
        {action}
      </div>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-start gap-1.5 text-[11px] font-semibold text-destructive"
        >
          <AlertCircle className="mt-px size-3.5 shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <div
          id={`${id}-hint`}
          className="text-[11px] leading-relaxed text-muted-foreground"
        >
          {hint}
        </div>
      ) : null}
    </div>
  )
}

export type TextFieldProps = Omit<ComponentProps<"input">, "id"> &
  FieldMeta & {
    id: string
    icon?: LucideIcon
    trailing?: ReactNode
  }

export function TextField({
  id,
  label,
  hint,
  error,
  optional,
  action,
  icon: Icon,
  trailing,
  className,
  ...props
}: TextFieldProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined

  return (
    <FieldFrame
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      action={action}
    >
      <div className="relative">
        {Icon ? (
          <Icon
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
        ) : null}
        <Input
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "h-11 rounded-xl border border-border border-b-border bg-card px-3.5 text-sm shadow-sm transition-all placeholder:text-muted-foreground/70 focus-visible:border-primary/60 focus-visible:border-b-primary/60 focus-visible:ring-2 focus-visible:ring-primary/15 aria-invalid:border-destructive/60 aria-invalid:border-b-destructive/60",
            Icon ? "pl-10" : null,
            trailing ? "pr-11" : null,
            className
          )}
          {...props}
        />
        {trailing ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-1.5">
            {trailing}
          </div>
        ) : null}
      </div>
    </FieldFrame>
  )
}

export function PasswordField({
  id,
  ...props
}: Omit<TextFieldProps, "type" | "trailing">) {
  const [visible, setVisible] = useState(false)

  return (
    <TextField
      id={id}
      type={visible ? "text" : "password"}
      trailing={
        <button
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
          className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none"
        >
          {visible ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </button>
      }
      {...props}
    />
  )
}

const segmentTones = [
  "bg-border",
  "bg-destructive",
  "bg-ember",
  "bg-rating",
  "bg-success",
] as const

const labelTones = [
  "text-muted-foreground",
  "text-destructive",
  "text-ember",
  "text-rating",
  "text-success",
] as const

export function PasswordStrength({ value }: { value: string }) {
  const { score, label, checks } = getPasswordStrength(value)

  return (
    <div className="space-y-2 pt-0.5">
      <div className="flex items-center gap-2.5">
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {[1, 2, 3, 4].map((step) => (
            <span
              key={step}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                score >= step ? segmentTones[score] : "bg-border"
              )}
            />
          ))}
        </div>
        <span
          aria-live="polite"
          className={cn(
            "min-w-16 text-right text-[10px] font-bold tracking-[0.12em] uppercase",
            labelTones[score]
          )}
        >
          {label}
        </span>
      </div>
      {value.length > 0 ? (
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {[
            { key: "length", label: "8+ characters", met: checks.length },
            { key: "mixedCase", label: "Upper & lower", met: checks.mixedCase },
            { key: "number", label: "A number", met: checks.number },
            { key: "symbol", label: "A symbol", met: checks.symbol },
          ].map((check) => (
            <span
              key={check.key}
              className={cn(
                "flex items-center gap-1 text-[10px] font-medium transition-colors",
                check.met ? "text-success" : "text-muted-foreground/70"
              )}
            >
              <Check
                className={cn(
                  "size-3",
                  check.met ? "opacity-100" : "opacity-30"
                )}
              />
              {check.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
