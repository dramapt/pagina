"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { UPSELL_CHECKOUT_URL } from "@/lib/upsell"

const ROWS = [
  { icon: "🍷", offer: "Jantar para dois", price: "R$150–220", lasts: "Uma noite" },
  { icon: "💐", offer: "Bouquet de flores", price: "R$70–120", lasts: "Uma semana" },
  { icon: "🍫", offer: "Caixa de chocolates", price: "R$40–70", lasts: "Um dia" },
]

export function UpsellComparison() {
  return (
    <section className="grain-noir relative overflow-hidden bg-noir-surface px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance text-center font-cormorant text-4xl font-bold leading-[0.95] text-ivory sm:text-5xl"
        >
          R$9,90 comparado
          <br />
          <span className="italic text-gold">com outras ofertas.</span>
        </motion.h2>

        <div className="mt-12 space-y-2">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.offer}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-lg bg-[#12122B] px-4 py-4 sm:grid-cols-[auto,1.5fr,1fr,1fr] sm:px-5"
              style={{ borderLeft: "2px solid rgba(255,255,255,0.1)" }}
            >
              <span className="text-2xl" aria-hidden>
                {row.icon}
              </span>
              <span className="font-lora text-base text-ivory sm:text-[17px]">
                {row.offer}
              </span>
              <span className="hidden text-center font-mono text-sm text-noir-muted sm:block sm:text-base">
                {row.price}
              </span>
              <div className="flex flex-col items-end sm:hidden">
                <span className="font-mono text-xs text-noir-muted">{row.price}</span>
                <span className="font-lora text-[11px] italic text-[#E57373]">
                  {row.lasts}
                </span>
              </div>
              <span
                className="hidden text-right font-lora text-sm italic sm:block sm:text-base"
                style={{ color: "#E57373" }}
              >
                {row.lasts}
              </span>
            </motion.div>
          ))}

          {/* DramaPT highlighted row */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-lg px-4 py-5 sm:grid-cols-[auto,1.5fr,1fr,1fr] sm:px-5"
            style={{
              background: "linear-gradient(135deg, #1A1200, #2A1E00)",
              border: "2px solid #D4A843",
              borderLeftWidth: 4,
              boxShadow:
                "0 0 60px rgba(212,168,67,0.18), inset 0 0 30px rgba(212,168,67,0.06)",
            }}
          >
            <span className="text-3xl" aria-hidden>
              🎬
            </span>
            <span className="font-lora text-[17px] text-gold sm:text-lg">
              Acesso Vitalício DramaPT{" "}
              <span aria-hidden className="ml-1">
                🏆
              </span>
            </span>
            <span className="hidden text-center font-mono text-lg font-bold text-gold sm:block sm:text-xl">
              R$9,90
            </span>
            <div className="flex flex-col items-end sm:hidden">
              <span className="font-mono text-base font-bold text-gold">R$9,90</span>
              <span className="font-display text-[11px] uppercase tracking-[0.16em] text-gold">
                PARA SEMPRE
              </span>
            </div>
            <span className="hidden text-right font-display text-base uppercase tracking-[0.16em] text-gold sm:block sm:text-lg">
              PARA SEMPRE
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-balance text-center font-cormorant italic text-gold"
          style={{ fontSize: "clamp(22px, 4vw, 30px)", lineHeight: 1.25 }}
        >
          Nenhum presente dura para sempre.
          <br />
          Este dura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href={UPSELL_CHECKOUT_URL}
            className="inline-flex items-center justify-center rounded-lg border border-gold/50 bg-transparent px-8 py-3.5 font-display text-base uppercase tracking-[0.16em] text-gold transition hover:bg-gold/10 sm:text-[17px]"
          >
            → Garantir por R$9,90 agora
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
