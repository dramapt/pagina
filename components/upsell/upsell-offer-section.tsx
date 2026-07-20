"use client"

import { motion } from "framer-motion"
import { UpsellOfferCard } from "./upsell-offer-card"
import { UpsellCountdownDisplay } from "./upsell-countdown-display"

const SCENARIOS = [
  {
    icon: "👩\u200D👧",
    banner: "linear-gradient(160deg, #4A1040 0%, #8B2252 50%, #C4637A 100%)",
    title: "Para a sua mãe",
    body: "Ela vai te ligar para agradecer todas as semanas. Garantido.",
    tag: "A SÉRIE FAVORITA DELA ESTÁ LÁ DENTRO",
  },
  {
    icon: "👭",
    banner: "linear-gradient(160deg, #1A0A2E 0%, #3D1466 50%, #6B21A8 100%)",
    title: "Para a sua melhor amiga",
    body: "Assistam juntas e falem sobre as séries. O melhor programa de sempre.",
    tag: "HORAS DE DRAMA COMPARTILHADAS",
  },
  {
    icon: "👩\u200D👧\u200D👦",
    banner: "linear-gradient(160deg, #051A10 0%, #0A3D20 50%, #1A7840 100%)",
    title: "Para a sua filha",
    body: "Um presente que dura para sempre. Séries novas incluídas.",
    tag: "O PRESENTE QUE NUNCA ACABA",
  },
]

export function UpsellOfferSection() {
  return (
    <section
      id="oferta"
      className="grain-noir relative overflow-hidden px-4 py-24 sm:px-6 sm:py-[100px]"
      style={{
        background:
          "linear-gradient(180deg, #06060F 0%, #0D0D1C 50%, #06060F 100%)",
      }}
    >
      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-[12px] uppercase tracking-[0.32em]"
          style={{ color: "#8B1A1A" }}
        >
          ✦ Oferta exclusiva · só aparece uma vez ✦
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-balance text-center font-cormorant font-bold leading-[0.88] text-ivory"
          style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
        >
          E se você oferecesse
          <br />
          <span className="italic text-gold">isso a alguém</span>
          <br />
          que ama?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-[560px] text-center font-lora italic leading-relaxed text-noir-muted"
          style={{ fontSize: 18 }}
        >
          Sua mãe. Sua filha. Sua melhor amiga. Imagine a cara dela quando
          receber acesso vitalício a 700+ séries — oferecido por você.
        </motion.p>

        {/* Scenario cards */}
        <div className="mx-auto mt-14 grid max-w-[900px] gap-5 sm:grid-cols-3">
          {SCENARIOS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-noir-card transition"
              style={{
                borderColor: "rgba(212,168,67,0.15)",
              }}
            >
              {/* Top banner */}
              <div
                className="relative flex items-center justify-center"
                style={{ height: 120, background: s.banner }}
              >
                <span className="text-[52px]" aria-hidden>
                  {s.icon}
                </span>
              </div>
              {/* Thin gold line */}
              <div
                className="h-[2px] w-full"
                style={{ background: "rgba(212,168,67,0.2)" }}
              />

              {/* Body */}
              <div className="px-6 pb-6 pt-6 text-center">
                <h3 className="font-cormorant text-[26px] font-bold text-ivory">
                  {s.title}
                </h3>
                <p
                  className="mt-3 font-lora italic leading-[1.7]"
                  style={{ color: "#7A7895", fontSize: 15 }}
                >
                  {s.body}
                </p>
                <p
                  className="mt-4 font-display text-[11px] uppercase"
                  style={{
                    color: "#D4A843",
                    letterSpacing: "0.16em",
                  }}
                >
                  {s.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <UpsellCountdownDisplay />
          </motion.div>
          <UpsellOfferCard />
        </div>
      </div>
    </section>
  )
}
