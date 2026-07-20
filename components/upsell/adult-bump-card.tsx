"use client"

import { motion } from "framer-motion"
import { Lock, ShieldCheck } from "lucide-react"
import { ADULT_BUMP_PRICE } from "@/lib/upsell"
import { HotmartSalesFunnel } from "./hotmart-sales-funnel"

export function AdultBumpCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full overflow-hidden"
      style={{
        maxWidth: 520,
        background: "linear-gradient(145deg, #1A0E0E 0%, #0D0606 100%)",
        border: "1px solid rgba(220,38,38,0.5)",
        borderRadius: 20,
        padding: "32px 28px",
        boxShadow: "0 0 80px rgba(220,38,38,0.12)",
      }}
    >
      <div className="flex justify-center">
        <span
          className="inline-flex items-center gap-1.5 rounded-full font-display text-[11px] uppercase tracking-[0.1em] text-ivory"
          style={{ background: "linear-gradient(135deg, #DC2626, #7F1D1D)", padding: "6px 14px" }}
        >
          🔞 Oferta exclusiva pós-compra
        </span>
      </div>

      <div className="mt-6 flex items-start gap-4">
        {/* Thumbnail placeholder — TODO: trocar pelos banners reais que o usuário vai enviar */}
        <div
          className="relative flex h-24 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg"
          style={{ background: "#1F1113", border: "1px solid rgba(220,38,38,0.3)" }}
        >
          <Lock className="h-6 w-6" style={{ color: "#DC2626" }} />
          <span
            className="absolute bottom-1 left-1 right-1 rounded-sm text-center font-display text-[9px] font-bold uppercase text-ivory"
            style={{ background: "#DC2626", padding: "1px 0" }}
          >
            +18
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-cormorant text-2xl font-bold text-ivory">
            + 18 Cenas Sem Censura
          </h3>
          <p className="mt-1 font-lora text-sm italic leading-relaxed text-noir-muted">
            Assista totalmente sem censura. Veja cada detalhe que a versão normal corta.
          </p>
        </div>
      </div>

      <div className="my-6 h-px w-full" style={{ background: "rgba(220,38,38,0.25)" }} />

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-lora text-xs italic" style={{ color: "#8A7A7A" }}>
            Pagamento único · liberação imediata
          </p>
          <p
            className="mt-1 font-mono font-bold leading-none"
            style={{ fontSize: 40, color: "#DC2626" }}
          >
            {ADULT_BUMP_PRICE}
          </p>
        </div>
      </div>

      <div className="mt-5 adult-bump-cta">
        <HotmartSalesFunnel className="hotmart-funnel-slot" />
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center font-lora text-[12px] italic" style={{ color: "#8A7A7A" }}>
        <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#DC2626" }} />
        Liberação instantânea · Sem novo cadastro
      </p>
    </motion.div>
  )
}
