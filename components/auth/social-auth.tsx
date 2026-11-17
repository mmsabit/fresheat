"use client"

import { useState } from "react"
import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.86c2.26-2.09 3.56-5.17 3.56-8.87Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 fill-current"
    >
      <path d="M16.37 12.63c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.66 3.24 2.61 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.28 3.13-2.53.99-1.46 1.39-2.87 1.42-2.94-.03-.01-2.72-1.04-2.75-4.12ZM13.79 5.5c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.14 1.14.09 2.3-.58 3.01-1.43Z" />
    </svg>
  )
}

export function SocialAuth({ verb }: { verb: string }) {
  const [provider, setProvider] = useState<string | null>(null)

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        <Button
          type="button"
          variant="outline"
          onClick={() => setProvider("Google")}
          className="h-11 gap-2.5 rounded-xl border-border bg-card text-[11px] font-bold tracking-normal normal-case"
        >
          <GoogleIcon />
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setProvider("Apple")}
          className="h-11 gap-2.5 rounded-xl border-border bg-card text-[11px] font-bold tracking-normal normal-case"
        >
          <AppleIcon />
          Apple
        </Button>
      </div>
      {provider ? (
        <p
          role="status"
          className="flex items-start gap-1.5 rounded-lg bg-muted/70 px-2.5 py-2 text-[10px] leading-relaxed text-muted-foreground"
        >
          <Info className="mt-px size-3.5 shrink-0 text-ember" />
          {provider} {verb} isn&apos;t connected in this frontend demo — use the
          form below.
        </p>
      ) : null}
    </div>
  )
}
