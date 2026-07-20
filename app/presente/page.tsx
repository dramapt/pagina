import type { Metadata } from "next"
import { UpsellTimerProvider } from "@/lib/upsell-timer-context"
import { UpsellTopBar } from "@/components/upsell/upsell-top-bar"
import { CelebrationHero } from "@/components/upsell/celebration-hero"
import { UpsellOfferSection } from "@/components/upsell/upsell-offer-section"
import { UpsellSocialProof } from "@/components/upsell/upsell-social-proof"
import { UpsellComparison } from "@/components/upsell/upsell-comparison"
import { UpsellHowItWorks } from "@/components/upsell/upsell-how-it-works"
import { UpsellFinalClose } from "@/components/upsell/upsell-final-close"
import { UpsellFooter } from "@/components/upsell/upsell-footer"
import { SectionDivider } from "@/components/upsell/section-divider"

export const metadata: Metadata = {
  title: "Ofereça acesso vitalício a quem você ama · DramaPT",
  description:
    "Oferta exclusiva pós-compra: 2º acesso vitalício DramaPT por R$9,90. Só aparece nesta página, uma única vez.",
  robots: { index: false, follow: false },
}

export default function PresentePage() {
  return (
    <UpsellTimerProvider>
      <main
        className="relative bg-noir text-ivory"
        style={{ paddingTop: 56 }}
      >
        <UpsellTopBar />
        <CelebrationHero />
        <SectionDivider />
        <UpsellOfferSection />
        <SectionDivider />
        <UpsellSocialProof />
        <SectionDivider />
        <UpsellComparison />
        <SectionDivider />
        <UpsellHowItWorks />
        <SectionDivider />
        <UpsellFinalClose />
        <UpsellFooter />
      </main>
    </UpsellTimerProvider>
  )
}
