import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { CheckCircle2, Mail, Smartphone, ShieldCheck, Heart } from "lucide-react"
import { PLATFORM_URL } from "@/lib/upsell"

export const metadata: Metadata = {
  title: "Acesso Confirmado · DramaPT",
  description: "Sua compra foi confirmada. Bem-vinda à DramaPT.",
  robots: { index: false, follow: false },
}

const steps = [
  {
    icon: Mail,
    title: "Verifique seu e-mail",
    body: "Enviamos as credenciais de acesso para o e-mail que você usou no checkout. Confira também a pasta de spam.",
  },
  {
    icon: Smartphone,
    title: "Baixe o app",
    body: "Disponível para iOS e Android. Faça login com seu e-mail para começar a assistir.",
  },
  {
    icon: Heart,
    title: "Comece pelas favoritas",
    body: "Sugestões: A Substituta do CEO, Lisboa de Noite e A Herdeira Esquecida.",
  },
]

export default function AcessoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Google Ads — Compra conversion event */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': 'AW-18191703167/yuwOCISfq7UcEP-4veJD',
              'value': 1.0,
              'currency': 'BRL',
              'transaction_id': ''
            });
          }
        `}
      </Script>

      {/* Soft amber halo behind hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(245,197,24,0.45) 0%, rgba(245,197,24,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-20 sm:pt-28">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/logo-dramapt.png" alt="DramaPT" className="h-9 w-auto" />
        </div>

        {/* Confirmation badge */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber/40 bg-amber/10">
            <CheckCircle2 className="h-10 w-10 text-amber" strokeWidth={2} />
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
            Compra confirmada
          </p>

          <h1 className="mt-4 text-balance font-display text-5xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Bem-vinda à <span className="italic text-amber">DramaPT.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Obrigada pela sua confiança. Seu acesso vitalício está ativo. A partir de
            agora, mais de 600 minisséries em português estão esperando por você.
          </p>
        </div>

        {/* Next steps */}
        <div className="mt-16">
          <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Próximos passos
          </p>


          <ol className="flex flex-col gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <li
                  key={s.title}
                  className="flex items-start gap-4 rounded-lg border border-white/[0.06] bg-card p-5 transition hover:border-amber/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-amber/10 text-amber">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-muted-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-base font-semibold text-foreground sm:text-lg">
                        {s.title}
                      </h2>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                      {s.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Primary CTA */}
        <div className="mt-12 flex flex-col items-center text-center">
          <a
            href={PLATFORM_URL}
            className="cta-shimmer inline-flex items-center justify-center rounded-md bg-amber px-9 py-5 text-lg font-bold text-background shadow-[0_20px_60px_-15px_rgba(245,197,24,0.6)] transition hover:bg-amber-dim sm:text-xl"
          >
            Acessar a plataforma
          </a>

          <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
            <ShieldCheck className="h-4 w-4 text-amber" />
            Acesso vitalício · 7 dias de garantia
          </p>
        </div>

        {/* Support */}
        <div className="mt-16 rounded-lg border border-white/[0.06] bg-card/50 p-6 text-center">
          <h3 className="text-base font-semibold text-foreground">
            Precisa de ajuda?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Se não recebeu o e-mail em 5 minutos, escreva para{" "}
            <a
              href="mailto:ola@dramapt.com"
              className="font-medium text-amber underline-offset-4 hover:underline"
            >
              ola@dramapt.com
            </a>
            . Respondemos em menos de 24 horas.
          </p>
        </div>

        {/* Footer line */}
        <p className="mt-16 text-center text-[12px] text-white/35">
          © {new Date().getFullYear()} DramaPT · Feito para o Brasil{" "}
          <span aria-hidden>🇧🇷</span>
        </p>

        {/* Tiny back link */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-[12px] text-white/40 underline-offset-4 transition hover:text-white/70 hover:underline"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  )
}
