"use client"

import Image from "next/image"
import { useUpsellTimer, pad2 } from "@/lib/upsell-timer-context"

export function UpsellTopBar() {
  const { minutes, seconds, totalSeconds, expired, mounted } = useUpsellTimer()
  const urgent = totalSeconds < 180

  return (
    <nav
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-gold/10 px-4 sm:px-10"
      style={{
        height: 56,
        background: "rgba(6,6,15,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* LEFT: logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo-dramapt.png"
          alt="DramaPT"
          width={120}
          height={32}
          priority
          style={{ height: 32, width: "auto", objectFit: "contain" }}
        />
      </div>

      {/* CENTER: timer (subtle) */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex">
        <span className="font-lora text-[11px] italic text-noir-muted">
          Oferta expira em
        </span>
        <span
          className={`font-mono text-sm font-bold tabular-nums ${
            totalSeconds < 60 && !expired ? "timer-pulse" : ""
          }`}
          style={{ color: urgent || expired ? "#E74C3C" : "#D4A843" }}
        >
          {expired
            ? "EXPIRADA"
            : mounted
            ? `${pad2(minutes)}:${pad2(seconds)}`
            : "15:00"}
        </span>
      </div>

      {/* RIGHT: confirmation */}
      <div className="flex items-center gap-2">
        <span
          className="celebration-pulse h-2 w-2 rounded-full"
          style={{ background: "#2ECC71" }}
          aria-hidden
        />
        <span
          className="hidden font-lora text-[13px] italic sm:inline"
          style={{ color: "#2ECC71" }}
        >
          ✓ Compra confirmada
        </span>
      </div>
    </nav>
  )
}
