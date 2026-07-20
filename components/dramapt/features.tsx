import { Reveal } from "./reveal"
import { PosterAlreadyWatched, PosterFoundIt } from "./poster-icons"

const features = [
  {
    icon: <PosterAlreadyWatched />,
    title: "Já Vi em Português",
    desc: "Todas as histórias têm um fim... mas você pode rever quando quiser.",
  },
  {
    icon: <PosterFoundIt />,
    title: "Você Andava Procurando Isto",
    desc: "Se você é fã de YouTube, TikTok, k-dramas ou séries curtas — isso é para você, em português.",
  },
  {
    icon: (
      <span className="flex h-13 w-13 items-center justify-center" style={{ width: 52, height: 52 }}>
        <img
          src="/flag-br.svg"
          alt="Bandeira do Brasil"
          className="h-9 w-[54px] rounded-md object-cover shadow-sm ring-1 ring-white/10"
        />
      </span>
    ),
    title: "Finalmente em Português",
    desc: "Sem legendas travando a imersão. Conteúdo real, em português do Brasil.",
  },
]

export function Features() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-amber">PORQUÊ DRAMAPT</p>
          <h2 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Construído para o seu vício.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/8 bg-card p-7 transition hover:border-amber/40 hover:bg-elevated">
                <div className="mb-4 self-start">{f.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.desc}</p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber/5 blur-2xl transition group-hover:bg-amber/15"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
