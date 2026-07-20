"use client"

import { useEffect, useState } from "react"
import { series } from "@/lib/series"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PICKED = series.filter((s) => s.new || s.hot).slice(0, 6)

export function NewThisWeek() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((v) => (v + 1) % PICKED.length)
    }, 5000)
    return () => clearInterval(i)
  }, [])

  // Show 3 cards starting at `index`, wrapping around
  const visible = [0, 1, 2].map((o) => PICKED[(index + o) % PICKED.length])

  return (
    <section className="relative bg-[#111] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-amber">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-rose-500" />
              Essa semana no DramaPT
            </p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Acabaram de chegar</h2>
          </div>
          <a
            href="#series"
            className="hidden text-sm font-semibold text-amber hover:text-foreground sm:inline"
          >
            Ver tudo →
          </a>
        </div>

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Desktop nav arrows */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => setIndex((v) => (v - 1 + PICKED.length) % PICKED.length)}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-card/95 p-2 text-foreground shadow-lg backdrop-blur-md transition hover:border-amber/60 hover:text-amber lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => setIndex((v) => (v + 1) % PICKED.length)}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-card/95 p-2 text-foreground shadow-lg backdrop-blur-md transition hover:border-amber/60 hover:text-amber lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <motion.article
                key={`${s.id}-${index}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative flex gap-4 overflow-hidden rounded-xl border border-white/8 bg-card p-3 transition hover:border-amber/40"
              >
                <div className="relative aspect-[9/16] w-24 shrink-0 overflow-hidden rounded-md sm:w-28">
                  <img src={s.cover || "/placeholder.svg"} alt={s.title} className="h-full w-full object-cover" />
                  <span className="absolute left-1.5 top-1.5 rounded-sm bg-rose-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                    Novo
                  </span>
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber">{s.genre}</p>
                  <h3 className="mt-1 line-clamp-2 font-display text-xl leading-tight tracking-wide text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-2">Disponível agora</p>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {PICKED.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-amber" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
