"use client"

import { Star } from "lucide-react"

const mediaLogos = ["G1", "UOL", "Folha", "Terra", "R7", "IG", "Metrópoles"]

export function SocialProofStrip() {
  return (
    <section className="border-y border-white/5 bg-surface/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row md:gap-6">
        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber text-amber" />
            ))}
          </div>
          <p className="text-sm text-foreground">
            <span className="font-bold">4,8 de 5</span>{" "}
            <span className="text-muted">·</span>{" "}
            <span className="font-bold">14.203</span>{" "}
            <span className="text-muted">usuárias</span>
          </p>
        </div>

        {/* "Visto em" + logos */}
        <div className="flex w-full min-w-0 flex-col items-center gap-2 md:w-auto md:flex-row md:gap-3">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted md:text-xs">
            Visto em
          </span>

          {/* Mobile: marquee animado contínuo (sem scroll manual nem corte) */}
          <div className="relative w-full overflow-hidden md:hidden">
            {/* fades laterais para suavizar entrada/saída */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-surface to-transparent" />
            <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-x-7">
              {[...mediaLogos, ...mediaLogos].map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="shrink-0 font-display text-sm uppercase tracking-wide text-foreground/75"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop: estático em wrap */}
          <div className="hidden h-3 w-px shrink-0 bg-white/10 md:block" />
          <ul className="hidden flex-wrap items-center gap-x-5 gap-y-2 md:flex">
            {mediaLogos.map((logo) => (
              <li
                key={logo}
                className="font-display text-base uppercase tracking-wide text-foreground/75 transition hover:text-foreground"
              >
                {logo}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
