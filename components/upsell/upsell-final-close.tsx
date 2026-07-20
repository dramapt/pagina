"use client"

import { motion } from "framer-motion"
import { UpsellOfferCard } from "./upsell-offer-card"
import { PosterColumns } from "./poster-columns"

export function UpsellFinalClose() {
  return (
    <section
      className="grain-noir relative overflow-hidden px-4 py-24 sm:px-6 sm:py-[100px]"
      style={{ background: "#06060F" }}
    >
      {/* Subtle poster columns at sides — desktop only */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{ opacity: 0.5, filter: "blur(4px)", zIndex: 0 }}
      >
        <PosterColumns />
      </div>
      {/* dark overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(6,6,15,0.88)", zIndex: 1 }}
      />

      {/* gold spotlight from top */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(212,168,67,0.35) 0%, rgba(212,168,67,0) 65%)",
          zIndex: 2,
        }}
      />

      <div className="relative mx-auto max-w-3xl" style={{ zIndex: 5 }}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center font-cormorant font-bold leading-[0.85] text-ivory"
          style={{ fontSize: "clamp(52px, 8vw, 88px)" }}
        >
          Uma vez
          <br />
          <span className="italic text-gold">na vida.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 max-w-[500px] text-center font-lora italic text-noir-muted"
          style={{ fontSize: 20, lineHeight: 1.6 }}
        >
          Este preço de R$9,90 para um segundo acesso vitalício só existe nesta
          página. Agora. Quando você sair, desaparece para sempre.
        </motion.p>

        <div className="mt-14">
          <UpsellOfferCard intense />
        </div>
      </div>
    </section>
  )
}
