const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim())
}

export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "")
  return digits.length >= 7 && digits.length <= 15
}

export type PasswordStrength = {
  score: 0 | 1 | 2 | 3 | 4
  label: string
  checks: {
    length: boolean
    mixedCase: boolean
    number: boolean
    symbol: boolean
  }
}

export function getPasswordStrength(value: string): PasswordStrength {
  const checks = {
    length: value.length >= 8,
    mixedCase: /[a-z]/.test(value) && /[A-Z]/.test(value),
    number: /\d/.test(value),
    symbol: /[^A-Za-z0-9]/.test(value),
  }

  const score = Object.values(checks).filter(Boolean).length as
    | 0
    | 1
    | 2
    | 3
    | 4

  const label =
    value.length === 0
      ? "Start typing"
      : score <= 1
        ? "Weak"
        : score === 2
          ? "Fair"
          : score === 3
            ? "Good"
            : "Strong"

  return { score, label, checks }
}
