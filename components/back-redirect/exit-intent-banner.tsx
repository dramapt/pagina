"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function ExitIntentBanner() {
  const [show, setShow] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(120)

  useEffect(() => {
    if (!show) return
    const t = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(t)
  }, [show])

  const mm = Math.floor(secondsLeft / 60)
  const ss = secondsLeft % 60

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="sticky top-0 z-50 w-full bg-crimson text-ivory shadow-[0_8px_32px_rgba(139,26,26,0.5)]"
        >
          <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div className="flex flex-1 items-center gap-3">
              <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-ivory red-pulse sm:block" />
              <p className="text-pretty text-sm font-medium leading-snug sm:text-base">
                <span className="font-bold uppercase tracking-wide">Espera —</span>{" "}
                não vai embora ainda. Tenho uma{" "}
                <span className="font-bold underline decoration-gold decoration-2 underline-offset-2">
                  última oferta
                </span>{" "}
                só para você.
              </p>
            </div>
            <div className="hidden items-center gap-2 rounded-full bg-noir/40 px-3 py-1 font-mono text-sm tabular-nums sm:flex">
              <span>Expira em</span>
              <span className="font-bold text-gold">
                {String(mm).padStart(2, "0")}:{String(ss).padStart(2, "0")}
              </span>
            </div>
            <button
              type="button"
              aria-label="Fechar aviso"
              onClick={() => setShow(false)}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ivory/80 transition hover:bg-noir/30 hover:text-ivory"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
