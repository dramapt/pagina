"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, Crown, ShieldCheck, X, Zap } from "lucide-react"
import { useEffect } from "react"
import { BASICO_CHECKOUT_URL, BASICO_PRICE, UPGRADE_CHECKOUT_URL, UPGRADE_PRICE } from "@/lib/checkout"

const VIP_INCLUDES = [
  "200+ minisséries e doramas (vs. catálogo limitado do Básico)",
  "Novas séries todas as semanas, sem custo extra",
  "Acesso multi-dispositivo (celular, tablet e TV)",
  "Suporte VIP prioritário",
]

export function UpgradeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="upgrade-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border-2 border-amber bg-[#0a0a0a] p-7 text-center shadow-[0_30px_80px_-20px_rgba(245,197,24,0.4)] sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 text-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber/40 bg-amber/10">
              <Crown className="h-7 w-7 text-amber" strokeWidth={2} />
            </div>

            <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber">
              <Zap className="h-3.5 w-3.5" /> Upgrade VIP
            </p>

            <h3 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              Antes de continuar...
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Por só mais um pouco, desbloqueie o catálogo completo com acesso VIP vitalício.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="font-display text-xl text-white/30 line-through decoration-2">
                {BASICO_PRICE}/mês
              </span>
              <span className="font-display text-5xl tracking-tight text-amber">{UPGRADE_PRICE}</span>
            </div>
            <p className="mt-1 text-xs text-muted">pagamento único · acesso VIP vitalício</p>

            <ul className="mx-auto mt-6 flex max-w-[320px] flex-col gap-2.5 text-left">
              {VIP_INCLUDES.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.5} />
                  <span className="text-sm text-foreground/90">{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 rounded-lg border border-amber/20 bg-amber/5 px-3.5 py-2 text-xs font-semibold text-amber">
              ⚡ Oferta por tempo limitado — some ao fechar esta janela
            </p>

            <a
              href={UPGRADE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="cta-shimmer mt-5 inline-flex w-full items-center justify-center rounded-md bg-amber px-6 py-3.5 text-sm font-bold text-background transition hover:bg-amber-dim"
            >
              SIM! Quero o VIP por {UPGRADE_PRICE}
            </a>

            <a
              href={BASICO_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="mt-2.5 inline-flex w-full items-center justify-center rounded-md border border-white/10 px-6 py-3 text-sm font-semibold text-muted transition hover:border-white/25 hover:text-foreground"
            >
              Não, prefiro o Básico por {BASICO_PRICE}/mês
            </a>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-amber" />
              7 dias de garantia · Sem burocracia
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
