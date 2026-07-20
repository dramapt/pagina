"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mariana, 28",
    city: "Curitiba",
    quote:
      "Comecei uma e quando vi já eram 3 da manhã e eu tinha visto seis. Minha vida desde o último episódio nunca mais foi a mesma.",
    serie: "A Noiva Paga",
  },
  {
    name: "Inês, 34",
    city: "Salvador",
    quote:
      "Em português do Brasil. Sem legendas. Em formato vertical. É o que eu não sabia que precisava no fim de cada dia.",
    serie: "Beleza na Dor",
  },
  {
    name: "Catarina, 41",
    city: "Recife",
    quote:
      "R$7,90 e nunca mais paguei nada. Já assisti 47 minisséries em três meses. Minha psicóloga diz que estou desbloqueando emoções.",
    serie: "Serpente no Coração",
  },
]

export function WhisperedTestimonials() {
  return (
    <section className="relative bg-noir-surface py-20 sm:py-28">
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {/* Three thin gold lines */}
          <div className="mb-6 flex flex-col items-center gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-10"
                style={{ background: "rgba(212,168,67,0.3)" }}
              />
            ))}
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            O que dizem em segredo
          </span>
          <h3 className="mt-4 font-display text-4xl uppercase leading-[0.9] text-ivory sm:text-6xl md:text-7xl">
            Não te tentaria{" "}
            <span className="font-cormorant italic text-crimson-bright">duas vezes</span>{" "}
            sem razão.
          </h3>

          {/* Reason pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "✓ Porque a oferta é real",
              "✓ Porque a garantia é de 7 dias",
              "✓ Porque R$7,90 é menos que um café",
            ].map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="inline-block rounded-full font-lora italic text-ivory"
                style={{
                  background: "#12122B",
                  border: "1px solid rgba(212,168,67,0.2)",
                  padding: "10px 20px",
                  fontSize: 14,
                }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col gap-5 rounded-lg border border-gold/15 bg-noir-card p-6 sm:p-7"
            >
              <Quote className="h-5 w-5 text-gold/60" />
              <blockquote className="flex-1 font-cormorant text-lg italic leading-relaxed text-ivory sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="border-t border-ivory/10 pt-4">
                <p className="font-medium text-ivory">{t.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-noir-muted">
                  {t.city} · viu &ldquo;{t.serie}&rdquo;
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
