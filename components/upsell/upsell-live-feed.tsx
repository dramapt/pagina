"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const ITEMS = [
  "Ana R., São Paulo — presenteou a mãe há 3 minutos",
  "Margarida C., Rio de Janeiro — «Minha filha ficou em choque»",
  "Ricardo F., Belo Horizonte — comprou para a namorada",
  "Inês B., Curitiba — «Melhor R$9,90 que já gastei»",
  "Sofia M., Manaus — presenteou no aniversário da irmã",
]

export function UpsellLiveFeed() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % ITEMS.length), 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-noir px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[700px] overflow-hidden rounded-xl border border-gold/15 bg-[#12122B] px-5 py-5 sm:px-7 sm:py-6">
        <div className="flex items-center gap-2">
          <span className="red-pulse inline-block h-2 w-2 rounded-full bg-crimson-bright" />
          <span className="font-display text-[10px] uppercase tracking-[0.28em] text-crimson-bright">
            Agora mesmo
          </span>
        </div>
        <div className="mt-3 h-6 sm:h-7">
          <AnimatePresence mode="wait">
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-lora text-sm italic leading-relaxed text-ivory/85 sm:text-base"
            >
              {ITEMS[idx]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
