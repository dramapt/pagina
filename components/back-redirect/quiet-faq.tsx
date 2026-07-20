"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Por que a oferta é mais barata aqui?",
    a: "Porque você já demonstrou interesse e estava saindo. É a única forma que temos de te trazer de volta. Você não vai ver esse preço em nenhum outro lugar — nem amanhã, nem na Black Friday, nem em nenhuma outra campanha. É agora ou R$9,90.",
  },
  {
    q: "Vou pagar mais alguma coisa depois?",
    a: "Não. R$7,90 uma única vez. Sem mensalidade, sem renovação, sem cobrança escondida. Acesso vitalício significa para sempre. De verdade. Novos lançamentos incluídos.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias para experimentar tudo. Se não se apaixonar por pelo menos uma minissérie, manda um e-mail e devolvemos o dinheiro — sem perguntas, sem formulários, sem &ldquo;tem certeza?&rdquo;. Já estive lá.",
  },
  {
    q: "Em quais dispositivos posso assistir?",
    a: "Celular, tablet, computador, smart TV. Qualquer coisa com um navegador moderno. Foi pensado primeiro para o celular — porque é onde você está às onze da noite, na cama, exatamente como eu.",
  },
  {
    q: "Os episódios são mesmo em português?",
    a: "Sim. Dublagem profissional em português, com vozes adaptadas ao tom de cada minissérie. Sem sotaques estranhos, sem traduções automáticas, sem aquela pronúncia esquisita no meio.",
  },
]

export function QuietFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative bg-noir py-20 sm:py-28">
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <div className="mb-12 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Perguntas honestas
          </span>
          <h3 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-ivory sm:text-5xl">
            Antes de{" "}
            <span className="font-cormorant italic text-gold">decidir</span>.
          </h3>
        </div>

        <ul className="divide-y divide-ivory/10 overflow-hidden rounded-lg border border-ivory/10 bg-noir-card">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-ivory/5 sm:px-6 sm:py-6"
                >
                  <span className="br-faq-q font-lora text-base text-ivory sm:text-lg">
                    {f.q}
                  </span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="br-faq-a px-5 pb-6 font-lora text-sm leading-relaxed text-ivory/75 sm:px-6 sm:text-base sm:leading-[1.7]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
