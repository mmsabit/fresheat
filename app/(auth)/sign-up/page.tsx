import type { Metadata } from "next"

import { SignUpForm } from "@/components/auth/sign-up-form"

export const metadata: Metadata = {
  title: "Create an account — FreshEat Kitchen",
  description:
    "Join FreshEat for faster checkout, live delivery tracking, saved favourites, and a free dessert on your first order.",
}

export default function SignUpPage() {
  return (
    <div className="mx-auto w-full max-w-lg py-2 sm:py-4">
      <SignUpForm />
    </div>
  )
}
