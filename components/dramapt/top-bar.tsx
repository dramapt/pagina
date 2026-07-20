"use client"

import { useCountdown, pad } from "@/lib/use-countdown"
import { Clock } from "lucide-react"

export function TopBar() {
  const { ready, hours, minutes, seconds, days } = useCountdown()
  const totalHours = ready ? days * 24 + hours : 0

  return (
    <div className="sticky top-0 z-50 w-full bg-amber text-background">
      {/* Mobile compact bar */}
      <div className="flex items-center justify-between gap-2 px-4 py-2 text-[13px] font-semibold sm:hidden">
        <span className="truncate">
          A partir de <span className="font-bold">R$9,90/mês</span>
        </span>
        <a
          href="#oferta-cta"
          className="shrink-0 rounded-md bg-background px-3 py-1 text-xs font-bold text-amber"
        >
          Entrar agora
        </a>
      </div>

      {/* Desktop full bar */}
      <div className="mx-auto hidden max-w-7xl items-center justify-center gap-4 px-4 py-2 text-center text-sm font-semibold sm:flex">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
          <span className="font-mono tabular-nums">
            {ready ? `${pad(totalHours)}:${pad(minutes)}:${pad(seconds)}` : "--:--:--"}
          </span>
          <span>restando</span>
        </span>
        <span className="h-3 w-px bg-background/30" />
        <span className="leading-tight">
          Planos a partir de <span className="font-bold">R$9,90/mês</span> · acesso vitalício desde R$27,90
        </span>
      </div>
    </div>
  )
}
