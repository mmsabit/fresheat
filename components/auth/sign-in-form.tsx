"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  LockKeyhole,
  LogIn,
  Mail,
  MailCheck,
} from "lucide-react"

import { PasswordField, TextField } from "@/components/auth/field"
import { AuthDivider, DataPreview, SuccessPanel } from "@/components/auth/shared"
import { SocialAuth } from "@/components/auth/social-auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { isValidEmail } from "@/lib/auth-validation"
import { cn } from "@/lib/utils"

type Mode = "sign-in" | "reset"

type SignInValues = {
  email: string
  password: string
  remember: boolean
}

type SignInErrors = Partial<Record<keyof SignInValues, string>>

type CapturedSignIn =
  | { intent: "sign-in"; email: string; remember: boolean }
  | { intent: "password-reset"; email: string }

const initialValues: SignInValues = {
  email: "",
  password: "",
  remember: true,
}

function validate(values: SignInValues, mode: Mode): SignInErrors {
  const errors: SignInErrors = {}
  const email = values.email.trim()

  if (!email) {
    errors.email = "Enter the email linked to your account."
  } else if (!isValidEmail(email)) {
    errors.email = "That email address doesn't look right."
  }

  if (mode === "sign-in") {
    if (!values.password) {
      errors.password = "Enter your password."
    } else if (values.password.length < 8) {
      errors.password = "Passwords must be at least 8 characters."
    }
  }

  return errors
}

export function SignInForm() {
  const [mode, setMode] = useState<Mode>("sign-in")
  const [values, setValues] = useState<SignInValues>(initialValues)
  const [errors, setErrors] = useState<SignInErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [captured, setCaptured] = useState<CapturedSignIn | null>(null)

  const isReset = mode === "reset"

  function update<K extends keyof SignInValues>(
    key: K,
    value: SignInValues[K]
  ) {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) =>
      current[key] ? { ...current, [key]: undefined } : current
    )
  }

  function switchMode(next: Mode) {
    setMode(next)
    setErrors({})
    setCaptured(null)
    if (next === "reset") {
      setValues((current) => ({ ...current, password: "" }))
    }
  }

  function resetAll() {
    setMode("sign-in")
    setValues(initialValues)
    setErrors({})
    setCaptured(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values, mode)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      const id = firstError === "email" ? "signin-email" : "signin-password"
      document.getElementById(id)?.focus()
      return
    }

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitting(false)

    setCaptured(
      isReset
        ? { intent: "password-reset", email: values.email.trim() }
        : {
            intent: "sign-in",
            email: values.email.trim(),
            remember: values.remember,
          }
    )
  }

  if (captured) {
    if (captured.intent === "password-reset") {
      return (
        <SuccessPanel
          icon={MailCheck}
          eyebrow="Check your inbox"
          title="Reset link on its way"
          description={
            <>
              We captured a password reset request for{" "}
              <span className="font-semibold text-foreground">
                {captured.email}
              </span>
              . Connect an email provider to deliver the real link.
            </>
          }
          actions={
            <>
              <Button
                type="button"
                size="lg"
                onClick={resetAll}
                className="h-11 w-full rounded-xl"
              >
                Back to sign in
                <ArrowRight />
              </Button>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 w-full rounded-xl text-[11px]"
                )}
              >
                Back to the restaurant
              </Link>
            </>
          }
        >
          <DataPreview data={captured} />
        </SuccessPanel>
      )
    }

    return (
      <SuccessPanel
        icon={LogIn}
        eyebrow="Signed in"
        title="Welcome back to FreshEat"
        description={
          <>
            You&apos;re signed in as{" "}
            <span className="font-semibold text-foreground">
              {captured.email}
            </span>
            {captured.remember
              ? ", and this device stays signed in for 30 days."
              : "."}{" "}
            This is a frontend demo — connect an auth provider to start a real
            session.
          </>
        }
        actions={
          <>
            <Link
              href="/#menu"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 w-full rounded-xl text-[11px]"
              )}
            >
              Browse the menu
              <ArrowRight />
            </Link>
            <Button
              type="button"
              variant="outline"
              onClick={resetAll}
              className="h-11 w-full rounded-xl text-[11px]"
            >
              Use a different account
            </Button>
          </>
        }
      >
        <DataPreview data={captured} />
      </SuccessPanel>
    )
  }

  return (
    <div className="space-y-7">
      <div className="space-y-2">
        <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
          {isReset ? "Account recovery" : "Welcome back"}
        </p>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground uppercase sm:text-[2.15rem]">
          {isReset ? (
            "Reset your password"
          ) : (
            <>
              Sign in to Fresh<span className="text-primary">Eat</span>
            </>
          )}
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {isReset
            ? "Enter the email tied to your account and we'll send a link to set a new password."
            : "Your saved addresses, order history, and favourite dishes are right where you left them."}
        </p>
      </div>

      {isReset ? null : (
        <>
          <SocialAuth verb="sign-in" />
          <AuthDivider>or continue with email</AuthDivider>
        </>
      )}

      <form
        noValidate
        aria-busy={submitting}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <TextField
          id="signin-email"
          label="Email address"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          placeholder="you@example.com"
          icon={Mail}
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          error={errors.email}
          disabled={submitting}
        />

        {isReset ? null : (
          <>
            <PasswordField
              id="signin-password"
              label="Password"
              autoComplete="current-password"
              placeholder="Enter your password"
              icon={LockKeyhole}
              value={values.password}
              onChange={(event) => update("password", event.target.value)}
              error={errors.password}
              disabled={submitting}
              action={
                <button
                  type="button"
                  onClick={() => switchMode("reset")}
                  className="text-[11px] font-semibold text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                >
                  Forgot password?
                </button>
              }
            />

            <label
              htmlFor="signin-remember"
              className="flex cursor-pointer items-start gap-3"
            >
              <Checkbox
                id="signin-remember"
                name="remember"
                checked={values.remember}
                onCheckedChange={(checked) => update("remember", checked)}
                className="mt-0.5"
              />
              <span className="text-[12px] leading-snug text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Keep me signed in
                </span>{" "}
                on this device for 30 days.
              </span>
            </label>
          </>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="h-11 w-full rounded-xl text-[11px] tracking-[0.18em]"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" />
              {isReset ? "Sending link…" : "Signing in…"}
            </>
          ) : (
            <>
              {isReset ? "Send reset link" : "Sign in"}
              {isReset ? <MailCheck /> : <ArrowRight />}
            </>
          )}
        </Button>

        {isReset ? (
          <button
            type="button"
            onClick={() => switchMode("sign-in")}
            className="mx-auto flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back to sign in
          </button>
        ) : (
          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
            By continuing you agree to our{" "}
            <Link
              href="#"
              className="font-semibold text-foreground underline underline-offset-4"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="font-semibold text-foreground underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        )}
      </form>

      {isReset ? null : (
        <div className="rounded-2xl border border-border/70 bg-muted/40 p-4 text-center">
          <p className="text-[11px] font-semibold text-muted-foreground">
            New to FreshEat?
          </p>
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-2.5 h-10 w-full rounded-xl text-[11px]"
            )}
          >
            Create an account
            <ArrowRight />
          </Link>
        </div>
      )}
    </div>
  )
}
