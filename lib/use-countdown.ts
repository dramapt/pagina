"use client"

import { useEffect, useState } from "react"

// Target: 72 hours from first visit (persisted in sessionStorage so it doesn't reset on every render)
const KEY = "dramapt_offer_deadline"

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + 72 * 60 * 60 * 1000
  const stored = window.sessionStorage.getItem(KEY)
  if (stored) return Number.parseInt(stored, 10)
  const deadline = Date.now() + 72 * 60 * 60 * 1000
  window.sessionStorage.setItem(KEY, String(deadline))
  return deadline
}

export function useCountdown() {
  const [now, setNow] = useState<number>(() => Date.now())
  const [deadline, setDeadline] = useState<number | null>(null)

  useEffect(() => {
    setDeadline(getDeadline())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const total = Math.max(0, (deadline ?? 0) - now)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((total / (1000 * 60)) % 60)
  const seconds = Math.floor((total / 1000) % 60)

  return { ready: deadline !== null, days, hours, minutes, seconds, total }
}

export function pad(n: number) {
  return n.toString().padStart(2, "0")
}
