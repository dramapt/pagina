"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const events = [
  "Ana R., Manaus — garantiu acesso há 2 minutos",
  "Margarida C., São Paulo — está vendo a 3ª série hoje",
  "Ricardo F., Rio de Janeiro — «Não consigo parar de ver»",
  "Inês B., Belo Horizonte — garantiu o acesso agora mesmo",
  "Sofia M., Curitiba — presenteou a mãe no mesmo dia",
]

export function LiveSocialProof() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % events.length), 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-3xl items-center gap-3 rounded-md border border-ivory/10 bg-noir-surface px-4 py-3 sm:px-5">
      <span className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-crimson-bright sm:text-xs">
        <span className="h-2 w-2 rounded-full bg-crimson-bright red-pulse" />
        Agora mesmo
      </span>
      <div className="relative h-5 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 truncate text-left font-lora text-sm text-ivory/85 sm:text-base"
          >
            {events[i]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
