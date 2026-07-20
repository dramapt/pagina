import { TopBar } from "@/components/dramapt/top-bar"
import { Hero } from "@/components/dramapt/hero"
import { SocialProofStrip } from "@/components/dramapt/social-proof-strip"
import { NewThisWeek } from "@/components/dramapt/new-this-week"
import { StoryQuote } from "@/components/dramapt/story-quote"
import { Features } from "@/components/dramapt/features"
import { HowItWorks } from "@/components/dramapt/how-it-works"
import { Gallery } from "@/components/dramapt/gallery"
import { Stats } from "@/components/dramapt/stats"
import { Offer } from "@/components/dramapt/offer"
import { Reviews } from "@/components/dramapt/reviews"
import { FAQ } from "@/components/dramapt/faq"
import { FinalCta, Footer } from "@/components/dramapt/final-cta"
import { ScrollProgress } from "@/components/dramapt/scroll-progress"
import { FloatingCta } from "@/components/dramapt/floating-cta"
import { LiveToasts } from "@/components/dramapt/live-toasts"
import { BackRedirectGuard } from "@/components/dramapt/back-redirect-guard"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground">
      <BackRedirectGuard />
      <TopBar />
      <ScrollProgress />
      <Hero />
      <SocialProofStrip />
      <NewThisWeek />
      <StoryQuote />
      <Features />
      <HowItWorks />
      <Gallery />
      <Stats />
      <Offer />
      <Reviews />
      <FAQ />
      <FinalCta />
      <Footer />

      {/* Floating overlays */}
      <FloatingCta />
      <LiveToasts />
    </main>
  )
}
