import type { Metadata } from "next"

import { SignInForm } from "@/components/auth/sign-in-form"

export const metadata: Metadata = {
  title: "Sign in — FreshEat Kitchen",
  description:
    "Sign in to FreshEat to track live deliveries, save favourite dishes, and reorder your usual in one tap.",
}

export default function SignInPage() {
  return (
    <div className="mx-auto w-full max-w-md py-2 sm:py-4">
      <SignInForm />
    </div>
  )
}
