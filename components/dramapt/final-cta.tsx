import { ShieldCheck, Instagram, Youtube, Globe, Lock, Heart } from "lucide-react"
import { AnimatedGrid } from "./animated-grid"

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden bg-background py-32"
    >
      {/* Slow animated grid */}
      <div className="absolute inset-0 -z-10">
        <AnimatedGrid columns={8} speeds={[200, 240, 180, 260, 190, 220, 210, 250]} />
        <div className="absolute inset-0 bg-background/85" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, rgba(245,197,24,0.18), transparent 55%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-5 font-display text-sm tracking-[0.3em] text-amber">FINAL</p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Seu Próximo Episódio
            <br />
            Está <span className="italic text-amber">te Esperando.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Junte-se a mais de 14 mil mulheres que já descobriram o vício.
          </p>

        <a
          href="#oferta"
          className="cta-shimmer mt-10 inline-flex items-center justify-center rounded-md bg-amber px-9 py-5 text-lg font-bold text-background shadow-[0_20px_60px_-15px_rgba(245,197,24,0.6)] transition hover:bg-amber-dim sm:text-xl"
        >
          Começar Agora — R$9,90/mês →
        </a>

        <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
          <ShieldCheck className="h-4 w-4 text-amber" />
          7 dias de reembolso, sem burocracia
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  const linkClass =
    "text-[14px] text-white/50 transition-colors duration-200 hover:text-amber"
  const headingClass =
    "mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/25"

  return (
    <>
      {/* CTA strip above footer */}
      <section
        className="border-t border-white/[0.06] bg-[#111] py-10"
        aria-label="Última chamada para ação"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 text-center md:flex-row md:gap-6">
          <p className="text-base font-medium text-foreground md:text-lg">
            Ainda não tem acesso?
          </p>
          <a
            href="#oferta"
            className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-3 text-sm font-bold text-background transition hover:bg-amber-dim md:text-base"
          >
            Começar Agora — R$9,90/mês
          </a>
          <p className="inline-flex items-center gap-1.5 text-xs text-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-amber" />
            7 dias de garantia
          </p>
        </div>
      </section>

      {/* Main footer */}
      <footer className="border-t border-white/[0.08] bg-[#0a0a0a] pb-8 pt-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Coluna 1 — Marca */}
            <div className="sm:col-span-2 lg:col-span-1">
              <img
                src="/logo-dramapt.png"
                alt="DramaPT"
                width={140}
                height={48}
                className="h-11 w-auto"
              />
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/40">
                A plataforma de minisséries verticais em português.
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-200 hover:border-amber hover:bg-amber"
                >
                  <Instagram className="h-4 w-4 text-white transition-colors group-hover:text-background" strokeWidth={1.75} />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-200 hover:border-amber hover:bg-amber"
                >
                  {/* TikTok icon (lucide does not include) */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-white transition-colors group-hover:fill-background"
                    aria-hidden
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-200 hover:border-amber hover:bg-amber"
                >
                  <Youtube className="h-4 w-4 text-white transition-colors group-hover:text-background" strokeWidth={1.75} />
                </a>
              </div>
            </div>

            {/* Coluna 2 — Plataforma */}
            <div>
              <h3 className={headingClass}>Plataforma</h3>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#catalogo" className={linkClass}>Catálogo</a></li>
                <li><a href="#novidades" className={linkClass}>Novidades</a></li>
                <li><a href="#catalogo" className={linkClass}>Gêneros</a></li>
                <li><a href="#como-funciona" className={linkClass}>Como funciona</a></li>
                <li><a href="#oferta" className={linkClass}>Preços</a></li>
              </ul>
            </div>

            {/* Coluna 3 — Suporte */}
            <div>
              <h3 className={headingClass}>Suporte</h3>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#faq" className={linkClass}>FAQ</a></li>
                <li><a href="mailto:ola@dramapt.com" className={linkClass}>Contato</a></li>
                <li><a href="#" className={linkClass}>Termos de uso</a></li>
                <li><a href="#" className={linkClass}>Privacidade</a></li>
                <li><a href="#" className={linkClass}>Reembolsos</a></li>
              </ul>
            </div>

            {/* Coluna 4 — Disponível em */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className={headingClass}>Disponível no</h3>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Descarregar na App Store"
                  className="inline-block transition hover:opacity-80"
                >
                  <img
                    src="/badge-app-store.png"
                    alt="Download on the App Store"
                    width={135}
                    height={44}
                    className="h-11 w-auto"
                  />
                </a>
                <a
                  href="#"
                  aria-label="Disponível no Google Play"
                  className="inline-block transition hover:opacity-80"
                >
                  <img
                    src="/badge-google-play.png"
                    alt="Disponível no Google Play"
                    width={135}
                    height={44}
                    className="h-11 w-auto"
                  />
                </a>
              </div>

              <div className="mt-5">
                <p className="inline-flex items-center gap-1.5 text-[11px] text-white/40">
                  <Lock className="h-3 w-3 text-amber" strokeWidth={2} />
                  Pagamento 100% seguro
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2" aria-label="Métodos de pagamento aceites">
                  <span className="flex h-9 w-14 items-center justify-center rounded-md border border-white/10 bg-white px-2">
                    <img src="/pay-visa.png" alt="Visa" className="max-h-5 w-auto object-contain" />
                  </span>
                  <span className="flex h-9 w-20 items-center justify-center rounded-md border border-white/10 bg-white px-2">
                    <img src="/pay-multibanco.png" alt="Multibanco" className="max-h-5 w-auto object-contain" />
                  </span>
                  <span className="flex h-9 w-16 items-center justify-center rounded-md border border-white/10 bg-white px-2">
                    <img src="/pay-mbway.png" alt="MB WAY" className="max-h-6 w-auto object-contain" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-5 text-[12px] text-white/35 md:flex-row">
            <p>© {new Date().getFullYear()} DramaPT · Todos os direitos reservados</p>
            <p className="inline-flex items-center gap-1.5">
              Feito com <Heart className="h-3.5 w-3.5 fill-amber text-amber" /> para o Brasil
              <span className="ml-0.5">🇧🇷</span>
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-transparent px-2.5 py-1 transition hover:border-white/25 hover:text-white/70"
            >
              <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
              Português (BR)
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
