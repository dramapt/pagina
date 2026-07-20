"use client"

import { useEffect, useState } from "react"

// Shared countdown ending at a fixed time per session.
// Persisted in sessionStorage so multiple timers stay perfectly in sync.

const KEY_PREFIX = "dramapt_back_redirect_deadline_v2_"
const DEFAULT_SECONDS = 15 * 60

function getOrCreateDeadline(durationSeconds: number): number {
  const durationMs = durationSeconds * 1000
  const key = `${KEY_PREFIX}${durationSeconds}`
  if (typeof window === "undefined") return Date.now() + durationMs
  const stored = window.sessionStorage.getItem(key)
  if (stored) {
    const ts = Number.parseInt(stored, 10)
    if (!Number.isNaN(ts) && ts > Date.now() - durationMs) {
      return ts
    }
  }
  const ts = Date.now() + durationMs
  window.sessionStorage.setItem(key, ts.toString())
  return ts
}

export function useSharedCountdown(durationSeconds: number = DEFAULT_SECONDS) {
  const [deadline, setDeadline] = useState<number | null>(null)
  const [now, setNow] = useState<number>(() => Date.now())

  useEffect(() => {
    setDeadline(getOrCreateDeadline(durationSeconds))
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [durationSeconds])

  const remaining = deadline ? Math.max(0, deadline - now) : durationSeconds * 1000
  const totalSeconds = Math.floor(remaining / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const expired = deadline !== null && remaining <= 0

  return {
    hours,
    minutes,
    seconds,
    totalSeconds,
    expired,
    mounted: deadline !== null,
  }
}

export function pad2(n: number) {
  return n.toString().padStart(2, "0")
}
