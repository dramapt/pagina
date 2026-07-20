"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Sparkles, X } from "lucide-react"
import { useEffect, useState } from "react"
import { series, type Genre } from "@/lib/series"

const Q1: Genre[] = ["Romance", "Thriller", "Drama", "CEO"]
const Q2 = ["5 min", "15 min", "30 min"] as const
const Q3 = ["Feliz", "Triste", "Ansiosa", "Entediada"] as const


type Mood = (typeof Q3)[number]

const moodToGenres: Record<Mood, Genre[]> = {
  Feliz: ["Romance", "CEO"],
  Triste: ["Drama", "Romance"],
  Ansiosa: ["Thriller", "Vingança"],
  Entediada: ["Vingança", "CEO"],
}

const questions = [
  { key: "genre" as const, title: "O que você prefere?", options: Q1 as readonly string[] },
  { key: "time" as const, title: "Quanto tempo você tem?", options: Q2 as readonly string[] },
  { key: "mood" as const, title: "Como você está se sentindo agora?", options: Q3 as readonly string[] },
]

export function QuizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [genre, setGenre] = useState<Genre | null>(null)
  const [, setTime] = useState<(typeof Q2)[number] | null>(null)
  const [mood, setMood] = useState<Mood | null>(null)
  const [pending, setPending] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setStep(0)
      setGenre(null)
      setTime(null)
      setMood(null)
      setPending(null)
    }
  }, [open])

  function handlePick(value: string, isLast: boolean) {
    setPending(value)
    // Persist selection
    if (step === 0) setGenre(value as Genre)
    else if (step === 1) setTime(value as (typeof Q2)[number])
    else if (step === 2) setMood(value as Mood)

    if (isLast) return // wait for the explicit "Ver série" button on the last step
    // Auto-advance after 350ms so the user sees the highlight
    setTimeout(() => {
      setPending(null)
      setStep((s) => Math.min(s + 1, 3))
    }, 350)
  }

  function pickResult() {
    let pool = series.slice()
    if (genre) pool = pool.filter((s) => s.genre === genre)
    if (mood && pool.length > 1) {
      const moodGenres = moodToGenres[mood]
      const filtered = pool.filter((s) => moodGenres.includes(s.genre))
      if (filtered.length) pool = filtered
    }
    if (!pool.length) pool = series
    return pool[Math.floor(Math.random() * pool.length)]
  }

  const result = step === 3 ? pickResult() : null
  const progressPct = step >= 3 ? 100 : ((step + 1) / 3) * 100

  function selectedFor(qStep: number): string | null {
    if (qStep === 0) return genre
    if (qStep === 1 && pending && step === 1) return pending
    if (qStep === 2) return mood
    if (step === qStep) return pending
    return null
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="quiz-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
          >
            {/* progress bar at the TOP */}
            <div className="h-[3px] w-full bg-white/10">
              <div
                className="h-full bg-amber transition-[width] duration-[400ms] ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="relative p-7">
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="absolute right-4 top-4 text-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              {step < 3 ? (
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber">
                        <Sparkles className="h-3 w-3" /> Quiz · {step + 1} de 3
                      </p>
                      <h3 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                        {questions[step].title}
                      </h3>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {questions[step].options.map((opt) => {
                          const isSelected = selectedFor(step) === opt
                          const isLast = step === 2
                          return (
                            <button
                              key={opt}
                              onClick={() => handlePick(opt, isLast)}
                              disabled={pending !== null && !isLast}
                              className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-150 ${
                                isSelected
                                  ? "scale-[1.03] border-amber bg-amber font-semibold text-background"
                                  : "border-white/10 bg-elevated font-medium text-foreground hover:border-amber/60 hover:text-foreground"
                              }`}
                            >
                              {opt}
                            </button>
                          )
                        })}
                      </div>

                      {step === 2 && (
                        <button
                          onClick={() => setStep(3)}
                          disabled={!mood}
                          className="cta-shimmer mt-7 inline-flex items-center justify-center rounded-md bg-amber px-6 py-3 text-sm font-bold text-background transition hover:bg-amber-dim disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Ver a minha série →
                        </button>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                result && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber">
                      <Sparkles className="h-3 w-3" /> A sua série é
                    </p>

                    <div className="mt-2 overflow-hidden rounded-xl border border-amber/20 bg-elevated">
                      <div className="grid grid-cols-[140px_1fr]">
                        <div className="aspect-[9/16] overflow-hidden">
                          <img
                            src={result.cover || "/placeholder.svg"}
                            alt={result.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center p-5">
                          <span className="inline-block w-fit rounded-full bg-amber/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber">
                            {result.genre}
                          </span>
                          <h3 className="mt-2 font-display text-3xl leading-tight tracking-tight text-foreground">
                            {result.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                            {result.synopsis ??
                              "Uma história que vai te prender do primeiro ao último episódio."}
                          </p>
                          <p className="mt-2 text-xs text-muted-2">
                            {result.episodes} eps · português
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#oferta"
                      onClick={onClose}
                      className="cta-shimmer mt-6 inline-flex w-full items-center justify-center rounded-md bg-amber px-6 py-3.5 text-sm font-bold text-background transition hover:bg-amber-dim"
                    >
                      Começar agora — R$9,90/mês →
                    </a>
                    <button
                      onClick={() => setStep(0)}
                      className="mt-2 block w-full text-center text-xs text-muted hover:text-foreground"
                    >
                      Ver outras sugestões

                    </button>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
