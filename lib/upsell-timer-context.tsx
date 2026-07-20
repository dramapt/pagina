"use client"

import { createContext, useContext, useEffect, useState } from "react"

const KEY = "dramapt_upsell_deadline_v1"
const DURATION_MS = 15 * 60 * 1000

type Ctx = {
  totalSeconds: number
  minutes: number
  seconds: number
  expired: boolean
  mounted: boolean
}

const TimerContext = createContext<Ctx>({
  totalSeconds: 15 * 60,
  minutes: 15,
  seconds: 0,
  expired: false,
  mounted: false,
})

function getOrCreateDeadline(): number {
  if (typeof window === "undefined") return Date.now() + DURATION_MS
  const stored = window.sessionStorage.getItem(KEY)
  if (stored) {
    const ts = Number.parseInt(stored, 10)
    if (!Number.isNaN(ts) && ts > Date.now() - DURATION_MS) return ts
  }
  const ts = Date.now() + DURATION_MS
  window.sessionStorage.setItem(KEY, ts.toString())
  return ts
}

export function UpsellTimerProvider({ children }: { children: React.ReactNode }) {
  const [deadline, setDeadline] = useState<number | null>(null)
  const [now, setNow] = useState<number>(() => Date.now())

  useEffect(() => {
    setDeadline(getOrCreateDeadline())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const remaining = deadline ? Math.max(0, deadline - now) : DURATION_MS
  const totalSeconds = Math.floor(remaining / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const expired = deadline !== null && remaining <= 0

  return (
    <TimerContext.Provider
      value={{ totalSeconds, minutes, seconds, expired, mounted: deadline !== null }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export function useUpsellTimer() {
  return useContext(TimerContext)
}

export function pad2(n: number) {
  return n.toString().padStart(2, "0")
}
