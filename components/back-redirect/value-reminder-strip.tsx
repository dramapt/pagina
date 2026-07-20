"use client"

import { motion } from "framer-motion"

export function ValueReminderStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
      style={{
        background: "linear-gradient(135deg, #1A1200, #2A1E00)",
        borderTop: "1px solid rgba(212,168,67,0.3)",
        borderBottom: "1px solid rgba(212,168,67,0.3)",
        padding: "28px 24px",
      }}
    >
      <p
        className="text-balance text-center leading-snug"
        style={{ fontSize: "clamp(18px, 3vw, 24px)" }}
      >
        <span className="font-cormorant italic text-ivory">700+ minisséries · </span>
        <span className="font-mono font-bold text-gold">R$7,90</span>
        <span className="font-cormorant italic text-ivory">
          {" "}· para sempre · sem mensalidades.
        </span>
      </p>
    </motion.div>
  )
}
