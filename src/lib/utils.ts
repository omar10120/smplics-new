import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme utilities
export const themes = {
  dark: {
    background: "bg-[#1f1e1b]",
    text: "text-white",
    card: "bg-[#2a2a2a]",
    border: "border-[#2a2a2a]",
    accent: "text-[#ee7639]",
    accentBg: "bg-[#ee7639]",
    input: "bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)]",
    cardGradient: "bg-gradient-to-b from-[#2a2a2a]/60 via-[#8B4513]/15 to-[#D2691E]/25",
  },
  light: {
    background: "bg-white",
    text: "text-gray-900",
    card: "bg-gray-50",
    border: "border-gray-200",
    accent: "text-[#ee7639]",
    accentBg: "bg-[#ee7639]",
    input: "bg-white border-gray-200",
    cardGradient: "bg-gradient-to-b from-gray-50 via-orange-50 to-orange-100",
  },
} as const

export type Theme = keyof typeof themes
