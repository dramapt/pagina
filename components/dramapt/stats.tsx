"use client"

import { useEffect, useRef, useState } from "react"
import { Reveal } from "./reveal"

type Stat = {
  label: string
  numeric: number
  suffix?: string
  decimals?: number
  duration: number
  caption: string
}

const stats: Stat[] = [
  { numeric: 14203, duration: 2000, label: "Brasileiras viciadas", caption: "e contando" },
  { numeric: 200, suffix: "+", duration: 1500, label: "Séries disponíveis", caption: "novas todas as semanas" },
  // 4.8 stored as 48 then divided by 10 to keep integer math precise
  { numeric: 48, decimals: 1, duration: 1500, label: "Avaliação média", caption: "de 5 estrelas" },
  { numeric: 3, suffix: " min", duration: 800, label: "Para ficar presa", caption: "tempo médio do primeiro vício" },
]

function formatValue(stat: Stat, current: number) {
  if (stat.decimals) {
    return (current / 10).toFixed(stat.decimals).replace(".", ",")
  }
  return Math.floor(current).toLocaleString("pt-BR")
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4)
}

function animateCount(
  target: number,
  duration: number,
  setter: (n: number) => void,
) {
  const start = performance.now()
  const tick = (t: number) => {
    const p = Math.min(1, (t - start) / duration)
    const eased = easeOutQuart(p)
    setter(target * eased)
    if (p < 1) requestAnimationFrame(tick)
    else setter(target)
  }
  requestAnimationFrame(tick)
}

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const hasAnimated = useRef(false)
  const [values, setValues] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            stats.forEach((s, i) => {
              animateCount(s.numeric, s.duration, (n) => {
                setValues((prev) => {
                  const next = [...prev]
                  next[i] = n
                  return next
                })
              })
            })
          }
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/5 bg-[#111111] py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(245,197,24,0.08), transparent 40%), radial-gradient(circle at 90% 100%, rgba(192,38,211,0.08), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-amber">EM NÚMEROS</p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Não somos pequenos. Apenas escondidos.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="relative flex flex-col items-start border-l-2 border-amber/30 pl-6"
            >
              <div className="font-display text-6xl leading-none tracking-tight text-amber sm:text-7xl">
                <span className="tabular-nums">{formatValue(s, values[i])}</span>
                {s.suffix ? <span>{s.suffix}</span> : null}
              </div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-muted">{s.caption}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
