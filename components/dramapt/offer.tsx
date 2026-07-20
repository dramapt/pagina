"use client"

import { useEffect, useState } from "react"
import { useCountdown, pad } from "@/lib/use-countdown"
import { Check, ShieldCheck, Zap } from "lucide-react"
import { AnimatedGrid } from "./animated-grid"
import { BASICO_CHECKOUT_URL, BASICO_PRICE, VIP_CHECKOUT_URL, VIP_PRICE } from "@/lib/checkout"
import { UpgradeModal } from "./upgrade-modal"

function CountBox({
  value,
  label,
  urgent,
}: {
  value: number
  label: string
  urgent: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex items-center justify-center rounded-xl border tabular-nums transition-colors ${
          urgent
            ? "border-red-500/40 bg-black/40 text-red-500"
            : "border-amber/20 bg-black/40 text-amber"
        }`}
        style={{ width: 72, height: 84 }}
      >
        <span
          key={value}
          className="flip-down font-display text-[44px] leading-none sm:text-[52px]"
        >
          {pad(value)}
        </span>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </div>
  )
}

function Separator({ urgent }: { urgent: boolean }) {
  return (
    <span
      aria-hidden
      className="self-center font-display leading-none"
      style={{
        fontSize: "24px",
        marginBottom: "18px",
        color: urgent ? "rgba(239,68,68,0.25)" : "rgba(245,197,24,0.25)",
      }}
    >
      :
    </span>
  )
}

const avatarColors = [
  { bg: "#7c3aed", initials: "AS" },
  { bg: "#db2777", initials: "MC" },
  { bg: "#0891b2", initials: "JR" },
  { bg: "#ea580c", initials: "SF" },
  { bg: "#16a34a", initials: "LP" },
]

export function Offer() {
  const { ready, days, hours, minutes, seconds } = useCountdown()

  const urgent = ready && days === 0 && hours === 0 && minutes < 30

  // Calcular apenas no cliente — evita hydration mismatch
  const [peopleThisWeek, setPeopleThisWeek] = useState(45)
  useEffect(() => {
    setPeopleThisWeek(Math.floor(Math.random() * (67 - 30 + 1)) + 30)
  }, [])

  const [upgradeOpen, setUpgradeOpen] = useState(false)

  return (
    <section
      id="oferta"
      className="relative overflow-hidden bg-background py-24"
      style={{ scrollMarginTop: 80 }}
    >
      {/* Layer 1: grade animada de capas com baixíssima opacidade e velocidade muito lenta */}
      <AnimatedGrid
        columns={5}
        speeds={[140, 180, 120, 160, 150]}
        className="opacity-[0.05]"
      />
      {/* Layer 2: blur por cima da grade para suavizar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)" }}
      />
      {/* Layer 3: brilho roxo radial subtil no centro + accent âmbar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(245,197,24,0.06), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Logo + divisor — ancora a secção à marca */}
        <div className="mb-5 flex flex-col items-center">
          <img
            src="/logo-dramapt.png"
            alt="DramaPT"
            className="h-14 w-auto opacity-95 sm:h-16"
          />
          <span
            aria-hidden
            className="mt-4 block"
            style={{
              width: 56,
              height: 1,
              backgroundColor: "rgba(245,197,24,0.35)",
            }}
          />
        </div>

        <div className="text-center">
          <p className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
            <span className="relative flex h-2 w-2">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-orange-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            Oferta de lançamento
          </p>
          <h2 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Essa Oferta Não Dura
            <br />
            Para Sempre.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">
            Preço de lançamento. Quando o contador zerar, volta para R$99.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-lg items-start justify-center gap-2 sm:gap-3">
          <CountBox value={ready ? days : 0} label="Dias" urgent={urgent} />
          <Separator urgent={urgent} />
          <CountBox value={ready ? hours : 0} label="Horas" urgent={urgent} />
          <Separator urgent={urgent} />
          <CountBox value={ready ? minutes : 0} label="Min" urgent={urgent} />
          <Separator urgent={urgent} />
          <CountBox value={ready ? seconds : 0} label="Seg" urgent={urgent} />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Card BÁSICO */}
          <div className="relative flex flex-col rounded-2xl border border-white/8 bg-card p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
              Plano Básico
            </p>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-6xl tracking-tight text-foreground">
                {BASICO_PRICE}
              </span>
              <span className="text-sm text-white/45">/mês</span>
            </div>
            <p className="mt-2 text-sm text-muted">Pagamento mensal · cancele quando quiser</p>

            <ul className="mt-6 flex-1 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                <span>200+ minisséries e doramas</span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                <span>Todos os episódios liberados</span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                <span>Acesso imediato após o pagamento</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => setUpgradeOpen(true)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-transparent px-6 py-3.5 text-sm font-bold text-foreground transition hover:border-amber/50 hover:text-amber"
            >
              Quero o Plano Básico
            </button>
          </div>

          {/* Card VIP */}
          <div className="relative rounded-2xl border-2 border-amber bg-gradient-to-br from-amber/8 via-card to-card p-7 shadow-[0_0_60px_rgba(245,197,24,0.15)]">
            <div className="absolute -top-3 right-6 rounded-md bg-amber px-3 py-1 text-xs font-bold uppercase tracking-wider text-background">
              Mais vendido
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">
              Plano VIP · Recomendado
            </p>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-2xl tracking-tight text-white/30 line-through decoration-2">
                R$99
              </span>
              <span className="font-display text-6xl tracking-tight text-foreground">
                {VIP_PRICE}
              </span>
              <span className="text-sm text-muted">uma vez · para sempre</span>
            </div>

            <span className="mt-2 inline-block rounded-full bg-[#14532d] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-green-400">
              Acesso VIP vitalício
            </span>

            <p className="mt-3 text-sm text-muted">
              Catálogo completo · lançamentos toda semana
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 font-bold text-amber">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                <span>Acesso imediato após o pagamento</span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                <span>200+ séries · novas toda semana</span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                <span>Sem mensalidade · sem renovação</span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                <span>Acesso no celular, tablet e TV</span>
              </li>
              <li className="flex items-start gap-2.5 text-green-400">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-green-400"
                  strokeWidth={2.5}
                />
                <span>7 dias de garantia · 100% reembolso</span>
              </li>
            </ul>

            {/* Prova social */}
            <div className="mt-6 flex items-center gap-2.5 border-t border-white/[0.06] pt-3">
              <div className="flex -space-x-2">
                {avatarColors.map((a, i) => (
                  <span
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 text-[10px] font-bold text-white"
                    style={{
                      backgroundColor: a.bg,
                      borderColor: "#0a0a0a",
                    }}
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <span className="text-[13px] text-white/60">
                <strong className="text-amber">{peopleThisWeek} pessoas</strong>{" "}
                entraram essa semana
              </span>
            </div>

            <div
              id="oferta-cta"
              aria-hidden
              style={{ scrollMarginTop: 120 }}
            />
            <a
              href={VIP_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shimmer group relative mt-5 inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-amber px-6 py-4 text-base font-bold text-background transition hover:bg-amber-dim"
            >
              <span>Quero Garantir Meu Acesso VIP</span>
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Bloco de garantia (estilo certificado) */}
            <div className="mt-3 flex items-center gap-2.5 rounded-lg border border-dashed border-green-400/30 px-3.5 py-2.5">
              <ShieldCheck className="h-[18px] w-[18px] shrink-0 text-green-400" strokeWidth={2} />
              <p className="text-[12px] leading-snug text-green-400/80">
                Garantia de 7 dias · Se não gostar, devolvemos o dinheiro. Sem burocracia.
              </p>
            </div>

            <p className="mt-2 text-center text-[11px] text-muted">
              Pix · Cartão de crédito · Boleto
            </p>
          </div>
        </div>
      </div>

      <UpgradeModal open={upgradeOpen} onClose={() => setUpgradeOpen(false)} />
    </section>
  )
}
