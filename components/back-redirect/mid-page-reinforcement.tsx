"use client"

import { motion } from "framer-motion"
import { InlineOfferCard } from "./inline-offer-card"
import { LiveSocialProof } from "./live-social-proof"
import { TestimonialQuickCards } from "./testimonial-quick-cards"

export function MidPageReinforcement() {
  return (
    <section className="relative isolate overflow-hidden bg-noir py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(212,168,67,0.07), transparent 70%)",
        }}
      />
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-14 px-6">
        {/* A — mid-page offer reminder */}
        <InlineOfferCard
          size="sm"
          showCoupon={false}
          showTrust={false}
          intro="Ainda aqui? A oferta continua."
          ctaLabel="Garantir por R$7,90"
        />

        {/* B — live feed */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <LiveSocialProof />
        </motion.div>

        {/* C — quick testimonial cards */}
        <TestimonialQuickCards />
      </div>
    </section>
  )
}
