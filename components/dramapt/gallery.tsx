"use client"

import { useMemo, useState } from "react"
import { series, type Genre } from "@/lib/series"
import { Play } from "lucide-react"
import { HoverPreview } from "./hover-preview"
import { QuizCta } from "./quiz-cta"

const filters: ("Todos" | Genre)[] = ["Todos", "Romance", "Vingança", "CEO", "Drama", "Thriller"]

export function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos")

  const filtered = useMemo(() => {
    if (active === "Todos") return series
    return series.filter((s) => s.genre === active)
  }, [active])

  return (
    <section className="relative bg-background py-24" id="series">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-display text-sm tracking-[0.3em] text-amber">CATÁLOGO</p>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              200+ séries. Sem fim à vista.
            </h2>

          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = active === f
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "chip-active border-amber bg-amber text-background"
                      : "border-white/10 bg-card text-muted hover:border-amber/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        <QuizCta />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {filtered.map((s) => (
            <HoverPreview key={s.id} s={s}>
            <a
              href="#oferta"
              aria-label={`Ver oferta — ${s.title}`}
              className="group relative block aspect-[2/3] overflow-hidden rounded-lg border border-white/5 bg-card transition hover:border-amber/40"
            >
              {/* Real cover image */}
              <img
                src={s.cover || "/placeholder.svg"}
                alt={`Capa de ${s.title}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-110"
                loading="lazy"
              />

              {/* Always-on bottom gradient + hover deepens */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                }}
              />

              {/* Top genre badge */}
              <div className="absolute left-2.5 top-2.5 flex gap-1.5">
                <span className="rounded-sm bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber backdrop-blur-sm">
                  {s.genre}
                </span>
                {s.hot && (
                  <span className="rounded-sm bg-amber px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
                    Top
                  </span>
                )}
                {s.new && (
                  <span className="rounded-sm bg-magenta px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Novo
                  </span>
                )}
              </div>

              {/* Centered Play button on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber px-3.5 py-2 text-xs font-bold text-background shadow-xl">
                  <Play className="h-3.5 w-3.5 fill-background" /> Assistir agora
                </span>
              </div>

              {/* Title pinned bottom (inside card) */}
              <div className="absolute inset-x-0 bottom-0 p-3">
                <h3 className="line-clamp-2 font-display text-base leading-tight tracking-wide text-white sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-white/60">{s.episodes} eps</p>
              </div>
            </a>
            </HoverPreview>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#oferta-cta"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber transition hover:text-foreground"
          >
            Ver todas as 200+ séries

            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
