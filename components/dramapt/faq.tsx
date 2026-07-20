"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const items = [
  {
    q: "O acesso é mesmo para sempre?",
    a: "Depende do plano. No Básico (R$9,90/mês) você paga mensalmente e pode cancelar quando quiser. No VIP (R$27,90) o pagamento é único e o acesso é vitalício — sem mensalidades, sem renovações automáticas, sem letras miúdas.",
  },
  {
    q: "Em quais dispositivos posso assistir?",
    a: "Em todos. Celular (iOS e Android), tablet, computador e Smart TV (via app dedicada ou navegador). Sua conta sincroniza em qualquer lugar.",
  },
  {
    q: "Saem séries novas?",
    a: "Sim — pelo menos uma série nova por semana, todas em português. Os assinantes vitalícios têm acesso a tudo que sair daqui para frente, sem custo adicional.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias para pedir reembolso completo, sem burocracia. Basta enviar um e-mail para suporte@dramapt.com e devolvemos o valor integral.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Pagamento único e seguro via Stripe. Aceitamos Pix, cartão de crédito/débito (Visa, Mastercard) e Apple/Google Pay. Acesso liberado em segundos.",
  },
  {
    q: "Posso presentear alguém?",
    a: "Pode sim! Após a compra, você recebe um código de presente que pode enviar para quem quiser. Perfeito para aquela amiga que ama séries.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="bg-surface/40 py-24" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-amber">PERGUNTAS</p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Antes de apertar o botão.
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/8 bg-card">
          {items.map((it, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={it.q}
                style={{ borderTop: i === 0 ? undefined : "0.5px solid rgba(255,255,255,0.08)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-elevated"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground sm:text-lg">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-amber transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-out"
                  style={{ maxHeight: isOpen ? 500 : 0 }}
                >
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed text-muted transition-opacity duration-300 sm:text-base"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transitionDelay: isOpen ? "100ms" : "0ms",
                    }}
                  >
                    {it.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
