import type { Metadata } from "next"
import { ExitBackRedirect } from "@/components/back-redirect/exit-back-redirect"
import { ExitIntentBanner } from "@/components/back-redirect/exit-intent-banner"
import { NoirHero } from "@/components/back-redirect/noir-hero"
import { LiveActivityStrip } from "@/components/back-redirect/live-activity-strip"
import { CafeComparison } from "@/components/back-redirect/cafe-comparison"
import { PersonalLetter } from "@/components/back-redirect/personal-letter"
import { MidPageReinforcement } from "@/components/back-redirect/mid-page-reinforcement"
import { GoldenOffer } from "@/components/back-redirect/golden-offer"
import { WhisperedTestimonials } from "@/components/back-redirect/whispered-testimonials"
import { EmotionalPullQuote } from "@/components/back-redirect/emotional-pull-quote"
import { QuietFaq } from "@/components/back-redirect/quiet-faq"
import { ValueReminderStrip } from "@/components/back-redirect/value-reminder-strip"
import { FinalCloser } from "@/components/back-redirect/final-closer"
import { FinalWhisper } from "@/components/back-redirect/final-whisper"

export const metadata: Metadata = {
  title: "Espere — uma última oferta · DramaPT",
  description:
    "20% de desconto em acesso vitalício à DramaPT. Apenas para quem quase saiu. Oferta privada e por tempo limitado.",
  robots: { index: false, follow: false },
}

export default function OfertaEspecialPage() {
  return (
    <main className="relative bg-noir text-ivory">
      <ExitBackRedirect />
      <ExitIntentBanner />
      <NoirHero />
      {/* Empty space 1 — live activity */}
      <LiveActivityStrip />
      <CafeComparison />
      <PersonalLetter />
      {/* Empty space 2 — reminder + live feed + testimonials */}
      <MidPageReinforcement />
      <WhisperedTestimonials />
      {/* Empty space 3 — emotional pull quote */}
      <EmotionalPullQuote />
      <GoldenOffer />
      <QuietFaq />
      {/* Empty space 4 — value reminder strip */}
      <ValueReminderStrip />
      <FinalCloser />
      <FinalWhisper />
    </main>
  )
}
