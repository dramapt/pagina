"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Play } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function update() {
      const h = document.documentElement
      const total = h.scrollHeight - h.clientHeight
      const ratio = total > 0 ? h.scrollTop / total : 0

      // Hide once final CTA is in view (last 12% of page)
      const finalEl = document.getElementById("final-cta")
      let finalInView = false
      if (finalEl) {
        const rect = finalEl.getBoundingClientRect()
        finalInView = rect.top < window.innerHeight * 0.6
      }

      // Show after the hero has clearly left + 60% of page reached or hero CTA off-screen
      const heroCta = document.getElementById("hero-cta")
      let heroOff = true
      if (heroCta) {
        const r = heroCta.getBoundingClientRect()
        heroOff = r.bottom < 0
      }

      setVisible(heroOff && ratio > 0.18 && !finalInView)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="fab"
          href="#oferta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-bold text-background shadow-[0_18px_50px_-10px_rgba(245,197,24,0.55)] hover:bg-amber-dim sm:bottom-6 sm:right-6"
        >
          <Play className="h-4 w-4 fill-background" />
          Começar — R$9,90/mês
        </motion.a>
      )}
    </AnimatePresence>
  )
}
