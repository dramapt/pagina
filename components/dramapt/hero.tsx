"use client"

import { motion } from "framer-motion"
import { VslPlayer } from "./vsl-player"
import { AnimatedGrid } from "./animated-grid"
import { GuaranteeLine } from "./guarantee-line"
import { Check, ChevronDown, Play, Sparkles } from "lucide-react"

const anchors = [
  { label: "Ver séries", id: "series" },
  { label: "Ver preço", id: "oferta" },
  { label: "Ver avaliações", id: "reviews" },
  { label: "Ver FAQ", id: "faq" },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Animated thumbnail grid backdrop (fades in) */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
      >
        <AnimatedGrid columns={5} speeds={[90, 120, 75, 110, 95]} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #080808 35%, rgba(8,8,8,0.8) 60%, transparent 100%)",
          }}
        />
        {/* Stronger overlay on mobile so the column-stacked content stays legible */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.8) 60%, rgba(8,8,8,0.95) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(192,38,211,0.25), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(245,197,24,0.18), transparent 50%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="text-center lg:col-span-7 lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-background/70 px-3 py-1 text-xs font-medium text-amber backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3" />
            A plataforma de minisséries em português
          </motion.div>

          <h1 className="font-display text-6xl leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Seu Próximo
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="italic text-amber">Vício</span>{" "}
              <span>Chegou.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0"
          >
            <span className="text-foreground">200+ minisséries verticais.</span> Em português.
            Uma nova toda semana. <span className="text-foreground">Para sempre.</span>
          </motion.p>

          <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
            <motion.a
              id="hero-cta"
              href="#oferta"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="cta-shimmer group inline-flex items-center gap-2 rounded-md bg-amber px-7 py-4 text-base font-bold text-background shadow-[0_20px_60px_-15px_rgba(245,197,24,0.6)] transition hover:bg-amber-dim sm:text-lg"
            >
              <Play className="h-5 w-5 fill-background" />
              Começar Agora — R$9,90/mês
              <span className="ml-1 transition group-hover:translate-x-1">→</span>
            </motion.a>

            <GuaranteeLine className="!mt-0" />

            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted lg:justify-start">
              {["Sem mensalidade", "7 dias de garantia", "Acesso imediato"].map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.75 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5"
                >
                  <Check className="h-3.5 w-3.5 text-amber" />
                  {t}
                </motion.li>
              ))}
            </ul>

            {/* Anchor links */}
            <motion.nav
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="mt-2 grid w-full max-w-md grid-cols-2 justify-items-center gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 lg:justify-start"
              aria-label="Atalhos da página"
            >
              {anchors.map((a) => (
                <button
                  key={a.id}
                  onClick={() => scrollTo(a.id)}
                  className="inline-flex items-center gap-1 text-left text-xs text-foreground/40 transition hover:text-foreground"
                >
                  {a.label} <ChevronDown className="h-3 w-3" />
                </button>
              ))}
            </motion.nav>
          </div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[340px] lg:col-span-5 lg:mt-0 lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <VslPlayer />
        </motion.div>
      </div>
    </section>
  )
}
