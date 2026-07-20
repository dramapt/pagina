"use client"

import { motion } from "framer-motion"

const TESTIMONIALS = [
  {
    initials: "AM",
    bg: "#8B2252",
    name: "Ana M.",
    city: "Porto Alegre",
    quote:
      "Comprei para mim e presenteei minha mãe no mesmo dia. Ela me ligou chorando de felicidade. Agora a gente conversa todo dia sobre as séries. Melhor R$9,90 que já gastei.",
  },
  {
    initials: "RF",
    bg: "#1565C0",
    name: "Rui F.",
    city: "Brasília",
    quote:
      "Minha esposa ficou em choque. Achou que era mentira. Não era. Já assistimos 15 séries juntos.",
  },
  {
    initials: "BF",
    bg: "#6B21A8",
    name: "Beatriz F.",
    city: "Fortaleza",
    quote:
      "Presenteei minha filha. Agora assistimos juntas no fim de semana. É o nosso ritual. Não tem preço.",
  },
]

export function UpsellSocialProof() {
  return (
    <section
      className="grain-noir relative overflow-hidden px-4 py-24 sm:px-6 sm:py-[100px]"
      style={{ background: "#0D0D1C" }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-display uppercase leading-[0.95] tracking-tight text-ivory"
          style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
        >
          Quem já ofereceu
          <br />
          <span className="text-gold">adorou a reação.</span>
        </motion.h2>

        <div className="mx-auto mt-14 grid max-w-[900px] gap-4 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl p-6"
              style={{
                background: "#12122B",
                border: "1px solid rgba(212,168,67,0.1)",
                borderTop: "3px solid #D4A843",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold text-ivory"
                  style={{ background: t.bg }}
                >
                  {t.initials}
                </div>
                <figcaption className="flex flex-1 flex-col">
                  <span className="font-lora text-[15px] font-semibold text-ivory">
                    {t.name}
                  </span>
                  <span className="font-lora text-[13px] italic text-noir-muted">
                    {t.city}
                  </span>
                </figcaption>
                <span className="font-mono text-xs text-gold" aria-hidden>
                  ★★★★★
                </span>
              </div>
              <blockquote
                className="mt-4 font-cormorant italic leading-[1.7]"
                style={{ fontSize: 17, color: "rgba(245,240,255,0.85)" }}
              >
                “{t.quote}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
