"use client"

import { motion } from "framer-motion"

export function UpsellPullQuote() {
  return (
    <section className="relative bg-noir px-4 py-20 sm:py-24">
      <div className="relative mx-auto max-w-[700px]">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-2 -top-12 font-cormorant italic leading-none text-gold"
          style={{ fontSize: "120px", opacity: 0.1 }}
        >
          “
        </span>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-balance text-center font-cormorant italic leading-tight text-ivory"
          style={{ fontSize: "clamp(28px, 6vw, 36px)" }}
        >
          Nenhum presente dura para sempre.
          <br />
          <span className="text-gold">Este dura.</span>
        </motion.p>
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-2 rotate-180 font-cormorant italic leading-none text-gold"
          style={{ fontSize: "120px", opacity: 0.1 }}
        >
          “
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-10 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>
    </section>
  )
}
