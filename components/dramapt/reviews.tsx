import { Star } from "lucide-react"
import { Reveal } from "./reveal"

const featured = {
  name: "Inês Carvalho",
  city: "São Paulo",
  avatar: "/pessoas/p13.webp",
  rating: 5,
  text: "Comecei à hora do almoço e acabei vendo até às 3 da manhã. Não consigo parar. É como ter um Netflix só meu, todo em português, com séries curtinhas perfeitas para entre tarefas. Vale cada centavo.",
}

const reviews = [
  {
    name: "Margarida Sousa",
    city: "Rio de Janeiro",
    avatar: "/pessoas/p1.jpg",
    rating: 5,
    text: "Finalmente uma plataforma toda em português! As histórias me prendem logo no primeiro minuto.",
  },
  {
    name: "Beatriz Lopes",
    city: "Belo Horizonte",
    avatar: "/pessoas/p10.jpg",
    rating: 5,
    text: "Já paguei muito mais por menos. Acesso vitalício foi a melhor decisão. Vejo no ônibus todos os dias.",
  },
  {
    name: "Catarina Mendes",
    city: "Curitiba",
    avatar: "/pessoas/p3.jpg",
    rating: 5,
    text: "Os thrillers são viciantes. Terminei uma série de 24 episódios em dois dias. Sem arrependimentos.",
  },
  {
    name: "Joana Ferreira",
    city: "Salvador",
    avatar: "/pessoas/p6.jpg",
    rating: 5,
    text: "Perfeito para quando tenho 3 minutos. Já recomendei para todas as amigas. Todas viciadas.",
  },
  {
    name: "Sofia Almeida",
    city: "Porto Alegre",
    avatar: "/pessoas/p8.jpg",
    rating: 5,
    text: "A série A Beleza Na Dor me deixou sem dormir. Já estou na segunda maratona.",
  },
  {
    name: "Rita Pinto",
    city: "Recife",
    avatar: "/pessoas/p13.webp",
    rating: 4,
    text: "Adoro a variedade de gêneros. Romance, vingança, drama — tem tudo. E tudo curtinho.",
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < n ? "fill-amber text-amber" : "text-muted-2"}`}
        />
      ))}
    </div>
  )
}

function Avatar({ src, alt, size = 36 }: { src: string; alt: string; size?: number }) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className="shrink-0 rounded-full object-cover ring-2 ring-amber/30"
      style={{ width: size, height: size }}
    />
  )
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <article className="mx-3 w-72 shrink-0 rounded-xl border border-white/5 bg-[#161616] p-4">
      <div className="mb-3 flex items-center gap-3">
        <Avatar src={r.avatar} alt={r.name} size={40} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{r.name}</p>
          <p className="text-xs text-muted">{r.city}</p>
        </div>
      </div>
      <Stars n={r.rating} />
      <p className="mt-3 text-sm leading-relaxed text-foreground/85">{r.text}</p>
    </article>
  )
}

export function Reviews() {
  // Duplicate the deck so the marquee loops seamlessly at -50%
  const looped = [...reviews, ...reviews]

  return (
    <section className="bg-background py-24" id="reviews">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-amber">DEPOIMENTOS</p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Já Viram. Já Ficaram Viciadas.
          </h2>
        </Reveal>

        {/* Featured big quote */}
        <Reveal className="mx-auto mt-14 max-w-3xl rounded-2xl border border-amber/20 bg-card p-8 sm:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Avatar src={featured.avatar} alt={featured.name} size={64} />
            <div className="flex-1">
              <Stars n={featured.rating} />
              <p className="mt-2 text-base font-semibold text-foreground">
                {featured.name} <span className="text-muted">· {featured.city}</span>
              </p>
            </div>
          </div>
          <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
        </Reveal>
      </div>

      {/* Marquee — full width */}
      <div className="mt-12 overflow-hidden">
        <div
          className="flex"
          style={{
            width: "max-content",
            animation: "marquee 25s linear infinite",
          }}
        >
          {looped.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
