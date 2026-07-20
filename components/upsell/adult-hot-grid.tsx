"use client"

import { motion } from "framer-motion"
import { Lock } from "lucide-react"

const HOT_TITLES = [
  { title: "Desejando O Irmão Errado", cover: "/capas-hot/01-desejando-irmao-errado.jpg" },
  { title: "Refém Do Chefão Da Máfia", cover: "/capas-hot/02-refem-chefao-mafia.jpg" },
  { title: "Já Que Você Nunca Foi Minha", cover: "/capas-hot/03-nunca-foi-minha.jpeg" },
  { title: "Render-se Ao Meu Professor", cover: "/capas-hot/04-render-se-professor.jpeg" },
  { title: "Sexo Para Reatar", cover: "/capas-hot/05-sexo-para-reatar.jpeg" },
  { title: "Jogo De Sedução", cover: "/capas-hot/06-jogo-seducao.jpg" },
  { title: "O Pai Do Meu Namorado É Meu Patrocinador", cover: "/capas-hot/07-pai-namorado-patrocinador.jpg" },
  { title: "Noivo Do Inimigo", cover: "/capas-hot/08-noivo-inimigo.jpeg" },
  { title: "Grávida Pelo Pai Do Meu Ex", cover: "/capas-hot/09-gravida-pai-do-ex.jpeg" },
  { title: "Excitar A Esposa Virgem Do Mafioso", cover: "/capas-hot/10-excitar-esposa-virgem-mafioso.jpeg" },
  { title: "Sr. Denver", cover: "/capas-hot/11-sr-denver.jpeg" },
  { title: "Banho Gelado", cover: "/capas-hot/12-banho-gelado.jpeg" },
  { title: "A Nerd E O Acompanhante", cover: "/capas-hot/13-nerd-acompanhante.jpeg" },
]

export function AdultHotGrid() {
  return (
    <section className="grain-noir relative overflow-hidden bg-noir-surface px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em]" style={{ color: "#DC2626" }}>
              🔥 Hot
            </p>
            <h2 className="mt-2 font-cormorant text-3xl font-bold text-ivory sm:text-4xl">
              {HOT_TITLES.length} títulos liberados sem censura
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {HOT_TITLES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative aspect-[2/3] overflow-hidden rounded-lg"
              style={{ border: "1px solid rgba(220,38,38,0.2)" }}
            >
              <img
                src={s.cover}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: "brightness(0.6) saturate(1.15)" }}
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,6,6,0.95) 0%, rgba(13,6,6,0.25) 55%, transparent 100%)",
                }}
              />
              <span
                className="absolute left-2 top-2 rounded-sm font-display text-[9px] font-bold uppercase tracking-wider text-ivory"
                style={{ background: "#DC2626", padding: "2px 6px" }}
              >
                +18
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-90">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ background: "rgba(13,6,6,0.7)", border: "1px solid rgba(220,38,38,0.5)" }}
                >
                  <Lock className="h-4 w-4" style={{ color: "#DC2626" }} />
                </span>
              </div>
              <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-2.5 font-lora text-[12px] italic leading-tight text-ivory/85">
                {s.title}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center font-lora text-[12px] italic" style={{ color: "#8A7A7A" }}>
          As cenas completas sem censura são liberadas após a compra.
        </p>
      </div>
    </section>
  )
}
