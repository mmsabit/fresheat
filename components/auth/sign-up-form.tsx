"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import {
  ArrowRight,
  Loader2,
  LockKeyhole,
  Mail,
  Phone,
  UserPlus,
  UserRound,
} from "lucide-react"

import { PasswordField, PasswordStrength, TextField } from "@/components/auth/field"
import { AuthDivider, DataPreview, SuccessPanel } from "@/components/auth/shared"
import { SocialAuth } from "@/components/auth/social-auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  getPasswordStrength,
  isValidEmail,
  isValidPhone,
} from "@/lib/auth-validation"
import { cn } from "@/lib/utils"

type SignUpValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  acceptedTerms: boolean
  marketing: boolean
}

type SignUpErrors = Partial<Record<keyof SignUpValues, string>>

type CapturedSignUp = {
  intent: "sign-up"
  firstName: string
  lastName: string
  email: string
  phone: string | null
  marketingOptIn: boolean
  acceptedTerms: true
  passwordStrength: string
}

const initialValues: SignUpValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
  marketing: false,
}

const fieldIds: Record<keyof SignUpValues, string> = {
  firstName: "signup-first-name",
  lastName: "signup-last-name",
  email: "signup-email",
  phone: "signup-phone",
  password: "signup-password",
  confirmPassword: "signup-confirm-password",
  acceptedTerms: "signup-terms",
  marketing: "signup-marketing",
}

function validate(values: SignUpValues): SignUpErrors {
  const errors: SignUpErrors = {}
  const email = values.email.trim()
  const phone = values.phone.trim()

  if (!values.firstName.trim()) {
    errors.firstName = "Tell us your first name."
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Tell us your last name."
  }

  if (!email) {
    errors.email = "Enter your email address."
  } else if (!isValidEmail(email)) {
    errors.email = "That email address doesn't look right."
  }

  if (phone && !isValidPhone(phone)) {
    errors.phone = "Enter a valid phone number."
  }

  if (!values.password) {
    errors.password = "Choose a password."
  } else if (values.password.length < 8) {
    errors.password = "Use at least 8 characters."
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Re-enter your password."
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Those passwords don't match."
  }

  if (!values.acceptedTerms) {
    errors.acceptedTerms = "Please accept the terms to create an account."
  }

  return errors
}

export function SignUpForm() {
  const [values, setValues] = useState<SignUpValues>(initialValues)
  const [errors, setErrors] = useState<SignUpErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [captured, setCaptured] = useState<CapturedSignUp | null>(null)

  function update<K extends keyof SignUpValues>(
    key: K,
    value: SignUpValues[K]
  ) {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) =>
      current[key] ? { ...current, [key]: undefined } : current
    )
  }

  function resetAll() {
    setValues(initialValues)
    setErrors({})
    setCaptured(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0] as
      | keyof SignUpValues
      | undefined

    if (firstError) {
      document.getElementById(fieldIds[firstError])?.focus()
      return
    }

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1100))
    setSubmitting(false)

    const phone = values.phone.trim()

    setCaptured({
      intent: "sign-up",
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      phone: phone ? phone : null,
      marketingOptIn: values.marketing,
      acceptedTerms: true,
      passwordStrength: getPasswordStrength(values.password).label,
    })
  }

  if (captured) {
    return (
      <SuccessPanel
        icon={UserPlus}
        eyebrow="Account created"
        title={`Welcome to the table, ${captured.firstName}.`}
        description={
          <>
            We captured your details for{" "}
            <span className="font-semibold text-foreground">
              {captured.email}
            </span>
            . Once accounts go live, verify your inbox and your first-order
            dessert is on us.
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
              Start exploring the menu
              <ArrowRight />
            </Link>
            <Button
              type="button"
              variant="outline"
              onClick={resetAll}
              className="h-11 w-full rounded-xl text-[11px]"
            >
              Create another account
            </Button>
            <p className="text-center text-[11px] text-muted-foreground">
              Already registered?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-foreground underline underline-offset-4"
              >
                Sign in
              </Link>
            </p>
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
          Join the table
        </p>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground uppercase sm:text-[2.15rem]">
          Create your account
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Order in seconds, track every delivery, and unlock a free dessert on
          your first order.
        </p>
      </div>

      <SocialAuth verb="sign-up" />
      <AuthDivider>or sign up with email</AuthDivider>

      <form
        noValidate
        aria-busy={submitting}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id={fieldIds.firstName}
            label="First name"
            autoComplete="given-name"
            placeholder="Alex"
            icon={UserRound}
            value={values.firstName}
            onChange={(event) => update("firstName", event.target.value)}
            error={errors.firstName}
            disabled={submitting}
          />
          <TextField
            id={fieldIds.lastName}
            label="Last name"
            autoComplete="family-name"
            placeholder="Morgan"
            value={values.lastName}
            onChange={(event) => update("lastName", event.target.value)}
            error={errors.lastName}
            disabled={submitting}
          />
        </div>

        <TextField
          id={fieldIds.email}
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

        <TextField
          id={fieldIds.phone}
          label="Phone number"
          optional
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
          icon={Phone}
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          error={errors.phone}
          hint="Only used for delivery updates."
          disabled={submitting}
        />

        <PasswordField
          id={fieldIds.password}
          label="Password"
          autoComplete="new-password"
          placeholder="Create a strong password"
          icon={LockKeyhole}
          value={values.password}
          onChange={(event) => update("password", event.target.value)}
          error={errors.password}
          hint={<PasswordStrength value={values.password} />}
          disabled={submitting}
        />

        <PasswordField
          id={fieldIds.confirmPassword}
          label="Confirm password"
          autoComplete="new-password"
          placeholder="Repeat your password"
          icon={LockKeyhole}
          value={values.confirmPassword}
          onChange={(event) => update("confirmPassword", event.target.value)}
          error={errors.confirmPassword}
          disabled={submitting}
        />

        <div className="space-y-3.5 rounded-xl border border-border/70 bg-muted/40 p-3.5">
          <div>
            <label
              htmlFor={fieldIds.acceptedTerms}
              className="flex cursor-pointer items-start gap-3"
            >
              <Checkbox
                id={fieldIds.acceptedTerms}
                name="acceptedTerms"
                checked={values.acceptedTerms}
                onCheckedChange={(checked) => update("acceptedTerms", checked)}
                aria-invalid={errors.acceptedTerms ? true : undefined}
                aria-describedby={
                  errors.acceptedTerms ? "signup-terms-error" : undefined
                }
                className="mt-0.5"
              />
              <span className="text-[12px] leading-snug text-muted-foreground">
                I agree to the{" "}
                <Link
                  href="#"
                  onClick={(event) => event.stopPropagation()}
                  className="font-semibold text-foreground underline underline-offset-4"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  onClick={(event) => event.stopPropagation()}
                  className="font-semibold text-foreground underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.acceptedTerms ? (
              <p
                id="signup-terms-error"
                role="alert"
                className="mt-1.5 text-[11px] font-semibold text-destructive"
              >
                {errors.acceptedTerms}
              </p>
            ) : null}
          </div>

          <label
            htmlFor={fieldIds.marketing}
            className="flex cursor-pointer items-start gap-3"
          >
            <Checkbox
              id={fieldIds.marketing}
              name="marketing"
              checked={values.marketing}
              onCheckedChange={(checked) => update("marketing", checked)}
              className="mt-0.5"
            />
            <span className="text-[12px] leading-snug text-muted-foreground">
              Send me{" "}
              <span className="font-semibold text-foreground">
                weekly drops
              </span>
              , secret specials, and hearth stories.
            </span>
          </label>
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="h-11 w-full rounded-xl text-[11px] tracking-[0.18em]"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" />
              Creating account…
            </>
          ) : (
            <>
              Create account
              <ArrowRight />
            </>
          )}
        </Button>

        <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
          Free delivery over $35 · No commitment · Cancel anytime
        </p>
      </form>

      <div className="rounded-2xl border border-border/70 bg-muted/40 p-4 text-center">
        <p className="text-[11px] font-semibold text-muted-foreground">
          Already have an account?
        </p>
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-2.5 h-10 w-full rounded-xl text-[11px]"
          )}
        >
          Sign in instead
          <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
