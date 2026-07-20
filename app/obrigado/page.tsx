import type { Metadata } from "next"
import Link from "next/link"
import { UpsellTimerProvider } from "@/lib/upsell-timer-context"
import { UpsellTopBar } from "@/components/upsell/upsell-top-bar"
import { AdultHero } from "@/components/upsell/adult-hero"
import { AdultBumpCard } from "@/components/upsell/adult-bump-card"
import { AdultHotGrid } from "@/components/upsell/adult-hot-grid"
import { UpsellFooter } from "@/components/upsell/upsell-footer"
import { SectionDivider } from "@/components/upsell/section-divider"

export const metadata: Metadata = {
  title: "Oferta exclusiva +18 · DramaPT",
  description:
    "Oferta exclusiva pós-compra: desbloqueie as cenas sem censura por R$19,90. Só aparece nesta página, uma única vez.",
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return (
    <UpsellTimerProvider>
      <main className="relative bg-noir text-ivory" style={{ paddingTop: 56 }}>
        <UpsellTopBar />
        <AdultHero />

        <div className="px-4 pb-4 sm:px-6">
          <AdultBumpCard />
        </div>

        <SectionDivider />
        <AdultHotGrid />

        {/* Recusar a oferta */}
        <div className="px-4 py-10 text-center sm:px-6">
          <Link
            href="/acesso"
            className="font-lora text-[13px] italic underline-offset-4 transition hover:text-ivory hover:underline"
            style={{ color: "#8A7A7A" }}
          >
            Não quero, ir para minha conta →
          </Link>
        </div>

        <UpsellFooter />
      </main>
    </UpsellTimerProvider>
  )
}
