"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Lock, ShieldCheck, Zap } from "lucide-react"
import { useSharedCountdown } from "@/lib/use-shared-countdown"
import { CHECKOUT_BACK_URL } from "@/lib/checkout-back"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function GoldenOffer() {
  const { hours, minutes, seconds } = useSharedCountdown(15 * 60) // 15 min
  const [tickFlash, setTickFlash] = useState(false)

  useEffect(() => {
    setTickFlash(true)
    const t = setTimeout(() => setTickFlash(false), 200)
    return () => clearTimeout(t)
  }, [seconds])

  return (
    <section
      id="oferta-back"
      className="relative isolate overflow-hidden bg-noir py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,168,67,0.18), transparent 60%), linear-gradient(180deg, #0d0d1c 0%, #06060f 100%)",
        }}
      />
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto mb-10 inline-flex w-full max-w-fit -translate-x-1/2 items-center gap-2 rounded-sm border-2 border-double border-crimson-bright/70 bg-crimson/10 px-4 py-2 text-crimson-bright sm:px-5"
          style={{ marginLeft: "50%" }}
        >
          <Zap className="h-3.5 w-3.5 fill-crimson-bright" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
            Oferta privada · Só agora

          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-2 text-balance text-center font-display text-4xl uppercase leading-[0.9] tracking-tight text-ivory sm:text-6xl md:text-7xl"
        >
          Em vez de{" "}
          <span className="font-cormorant text-3xl italic text-noir-muted line-through sm:text-5xl md:text-6xl">
            R$9,90
          </span>
          ,
          <br />
          leva tudo por{" "}
          <span
            className="font-cormorant italic text-gold"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            R$7,90
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-balance text-center font-lora text-base text-ivory/70 sm:text-lg"
        >
          Mesma plataforma. Mesmas 200+ minisséries. Mesmo acesso completo.
          <br className="hidden sm:block" />
          <span className="text-gold">20% de desconto</span> no plano mensal
          — cancele quando quiser.
        </motion.p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gold-pulse mt-12 overflow-hidden rounded-xl border border-gold/40 bg-noir-card"
        >
          {/* Top stripe */}
          <div className="flex items-center justify-between gap-3 border-b border-gold/20 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 px-5 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold sm:text-xs">
              Oferta de saída · 20% off
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-ivory/60 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-bright red-pulse" />
              Expira em
              <span
                className={`tabular-nums font-bold text-ivory ${
                  tickFlash ? "text-gold" : ""
                }`}
              >
                {pad(hours)}:{pad(minutes)}:{pad(seconds)}
              </span>
            </span>
          </div>

          <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            {/* Left: price + bullets */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-noir-muted">
                Assinatura mensal
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-7xl text-ivory sm:text-8xl">
                  <span className="text-gold">R$</span>7
                  <span className="text-gold">,</span>90
                </span>
                <span className="font-cormorant text-2xl italic text-noir-muted line-through">
                  R$9,90
                </span>
              </div>
              <p className="mt-2 font-lora text-sm text-ivory/65 sm:text-base">
                R$7,90 todo mês. Cancele quando quiser, sem burocracia.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-ivory/85 sm:text-base">
                {[
                  "Acesso a TODAS as 200+ minisséries",
                  "Cada novo lançamento, desbloqueado automaticamente",
                  "Em português, em formato vertical",
                  "Sem anúncios. Sem cortes. Sem &ldquo;próxima temporada&rdquo;",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 font-mono text-[10px] font-bold text-gold">
                      ✓
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col gap-4">
              <a
                href={CHECKOUT_BACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid place-items-center overflow-hidden rounded-md bg-gold px-6 py-5 text-center font-bold text-noir shadow-[0_20px_60px_-15px_rgba(212,168,67,0.65)] transition hover:bg-gold-dim"
              >
                <span className="flex items-center gap-2 text-base sm:text-lg">
                  Aceitar a oferta — R$7,90
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-noir/70">
                  Acesso imediato · Pagamento seguro
                </span>
              </a>

              <div className="grid grid-cols-3 gap-2 text-[10px] text-ivory/60 sm:text-xs">
                <div className="flex flex-col items-center gap-1.5 rounded-md border border-ivory/10 bg-ivory/5 px-2 py-3 text-center">
                  <Lock className="h-3.5 w-3.5 text-gold" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 rounded-md border border-ivory/10 bg-ivory/5 px-2 py-3 text-center">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  <span>7 dias garantia</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 rounded-md border border-ivory/10 bg-ivory/5 px-2 py-3 text-center">
                  <Zap className="h-3.5 w-3.5 text-gold" />
                  <span>Acesso imediato</span>
                </div>
              </div>

              <p className="text-pretty text-center font-lora text-xs italic text-noir-muted sm:text-sm">
                &ldquo;Você não vai ver isso em outra página. É só para você, agora.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decline link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-noir-muted underline-offset-4 transition hover:text-ivory/60 hover:underline"
          >
            Não, obrigada — quero pagar o preço normal

          </a>
        </div>
      </div>
    </section>
  )
}
