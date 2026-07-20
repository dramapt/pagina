"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Lock, Zap } from "lucide-react"
import { CHECKOUT_BACK_URL } from "@/lib/checkout-back"

type Size = "sm" | "md" | "lg"

interface InlineOfferCardProps {
  size?: Size
  showCoupon?: boolean
  showTrust?: boolean
  showGuarantee?: boolean
  showPayments?: boolean
  showSkip?: boolean
  ctaLabel?: string
  className?: string
  intro?: string
}

const PAYMENTS = ["Visa", "Mastercard", "Pix", "Boleto", "PayPal"]

/**
 * Standardised offer card used above the fold (lg), mid-page reminder (sm),
 * and final closing section (lg). Centralises price, coupon and CTA visuals.
 */
export function InlineOfferCard({
  size = "md",
  showCoupon = true,
  showTrust = true,
  showGuarantee = true,
  showPayments = false,
  showSkip = false,
  ctaLabel,
  className = "",
  intro,
}: InlineOfferCardProps) {
  const isLg = size === "lg"
  const isSm = size === "sm"

  const cta = ctaLabel ?? (isSm ? "Garantir por R$7,90" : "Quero garantir por R$7,90 agora")

  return (
    <div className={`mx-auto w-full max-w-[460px] ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="offer-card-pulse relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #12122B 0%, #0D0D1C 100%)",
          border: "1px solid rgba(212,168,67,0.65)",
          borderRadius: 20,
          padding: "32px 28px",
          boxShadow:
            "0 0 80px rgba(212,168,67,0.15), 0 0 30px rgba(212,168,67,0.08), inset 0 1px 0 rgba(212,168,67,0.15)",
        }}
      >
        {/* Badge — rectangular crimson with FIQUE998 */}
        <div className="flex justify-center">
          <span
            className="inline-flex items-center gap-1.5 font-display text-[12px] uppercase tracking-[0.08em] text-ivory"
            style={{
              background: "linear-gradient(135deg, #8B1A1A, #6B1010)",
              borderRadius: 16,
              padding: "6px 16px",
              letterSpacing: "1px",
            }}
          >
            <span aria-hidden>🔥</span>
            OFERTA ESPECIAL — CUPOM FIQUE998
          </span>
        </div>

        {intro && (
          <p className="mt-4 text-center font-lora text-sm italic" style={{ color: "#7A7895" }}>
            {intro}
          </p>
        )}

        {/* Price block */}
        <div className="mt-5 text-center">
          <p className="font-mono text-[16px] line-through" style={{ color: "#7A7895" }}>
            R$9,90
          </p>
          <span
            aria-hidden
            className="bounce-y mx-auto mt-1 block w-fit font-mono text-[14px] text-gold"
          >
            ↓
          </span>
          <p
            className="price-shimmer mt-1 font-mono font-bold leading-none"
            style={{
              fontSize: "clamp(60px, 11vw, 76px)",
              color: "#D4A843",
              textShadow:
                "0 0 80px rgba(212,168,67,0.7), 0 0 30px rgba(212,168,67,0.4)",
            }}
          >
            R$7,90
          </p>
          <p
            className="mt-3 font-lora italic"
            style={{ fontSize: 12, color: "#7A7895" }}
          >
            pagamento único · acesso imediato · para sempre
          </p>
        </div>

        {/* Gold divider */}
        <div
          className="my-6 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)",
          }}
        />

        {/* Coupon badge */}
        {showCoupon && (
          <div className="flex flex-col items-center gap-1.5">
            <span
              className="inline-flex items-center gap-2"
              style={{
                background: "#12122B",
                border: "1px solid rgba(212,168,67,0.4)",
                borderRadius: 8,
                padding: "10px 20px",
              }}
            >
              <span aria-hidden style={{ fontSize: 16 }}>
                ✂️
              </span>
              <span
                className="font-mono font-bold tracking-wider text-gold"
                style={{ fontSize: 18 }}
              >
                FIQUE998
              </span>
            </span>
            <p className="font-lora italic" style={{ fontSize: 11, color: "#7A7895" }}>
              cupom já aplicado automaticamente
            </p>
          </div>
        )}

        {/* Gold divider */}
        {showCoupon && (
          <div
            className="my-6 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)",
            }}
          />
        )}

        {/* CTA */}
        <a
          href={CHECKOUT_BACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-shimmer-strong group relative flex w-full items-center justify-center gap-2 overflow-hidden font-display uppercase text-center transition hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #D4A843, #B8860B)",
            color: "#06060F",
            height: 56,
            borderRadius: 10,
            fontSize: 20,
            letterSpacing: "0.04em",
            boxShadow: "0 18px 50px -15px rgba(212,168,67,0.75)",
          }}
        >
          <span aria-hidden>✓</span>
          {cta}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>

        {/* Micro-copy */}
        <p
          className="mt-3 text-center font-lora italic"
          style={{ fontSize: 11, color: "#7A7895" }}
        >
          Um clique · Sem complicação · Acesso imediato
        </p>

        {showGuarantee && (
          <p
            className="mt-4 text-center font-lora italic"
            style={{ fontSize: 12, color: "#7A7895" }}
          >
            <ShieldCheck
              className="mr-1.5 inline h-3.5 w-3.5 text-gold"
              aria-hidden
            />
            Garantia 7 dias · Reembolso total sem burocracia
          </p>
        )}

        {showTrust && !isSm && (
          <div className="mt-5 grid grid-cols-3 gap-2 text-[10px] sm:text-xs" style={{ color: "rgba(245,240,255,0.55)" }}>
            <div className="flex flex-col items-center gap-1.5 rounded-md border border-ivory/10 bg-ivory/[0.03] px-2 py-2.5 text-center">
              <Lock className="h-3.5 w-3.5 text-gold" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 rounded-md border border-ivory/10 bg-ivory/[0.03] px-2 py-2.5 text-center">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" />
              <span>7 dias garantia</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 rounded-md border border-ivory/10 bg-ivory/[0.03] px-2 py-2.5 text-center">
              <Zap className="h-3.5 w-3.5 text-gold" />
              <span>Acesso imediato</span>
            </div>
          </div>
        )}

        {showPayments && (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 opacity-80">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-md font-mono uppercase tracking-wide"
                style={{
                  background: "#12122B",
                  border: "1px solid rgba(212,168,67,0.15)",
                  color: "rgba(245,240,255,0.7)",
                  fontSize: 10,
                  padding: "6px 10px",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {showSkip && (
        <div className="mt-5 text-center">
          <a
            href="/"
            className="font-lora italic underline-offset-4 transition hover:underline"
            style={{ fontSize: 12, color: "#7A7895" }}
          >
            Não quero o desconto — sair sem comprar →

          </a>
        </div>
      )}
    </div>
  )
}
