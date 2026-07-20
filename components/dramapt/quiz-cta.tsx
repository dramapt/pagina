"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { QuizModal } from "./quiz-modal"

export function QuizCta() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl border border-amber/20 bg-gradient-to-r from-amber/8 via-card to-card p-5 sm:p-6">
        <div>
          <p className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber">
            <Sparkles className="h-3 w-3" /> Quiz · 30s
          </p>
          <h3 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
            Não sabe por onde começar?
          </h3>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="shrink-0 rounded-md bg-amber px-4 py-2.5 text-xs font-bold text-background transition hover:bg-amber-dim sm:px-5 sm:text-sm"
        >
          Descubra sua série →
        </button>
      </div>
      <QuizModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
