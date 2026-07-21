"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { InlineOfferCard } from "./inline-offer-card"

export function NoirHero() {
  return (
    <section className="relative isolate overflow-hidden bg-noir">
      {/* Filmic background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(212,168,67,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 90%, rgba(139,26,26,0.25), transparent 55%), linear-gradient(180deg, #06060f 0%, #0d0d1c 60%, #06060f 100%)",
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,240,255,0.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-12 sm:pt-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <span className="h-px w-10 bg-gold/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Última chance · Edição limitada
          </span>
          <span className="h-px w-10 bg-gold/40" />
        </motion.div>

        {/* The "before/after" two-column dialog */}
        <div className="mx-auto grid max-w-4xl items-center gap-8 sm:gap-12 md:grid-cols-[1fr_auto_1fr]">
          {/* Left: what they're walking away from */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center md:text-right"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-noir-muted">
              Se sair agora
            </p>
            <p className="mt-3 font-cormorant text-2xl italic leading-snug text-ivory/55 line-through decoration-noir-muted/40 sm:text-3xl">
              200 minisséries
              <br />
              por descobrir
            </p>
          </motion.div>

          {/* Center: the heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="mx-auto"
          >
            <div className="relative grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-noir-card sm:h-16 sm:w-16">
              <Heart className="h-6 w-6 fill-crimson-bright text-crimson-bright sm:h-7 sm:w-7" />
              <div
                className="absolute inset-0 animate-ping rounded-full border border-crimson-bright/40"
                aria-hidden
              />
            </div>
          </motion.div>

          {/* Right: what we're offering */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
              Se ficar 60 segundos
            </p>
            <p className="mt-3 font-cormorant text-2xl italic leading-snug text-ivory sm:text-3xl">
              Acesso mensal
              <br />
              <span className="font-bold text-gold">por menos de um café</span>
            </p>
          </motion.div>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="br-headline mt-16 text-balance text-center font-display text-5xl uppercase leading-[0.9] tracking-tight text-ivory sm:text-7xl md:text-[5.5rem]"
        >
          Não vou deixar
          <br />
          <span className="italic text-gold" style={{ fontFamily: "var(--font-cormorant)" }}>
            você partir
          </span>
          <br />
          de mãos vazias.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-center font-lora text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          Sei o que você está pensando. Que &ldquo;já tem tanta coisa para ver&rdquo;.
          Que &ldquo;talvez semana que vem&rdquo;. Que &ldquo;R$9,90 não é barato&rdquo;.
          <br className="hidden sm:block" />
          <span className="mt-2 block font-cormorant text-xl italic text-gold">
            Tudo bem. Eu te ouvi.
          </span>
        </motion.p>

        {/* FIX 1 — Above the fold offer card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-12"
        >
          <InlineOfferCard size="lg" />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-noir-muted">
            Continue lendo
          </span>
          <div className="bounce-y h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
