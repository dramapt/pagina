"use client"

import { motion } from "framer-motion"
import { InlineOfferCard } from "./inline-offer-card"

export function FinalCloser() {
  return (
    <section className="relative isolate overflow-hidden bg-noir py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(212,168,67,0.22), transparent 60%), radial-gradient(ellipse 50% 50% at 50% 100%, rgba(139,26,26,0.18), transparent 60%)",
        }}
      />
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-xs uppercase tracking-[0.4em] text-gold sm:text-sm"
        >
          Uma última coisa
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-balance font-cormorant text-4xl font-bold leading-[1] text-ivory sm:text-6xl"
        >
          Você já leu tudo.
          <br />
          Já sabe que vai{" "}
          <span className="italic text-gold">adorar</span>.
          <br />O que você está esperando?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-pretty font-lora text-base italic text-ivory/65 sm:text-lg"
        >
          200+ minisséries. R$7,90. Uma vez. Para sempre.
          <br />A decisão mais fácil que vais tomar hoje.
        </motion.p>

        {/* Final offer card — most prominent (with payments + skip) */}
        <div className="mt-12">
          <InlineOfferCard size="lg" showPayments showSkip />
        </div>
      </div>
    </section>
  )
}
