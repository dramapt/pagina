export function UpsellFooter() {
  return (
    <footer className="border-t border-gold/10 bg-noir px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-lg tracking-[0.18em] text-gold">
          DramaPT
        </span>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-lora text-xs text-noir-muted">
          <a href="#" className="transition hover:text-ivory">
            Termos
          </a>
          <a href="#" className="transition hover:text-ivory">
            Privacidade
          </a>
          <a href="#" className="transition hover:text-ivory">
            Contato
          </a>
        </nav>
        <p className="font-lora text-[11px] text-noir-muted">
          © 2025 DramaPT · Feito no Brasil 🇧🇷
        </p>
      </div>
    </footer>
  )
}
