"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Lock, ShieldCheck } from "lucide-react"
import { PLATFORM_URL } from "@/lib/upsell"
import { HotmartSalesFunnel } from "./hotmart-sales-funnel"

interface Props {
  intense?: boolean
  id?: string
}

const PAYMENTS = ["Visa", "Mastercard", "Pix", "Boleto", "PayPal"]
const INCLUDES = [
  "Acesso vitalício completo — igual ao seu",
  "700+ minisséries desbloqueadas na hora",
  "Sem anúncios, sem mensalidades jamais",
  "Todas as séries novas incluídas para sempre",
]

function GoldDivider() {
  return (
    <div
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)",
      }}
      aria-hidden
    />
  )
}

export function UpsellOfferCard({ intense = false, id }: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`upsell-offer-card relative mx-auto w-full overflow-hidden ${
        intense ? "gold-pulse-strong" : "gold-pulse-soft"
      }`}
      style={{
        maxWidth: 500,
        background: "linear-gradient(145deg, #12122B 0%, #0D0D1C 100%)",
        border: "1px solid rgba(212,168,67,0.65)",
        borderRadius: 24,
        padding: "40px 36px",
      }}
    >
      {/* 1. BADGE */}
      <div className="text-center">
        <span
          className="inline-block rounded-[20px] px-5 py-2 font-display uppercase text-ivory"
          style={{
            background: "linear-gradient(135deg, #8B1A1A, #6B1010)",
            fontSize: 13,
            letterSpacing: "0.08em",
          }}
        >
          🎁 Oferta especial pós-compra — nunca mais este preço
        </span>
      </div>

      {/* 2. GIFT ICON (floating) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mt-6 mb-2 text-center"
        style={{ fontSize: 64, lineHeight: 1 }}
        aria-hidden
      >
        🎁
      </motion.div>

      {/* 3. PRODUCT NAME */}
      <p
        className="text-center font-cormorant text-ivory"
        style={{ fontSize: 22 }}
      >
        2º Acesso Vitalício DramaPT
      </p>
      {/* 4. SUBTITLE */}
      <p
        className="mt-1 text-center font-lora italic"
        style={{ color: "#7A7895", fontSize: 14 }}
      >
        Para presentear quem você ama
      </p>

      {/* 5. divider */}
      <div className="my-5">
        <GoldDivider />
      </div>

      {/* 6. PRICE BLOCK */}
      <div className="text-center">
        <p
          className="font-lora italic"
          style={{ color: "#7A7895", fontSize: 12 }}
        >
          Valor normal para não-membros
        </p>
        <p
          className="mt-1 font-mono line-through"
          style={{ color: "#7A7895", fontSize: 18 }}
        >
          R$19,90
        </p>
        <motion.p
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1 font-display text-gold"
          style={{ fontSize: 18 }}
          aria-hidden
        >
          ↓
        </motion.p>
        <p
          className="price-shimmer upsell-price-big mt-1 font-mono font-bold leading-none"
          style={{
            fontSize: 80,
            color: "#D4A843",
            textShadow:
              "0 0 80px rgba(212,168,67,0.8), 0 0 40px rgba(212,168,67,0.5), 0 0 10px rgba(212,168,67,0.3)",
          }}
        >
          R$9,90
        </p>
        <p
          className="mt-3 font-lora italic"
          style={{ color: "#7A7895", fontSize: 12 }}
        >
          pagamento único · acesso imediato · para sempre
        </p>
      </div>

      {/* 7. divider */}
      <div className="my-5">
        <GoldDivider />
      </div>

      {/* 8. INCLUDES */}
      <ul className="mx-auto flex max-w-[340px] flex-col gap-3 text-left">
        {INCLUDES.map((line) => (
          <li key={line} className="flex items-start gap-3">
            <span
              className="flex shrink-0 items-center justify-center rounded-full font-bold"
              style={{
                width: 22,
                height: 22,
                background: "rgba(212,168,67,0.15)",
                border: "1px solid rgba(212,168,67,0.4)",
                color: "#D4A843",
                fontSize: 12,
              }}
              aria-hidden
            >
              ✓
            </span>
            <span className="font-lora text-ivory" style={{ fontSize: 15 }}>
              {line}
            </span>
          </li>
        ))}
      </ul>

      {/* 9. divider */}
      <div className="my-5">
        <GoldDivider />
      </div>

      {/* 10. CTA — Hotmart widget */}
      <div className="hotmart-cta-wrapper">
        <HotmartSalesFunnel className="hotmart-funnel-slot" />
      </div>

      {/* 11. micro-copy */}
      <p
        className="mt-3 text-center font-lora italic"
        style={{ color: "#7A7895", fontSize: 12 }}
      >
        Um clique · Sem preencher formulários · Acesso imediato
      </p>

      {/* 12. scarcity */}
      <p
        className="mt-2 text-center font-lora italic"
        style={{ color: "#E57373", fontSize: 13 }}
      >
        ⚠️ Esta oferta desaparece quando você sair desta página.
      </p>

      {/* 13. guarantee */}
      <div
        className="mt-4 flex items-center justify-center gap-2 font-lora italic"
        style={{ color: "#7A7895", fontSize: 13 }}
      >
        <ShieldCheck className="h-4 w-4 text-gold" />
        Garantia 7 dias · Reembolso total sem perguntas
      </div>

      {/* 14. payment row */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {PAYMENTS.map((p) => (
            <span
              key={p}
              className="rounded-md px-2.5 py-1 font-display uppercase"
              style={{
                background: "rgba(245,240,255,0.04)",
                border: "1px solid rgba(212,168,67,0.1)",
                color: "rgba(245,240,255,0.65)",
                fontSize: 10,
                letterSpacing: "0.14em",
              }}
            >
              {p}
            </span>
          ))}
        </div>
        <p
          className="flex items-center gap-1.5 font-lora italic"
          style={{ color: "#7A7895", fontSize: 11 }}
        >
          <Lock className="h-3 w-3" />
          Pagamento seguro · Hotmart
        </p>
      </div>

      {/* 15. skip link */}
      <div className="mt-5 text-center">
        <Link
          href={PLATFORM_URL}
          className="font-lora italic underline-offset-4 transition hover:text-ivory hover:underline"
          style={{ color: "#7A7895", fontSize: 13 }}
        >
          Não quero oferecer — ir para a plataforma →
        </Link>
      </div>
    </motion.div>
  )
}
