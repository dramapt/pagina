"use client"

import { Heart, Play, Pause, Volume2 } from "lucide-react"
import { series } from "@/lib/series"

export function PhoneMockup() {
  // Use the first hot series as the playing one
  const featured = series.find((s) => s.hot) ?? series[0]
  const upNext = series.filter((s) => s.id !== featured.id).slice(0, 3)

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full bg-amber/15 blur-3xl"
      />

      <div className="phone-frame float-phone overflow-hidden rounded-[28px] bg-[#0a0a0a]">
        {/* Notch */}
        <div className="relative h-6 bg-[#0a0a0a]">
          <div className="absolute left-1/2 top-1.5 h-3 w-20 -translate-x-1/2 rounded-full bg-black" />
        </div>

        {/* Screen */}
        <div className="relative aspect-[9/19] w-full overflow-hidden bg-background">
          {/* Vertical video poster */}
          <img
            src={featured.cover || "/placeholder.svg"}
            alt={`Capa de ${featured.title}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

          {/* Top status row */}
          <div className="absolute left-0 right-0 top-2 flex items-center justify-between px-4 text-[10px] font-semibold text-white/90">
            <span className="font-mono">9:41</span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber pulse-amber" />
              <span>AO VIVO</span>
            </span>
          </div>

          {/* Center play button */}
          <button
            aria-label="Reproduzir"
            className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-amber/95 text-background shadow-xl transition hover:scale-105"
          >
            <Play className="h-6 w-6 fill-background" />
          </button>

          {/* Side actions */}
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-4 text-white">
            <div className="flex flex-col items-center gap-0.5">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur">
                <Heart className="h-4 w-4 fill-amber text-amber" />
              </div>
              <span className="text-[10px] font-semibold">12,4K</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur">
                <Volume2 className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Bottom title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 pr-14">
            <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-amber px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-background">
              {featured.genre}
            </div>
            <h3 className="font-display text-xl leading-none tracking-wide text-white">
              {featured.title}
            </h3>
            <p className="mt-1 text-[11px] text-white/80">
              Episódio 7 · {featured.episodes} episódios
            </p>

            {/* Progress bar */}
            <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[42%] bg-amber" />
            </div>
            <div className="mt-1 flex justify-between font-mono text-[9px] text-white/60">
              <span>1:14</span>
              <span>3:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Up next mini cards stacked behind */}
      <div className="pointer-events-none absolute -right-12 -bottom-2 hidden flex-col gap-2 lg:flex">
        {upNext.map((s, i) => (
          <div
            key={s.id}
            className="w-24 -rotate-6 overflow-hidden rounded-md border border-white/10 shadow-xl"
            style={{ transform: `translateY(${i * -6}px) rotate(${6 + i * 2}deg)` }}
          >
            <img
              src={s.cover || "/placeholder.svg"}
              alt=""
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
