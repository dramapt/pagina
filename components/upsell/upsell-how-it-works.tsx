"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    n: "01",
    icon: "💳",
    title: "CLICA EM SIM",
    body: "Um clique — sem formulários, sem dados para preencher.",
  },
  {
    n: "02",
    icon: "📧",
    title: "RECEBE O ACESSO POR EMAIL",
    body: "Dois e-mails chegam imediatamente: um para você, um para presentear.",
  },
  {
    n: "03",
    icon: "🎁",
    title: "OFERECE QUANDO QUISER",
    body: "Você pode guardar e presentear numa data especial — aniversário, Natal.",
  },
]

export function UpsellHowItWorks() {
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
          className="text-center font-display uppercase tracking-tight text-ivory"
          style={{ fontSize: "clamp(40px, 6vw, 56px)" }}
        >
          Como funciona
        </motion.h2>

        <div className="mx-auto mt-16 flex max-w-[800px] flex-col gap-8 sm:flex-row sm:gap-0">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex-1 px-6 text-center sm:px-6 sm:py-8"
            >
              {/* Big background number */}
              <span
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none font-cormorant font-bold leading-none"
                style={{
                  color: "rgba(212,168,67,0.12)",
                  fontSize: 120,
                  zIndex: 0,
                }}
                aria-hidden
              >
                {s.n}
              </span>

              {/* Icon circle */}
              <div className="relative" style={{ zIndex: 1 }}>
                <div
                  className="mx-auto flex items-center justify-center rounded-full"
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(212,168,67,0.1)",
                    border: "1px solid rgba(212,168,67,0.3)",
                    fontSize: 32,
                  }}
                  aria-hidden
                >
                  {s.icon}
                </div>

                <h3
                  className="mt-4 font-display uppercase tracking-wide text-ivory"
                  style={{ fontSize: 18 }}
                >
                  {s.title}
                </h3>
                <p
                  className="mx-auto mt-3 max-w-xs font-lora italic leading-[1.7]"
                  style={{ color: "#7A7895", fontSize: 14 }}
                >
                  {s.body}
                </p>
              </div>

              {/* Mobile divider */}
              {i < STEPS.length - 1 && (
                <div
                  className="mx-auto mt-8 h-px w-32 sm:hidden"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
