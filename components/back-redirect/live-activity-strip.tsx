"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const events = [
  "Ana R., Salvador — garantiu acesso há 2 minutos",
  "Margarida C., Recife — está vendo a 3ª série hoje",
  "Ricardo F., Porto Alegre — «Não consigo parar de ver»",
  "Inês B., Brasília — garantiu com o cupom FIQUE998",
  "Sofia M., Fortaleza — «Melhor decisão que tomei»",
]

export function LiveActivityStrip() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % events.length), 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative w-full"
      style={{
        background: "#12122B",
        borderTop: "1px solid rgba(212,168,67,0.1)",
        borderBottom: "1px solid rgba(212,168,67,0.1)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row sm:px-10">
        <span className="flex shrink-0 items-center gap-2.5 font-display text-[12px] uppercase tracking-[0.2em] text-crimson-bright">
          <span className="h-2 w-2 rounded-full bg-crimson-bright red-pulse" />
          Agora mesmo:
        </span>
        <div className="relative h-5 w-full max-w-[440px] overflow-hidden text-center sm:text-right">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 truncate font-lora text-[14px] italic"
              style={{ color: "#7A7895" }}
            >
              {events[i]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
