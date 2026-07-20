"use client"

import Image from "next/image"
import { useMemo } from "react"
import { series } from "@/lib/series"

// Deterministic PRNG so server + client agree
function rand(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

interface Card {
  title: string
  cover: string
  genre: string
}

function buildColumn(seed: number, length: number): Card[] {
  const cards: Card[] = []
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(rand(seed + i * 7) * series.length)
    const s = series[idx]
    cards.push({ title: s.title, cover: s.cover, genre: s.genre })
  }
  return cards
}

const COLUMNS = [
  { duration: 30, delay: -2, seed: 11 },
  { duration: 22, delay: -8, seed: 23 },
  { duration: 35, delay: -15, seed: 41 },
  { duration: 25, delay: -5, seed: 67 },
  { duration: 28, delay: -12, seed: 83 },
]

function PosterCard({ card }: { card: Card }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-noir-card"
      style={{
        aspectRatio: "2/3",
        border: "1px solid rgba(212,168,67,0.18)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.55)",
      }}
    >
      <Image
        src={card.cover || "/placeholder.svg"}
        alt=""
        fill
        sizes="(max-width: 768px) 33vw, 20vw"
        className="object-cover"
        aria-hidden
      />
      {/* dark gradient bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
        }}
      />
      <p
        className="absolute inset-x-0 bottom-0 px-2 pb-2 font-cormorant italic leading-tight text-white/85"
        style={{ fontSize: "11px" }}
      >
        {card.title}
      </p>
    </div>
  )
}

export function PosterColumns() {
  const columns = useMemo(
    () => COLUMNS.map((c) => ({ ...c, cards: buildColumn(c.seed, 7) })),
    [],
  )

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div className="poster-cols-grid relative h-full w-full gap-3 px-2">
        {columns.map((col, idx) => (
          <div key={idx} className="poster-col-track relative h-full overflow-hidden">
            <div
              className="poster-col-anim flex flex-col gap-3"
              style={{
                animationDuration: `${col.duration}s`,
                animationDelay: `${col.delay}s`,
              }}
            >
              {/* Render twice for seamless loop */}
              {[...col.cards, ...col.cards].map((c, i) => (
                <PosterCard key={i} card={c} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Overlay layers */}
      <div className="absolute inset-0" style={{ background: "rgba(6,6,15,0.6)" }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,6,15,0) 0%, rgba(6,6,15,0.3) 35%, rgba(6,6,15,0.92) 75%, rgba(6,6,15,0.98) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,6,15,0.7), rgba(6,6,15,0))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(139,26,26,0.28) 0%, transparent 60%)",
        }}
      />
    </div>
  )
}
