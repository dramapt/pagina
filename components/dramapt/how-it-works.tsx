"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { PosterUnlock, PosterDevices, PosterFastStart } from "./poster-icons"

const steps = [
  {
    n: "01",
    Icon: PosterUnlock,
    title: "Você acessa hoje. Paga uma vez.",
    desc: "Um pagamento único, vitalício. Sem renovações.",
  },
  {
    n: "02",
    Icon: PosterDevices,
    title: "Abre em qualquer dispositivo.",
    desc: "Celular, tablet ou TV. Onde você estiver.",
  },
  {
    n: "03",
    Icon: PosterFastStart,
    title: "Você começa em 30 segundos.",
    desc: "Sem instalações. Sem fricção. Só play.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative bg-background py-24" id="como-funciona">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-amber">COMO FUNCIONA</p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            3 passos. 30 segundos.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-card p-7"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-5 -right-2 hidden select-none font-display leading-none tracking-tight text-amber sm:block"
                style={{ fontSize: "120px", opacity: 0.06 }}
              >
                {s.n}
              </span>
              <div className="relative">
                <div className="mb-4 self-start">
                  <s.Icon />
                </div>
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>

              {/* Arrow between cards (desktop only, not after last) */}
              {i < steps.length - 1 && (
                <motion.div
                  aria-hidden
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.4, duration: 0.4 }}
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center md:flex"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-amber/40 bg-background text-amber">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
