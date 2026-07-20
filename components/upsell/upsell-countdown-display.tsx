"use client"

import { useUpsellTimer, pad2 } from "@/lib/upsell-timer-context"

export function UpsellCountdownDisplay() {
  const { minutes, seconds, totalSeconds, expired, mounted } = useUpsellTimer()
  const urgent = totalSeconds < 180
  const critical = totalSeconds < 60

  return (
    <div className="text-center">
      <p className="font-display text-[10px] uppercase tracking-[0.28em] text-noir-muted sm:text-xs">
        Esta oferta expira em
      </p>
      <p
        className={`mt-3 font-mono font-bold leading-none tracking-tight transition-colors ${
          critical ? "timer-pulse" : ""
        }`}
        style={{
          fontSize: "clamp(36px, 8vw, 48px)",
          color: expired ? "#E74C3C" : urgent ? "#E74C3C" : "#D4A843",
          textShadow: urgent
            ? "0 0 30px rgba(231,76,60,0.5)"
            : "0 0 30px rgba(212,168,67,0.4)",
        }}
      >
        {expired
          ? "OFERTA EXPIRADA"
          : mounted
          ? `${pad2(minutes)}:${pad2(seconds)}`
          : "15:00"}
      </p>
    </div>
  )
}
