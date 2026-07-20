"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_BACK_URL } from "@/lib/checkout-back"
import { useSharedCountdown } from "@/lib/use-shared-countdown"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function FinalWhisper() {
  const { hours, minutes, seconds } = useSharedCountdown(15 * 60)

  return (
    <section className="relative isolate overflow-hidden bg-noir py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,168,67,0.22), transparent 60%), radial-gradient(ellipse 40% 50% at 50% 100%, rgba(139,26,26,0.2), transparent 60%)",
        }}
      />
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-cormorant text-2xl italic text-gold sm:text-3xl"
        >
          Última coisa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-balance font-display text-5xl uppercase leading-[0.9] text-ivory sm:text-7xl"
        >
          Quando esse cronômetro
          <br />
          chegar ao{" "}
          <span className="font-cormorant italic text-crimson-bright">zero</span>,
          <br />
          essa página
          <br />
          <span className="font-cormorant italic text-gold">desaparece</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-pretty font-lora text-base text-ivory/70 sm:text-lg"
        >
          Você vai voltar para a página normal. Vai ver os R$9,90 de novo. E vai
          pensar &ldquo;ah, talvez semana que vem&rdquo;. E semana que vem você já não
          vai lembrar.
          <br className="hidden sm:block" />
          <span className="mt-2 block font-cormorant text-xl italic text-gold">
            O seu eu do futuro vai agradecer.
          </span>
        </motion.p>

        {/* Big timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-12 inline-flex gap-2 rounded-lg border border-gold/30 bg-noir-card p-3 sm:gap-3 sm:p-4"
        >
          {[
            { l: "Horas", v: hours },
            { l: "Min", v: minutes },
            { l: "Seg", v: seconds, pulse: true },
          ].map((t) => (
            <div
              key={t.l}
              className="flex min-w-[72px] flex-col items-center gap-1 rounded-md bg-noir-surface px-3 py-3 sm:min-w-[88px] sm:py-4"
            >
              <span
                className={`font-display text-4xl text-gold tabular-nums sm:text-5xl ${
                  t.pulse ? "timer-pulse" : ""
                }`}
              >
                {pad(t.v)}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-noir-muted">
                {t.l}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          href={CHECKOUT_BACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center justify-center gap-3 rounded-md bg-gold px-9 py-5 text-lg font-bold text-noir shadow-[0_25px_70px_-15px_rgba(212,168,67,0.7)] transition hover:bg-gold-dim sm:text-xl"
        >
          Aceitar — R$7,90 vitalício
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </motion.a>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-noir-muted">
          Pagamento seguro · 7 dias garantia · Sem renovação
        </p>
      </div>
    </section>
  )
}
