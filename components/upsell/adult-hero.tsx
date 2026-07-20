"use client"

import { motion } from "framer-motion"

export function AdultHero() {
  return (
    <section className="grain-noir relative overflow-hidden px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,26,26,0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "rgba(139,26,26,0.15)", border: "1px solid rgba(220,38,38,0.4)" }}
        >
          <span className="text-3xl" aria-hidden>
            🔞
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-xs uppercase tracking-[0.32em]"
          style={{ color: "#DC2626" }}
        >
          ✦ Só aparece uma vez · exclusivo pós-compra ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-balance font-cormorant font-bold leading-[0.9] text-ivory"
          style={{ fontSize: "clamp(40px, 7vw, 68px)" }}
        >
          Sua compra foi confirmada.
          <br />
          Antes de continuar —{" "}
          <span className="italic" style={{ color: "#DC2626" }}>
            desbloqueie as cenas sem censura.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-lg font-lora italic leading-relaxed text-noir-muted"
          style={{ fontSize: 17 }}
        >
          As versões que você já viu foram cortadas. Existe uma versão completa
          de cada história — sem cortes, sem censura — e ela só é liberada
          aqui, agora.
        </motion.p>
      </div>
    </section>
  )
}
