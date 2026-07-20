"use client"

import { motion } from "framer-motion"

export function EmotionalPullQuote() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ background: "#06060F", padding: "60px 24px" }}
    >
      <div className="grain-noir absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[700px] text-center">
        {/* Decorative gold quote mark */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none font-cormorant leading-none"
          style={{
            fontSize: 140,
            color: "rgba(212,168,67,0.08)",
            transform: "translateX(-50%) translateY(-12%)",
          }}
        >
          &ldquo;
        </span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative font-cormorant italic leading-[1.3] text-ivory"
          style={{ fontSize: "clamp(24px, 5vw, 38px)" }}
        >
          São 23h. Você disse que ia dormir às 22h.
          <br />
          Mas a série acabou num cliffhanger.
          <br />
          E o próximo episódio começa em 3 segundos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 font-lora italic text-gold"
          style={{ fontSize: 18, lineHeight: 1.5 }}
        >
          Você já sabe que vai adorar.
          <br />
          Por isso ainda está aqui.
        </motion.p>

        <div
          className="mx-auto mt-10 h-px max-w-[400px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)",
          }}
        />
      </div>
    </section>
  )
}
