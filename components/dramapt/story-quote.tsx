"use client"

import { useEffect, useState } from "react"
import { Reveal } from "./reveal"
import { series } from "@/lib/series"
import { Play } from "lucide-react"

export function StoryQuote() {
  const next = series[3]
  const after = series[12]
  const [seconds, setSeconds] = useState(8)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s <= 1 ? 8 : s - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Stroke offset for the SVG ring (radius 36 -> circumference ~226)
  const circumference = 226
  const offset = circumference - (seconds / 8) * circumference

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-purple/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 font-display text-sm tracking-[0.3em] text-amber">
              CAPÍTULO 01
            </p>
            <blockquote className="font-display text-3xl leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="text-foreground/85">São 23h.</span>{" "}
              <span className="text-foreground/55">Disseste que ias dormir às 22h.</span>{" "}
              <span className="text-foreground">
                Mas o episódio acabou num{" "}
                <span className="italic text-amber">cliffhanger.</span>
              </span>{" "}
              <span className="text-foreground/85">
                E o próximo começa sozinho em{" "}
                <span className="italic text-amber">8 segundos.</span>
              </span>
            </blockquote>
            <p className="mt-10 font-display text-2xl tracking-wide text-amber sm:text-3xl">
              Foi feito para isto.
            </p>
          </Reveal>
        </div>

        {/* Mini phone mockup with "next episode in Xs" overlay */}
        <Reveal className="lg:col-span-5" delay={120}>
          <div className="relative mx-auto max-w-[300px]">
            <div className="phone-frame relative overflow-hidden rounded-[36px] bg-[#0a0a0a]">
              <div className="relative aspect-[9/19]">
                <img
                  src={next.cover || "/placeholder.svg"}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/40" />

                {/* Top status bar */}
                <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-5 pt-3 text-[10px] text-white/80">
                  <span className="font-mono">23:00</span>
                  <span className="font-mono">●●● ▮</span>
                </div>

                {/* Episode info */}
                <div className="absolute left-4 right-4 top-12">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-amber">
                    Episódio 23 — Final
                  </p>
                  <p className="mt-1 font-display text-xl leading-tight text-white">
                    {next.title}
                  </p>
                </div>

                {/* Center countdown */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative">
                    <svg width="92" height="92" viewBox="0 0 92 92" className="rotate-[-90deg]">
                      <circle
                        cx="46"
                        cy="46"
                        r="36"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="4"
                      />
                      <circle
                        cx="46"
                        cy="46"
                        r="36"
                        fill="none"
                        stroke="#F5C518"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: "stroke-dashoffset 1s linear" }}
                      />
                    </svg>
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="font-display text-3xl text-amber">{seconds}</span>
                    </div>
                  </div>
                </div>

                {/* Up next card */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-black/70 p-3 backdrop-blur-md">
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-amber">
                    Próximo episódio
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-12 w-9 shrink-0 overflow-hidden rounded">
                      <img
                        src={after.cover || "/placeholder.svg"}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-white">{after.title}</p>
                      <p className="text-[10px] text-white/60">{after.genre} · 24min</p>
                    </div>
                    <button
                      type="button"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber text-background"
                      aria-label="Tocar"
                    >
                      <Play className="h-3.5 w-3.5 fill-background" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-amber/15 blur-3xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
