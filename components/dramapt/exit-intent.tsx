"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const SESSION_KEY = "dramapt_exit_intent_shown"
const TEN_MINUTES = 10 * 60

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TEN_MINUTES)
  const armed = useRef(false)

  // Arm only after 30s on page
  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem(SESSION_KEY)) return
    const t = setTimeout(() => {
      armed.current = true
    }, 30000)
    return () => clearTimeout(t)
  }, [])

  // Listen for mouseleave at the top
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (!armed.current) return
      if (open) return
      if (e.clientY > 5) return
      if (sessionStorage.getItem(SESSION_KEY)) return
      sessionStorage.setItem(SESSION_KEY, "1")
      setOpen(true)
    }
    document.addEventListener("mouseleave", handle)
    return () => document.removeEventListener("mouseleave", handle)
  }, [open])

  // Countdown when open
  useEffect(() => {
    if (!open) return
    const i = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(i)
  }, [open])

  // ESC
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const m = Math.floor(timeLeft / 60)
  const s = timeLeft % 60

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="exit-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-amber/30 bg-[#0a0a0a] p-8 text-center shadow-[0_30px_80px_-20px_rgba(245,197,24,0.4)]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-4 top-4 text-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">Espera</p>
            <h3 className="mt-2 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Você tem 10 minutos
              <br />
              para decidir.
            </h3>
            <p className="mt-3 text-sm text-muted">
              Use o código <span className="font-bold text-amber">FICA10</span> e economize 10% extra.
            </p>

            <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-xl border border-amber/30 bg-amber/5 px-6 py-4 font-mono text-3xl font-bold tabular-nums text-amber">
              {pad(m)}:{pad(s)}
            </div>

            <a
              href="#oferta-cta"
              onClick={() => setOpen(false)}
              className="cta-shimmer mt-7 inline-flex w-full items-center justify-center rounded-md bg-amber px-6 py-3.5 text-sm font-bold text-background transition hover:bg-amber-dim"
            >
              Quero o desconto →
            </a>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 text-xs text-muted hover:text-foreground"
            >
              Não, obrigada
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
