"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Play, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { series, getSynopsis, getRating, type Series } from "@/lib/series"

function StarRow({ value }: { value: number }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className="flex items-center gap-0.5 text-amber">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && half)
        return (
          <Star
            key={i}
            className={`h-3 w-3 ${filled ? "fill-amber" : "fill-transparent"}`}
            strokeWidth={1.5}
          />
        )
      })}
      <span className="ml-1 text-[11px] font-semibold tabular-nums text-foreground">
        {value.toFixed(1)}
      </span>
    </div>
  )
}

function PreviewLoop({ s }: { s: Series }) {
  // Simulated 5s preview: 3 covers from same genre cycling
  const [i, setI] = useState(0)
  const pool = series.filter((x) => x.genre === s.genre).slice(0, 4)
  const items = pool.length >= 2 ? pool : series.slice(0, 4)

  // cycle every ~1.6s while visible
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 1600)
    return () => clearInterval(t)
  }, [items.length])

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
      <AnimatePresence>
        <motion.img
          key={items[i].id}
          src={items[i].cover}
          alt=""
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      <div className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-sm bg-rose-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Preview
      </div>
    </div>
  )
}

export function HoverPreview({
  s,
  children,
}: {
  s: Series
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  // detect coarse pointer (mobile/tablet) to disable
  const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches

  function onEnter() {
    if (isTouch) return
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpen(true), 800)
  }
  function onLeave() {
    if (timer.current) clearTimeout(timer.current)
    setOpen(false)
  }

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 hidden w-72 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0f0f0f]/98 p-3 shadow-2xl backdrop-blur-md md:block"
          >
            <PreviewLoop s={s} />
            <div className="mt-3">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-sm bg-amber/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber">
                  {s.genre}
                </span>
                <StarRow value={getRating(s)} />
              </div>
              <h4 className="mt-2 line-clamp-2 font-display text-lg leading-tight tracking-wide text-foreground">
                {s.title}
              </h4>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                {getSynopsis(s)}
              </p>
                <a
                href="#oferta"
                className="pointer-events-auto mt-3 inline-flex items-center gap-1.5 rounded-md bg-amber px-3 py-1.5 text-xs font-bold text-background transition hover:bg-amber-dim"
              >
                <Play className="h-3 w-3 fill-background" /> Assistir agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
