"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { GoldConfetti } from "./gold-confetti"
import { PosterColumns } from "./poster-columns"

export function CelebrationHero() {
  return (
    <section className="grain-noir relative overflow-hidden bg-noir px-4 pb-24 pt-16 sm:px-6 sm:pt-20">
      {/* Animated series posters background */}
      <PosterColumns />

      {/* crimson light leak top-left (above posters) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,26,26,0.55) 0%, rgba(139,26,26,0) 70%)",
          zIndex: 1,
        }}
      />

      {/* Confetti above posters, below text */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 2 }}>
        <GoldConfetti count={28} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center" style={{ zIndex: 5 }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-xs uppercase tracking-[0.4em] text-gold sm:text-sm"
        >
          ✦ BEM-VINDA À FAMÍLIA DRAMAPT ✦
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="celebration-pulse mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/40 bg-[#1A4A2E]/70 px-4 py-2"
        >
          <span className="font-lora text-sm text-[#9DECBC]">
            ✅ Seu acesso vitalício está ativo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="upsell-hero-headline mt-10 font-cormorant text-[52px] font-bold leading-[0.85] text-ivory sm:text-7xl md:text-[84px]"
        >
          Parabéns.
          <br />
          <span className="italic text-gold">Agora é</span>
          <br />
          para sempre.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-8 max-w-xl font-lora text-lg italic leading-relaxed text-noir-muted sm:text-xl"
        >
          Seu acesso a 700+ minisséries de drama, romance e suspense está
          ativo. Para sempre. Sem mensalidades. Você nunca mais precisa se preocupar.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mx-auto mt-12 h-px w-48 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 font-lora text-base italic text-ivory/85 sm:text-lg"
        >
          Mas antes de você ir ver a sua primeira série...
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex justify-center"
        >
          <ChevronDown className="bounce-y h-7 w-7 text-gold" />
        </motion.div>
      </div>
    </section>
  )
}
