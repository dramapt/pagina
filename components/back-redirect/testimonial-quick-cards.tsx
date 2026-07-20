"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const cards = [
  {
    initials: "CM",
    bg: "bg-rose-700/40 text-rose-200",
    name: "Catarina M.",
    city: "São Paulo",
    quote:
      "Fiquei 20 minutos hesitando nesta página. Paguei. Em 2 minutos já estava assistindo. Não consigo acreditar que quase não comprei.",
  },
  {
    initials: "RF",
    bg: "bg-blue-800/40 text-blue-200",
    name: "Ricardo F.",
    city: "Rio de Janeiro",
    quote:
      "Minha esposa encontrou esta página depois de sair do checkout. Voltou e comprou. Já assistimos 15 séries juntos.",
  },
  {
    initials: "IB",
    bg: "bg-purple-800/40 text-purple-200",
    name: "Inês B.",
    city: "Belo Horizonte",
    quote:
      "R$7,90 por tudo isso para sempre? Senti que estava enganando alguém. Não estava. É mesmo assim.",
  },
]

export function TestimonialQuickCards() {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-4 sm:grid-cols-3 sm:gap-5">
      {cards.map((c, i) => (
        <motion.figure
          key={c.initials}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-noir-card p-5 sm:p-6"
          style={{
            borderTop: "3px solid #d4a843",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-sm font-bold ${c.bg}`}
              aria-hidden
            >
              {c.initials}
            </span>
            <div className="flex flex-col">
              <span className="font-medium text-ivory">
                {c.name} <span className="text-noir-muted">· {c.city}</span>
              </span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-3 w-3 fill-gold text-gold"
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </div>
          <blockquote className="font-lora text-[15px] italic leading-relaxed text-ivory/85">
            “{c.quote}”
          </blockquote>
        </motion.figure>
      ))}
    </div>
  )
}
