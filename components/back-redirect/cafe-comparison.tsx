"use client"

import { motion } from "framer-motion"
import { CHECKOUT_BACK_URL } from "@/lib/checkout-back"
import { ArrowRight } from "lucide-react"

export function CafeComparison() {
  return (
    <section className="relative isolate overflow-hidden bg-noir-surface py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,168,67,0.08), transparent 70%)",
        }}
      />
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
        >
          Acesso vitalício por menos de um café
        </motion.span>

        <div className="mt-10 flex items-center justify-center gap-6 sm:gap-12">
          {/* LEFT — café */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-1 flex-col items-center text-center"
          >
            <span className="text-5xl sm:text-6xl" aria-hidden>
              ☕
            </span>
            <p className="mt-4 font-cormorant text-2xl text-noir-muted sm:text-3xl">
              Um café
            </p>
            <p className="mt-1 font-mono text-xs text-noir-muted sm:text-sm">
              R$9,00 — dura 10 minutos
            </p>
          </motion.div>

          {/* VS */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-crimson-bright/40 bg-noir sm:h-14 sm:w-14"
          >
            <span className="font-display text-xl uppercase tracking-wide text-crimson-bright sm:text-2xl">
              vs
            </span>
          </motion.div>

          {/* RIGHT — DramaPT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-1 flex-col items-center text-center"
          >
            <span className="text-5xl sm:text-6xl" aria-hidden>
              🎬
            </span>
            <p className="mt-4 font-cormorant text-2xl text-gold sm:text-3xl">
              DramaPT Vitalício
            </p>
            <p className="mt-1 font-mono text-xs text-gold sm:text-sm">
              R$7,90 — dura para sempre
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-balance font-cormorant text-2xl italic leading-snug text-ivory sm:text-3xl"
        >
          Menos que um café. Uma decisão para a vida.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          href={CHECKOUT_BACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-shimmer group mt-8 inline-flex h-14 items-center gap-2 rounded-md bg-gradient-to-r from-gold via-[#e6c062] to-gold px-6 font-display text-base uppercase tracking-wide text-noir shadow-[0_18px_50px_-15px_rgba(212,168,67,0.7)] transition hover:from-gold-dim hover:to-gold-dim sm:text-lg"
        >
          Quero pagar menos que um café
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  )
}
