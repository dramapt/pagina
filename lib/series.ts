export type Genre = "Romance" | "Thriller" | "Drama" | "Vingança" | "CEO"

export type Series = {
  id: string
  title: string
  genre: Genre
  episodes: number
  cover: string
  synopsis?: string
  rating?: number
  hot?: boolean
  new?: boolean
}

export const defaultSynopsis: Record<Genre, string> = {
  Romance: "Um amor improvável que renasce das cinzas — emoções intensas e finais que ninguém viu chegar.",
  Vingança: "Quando a humilhação é demais, o silêncio dá lugar à revanche. Servida fria, sem aviso.",
  CEO: "Ela trabalha para ele. Ninguém devia descobrir o segredo. Acabaram de descobrir.",
  Drama: "A vida muda num segundo. E o que parecia perdido, transforma-se em tudo.",
  Thriller: "Cada minuto conta. Cada decisão pode ser a última. E a verdade chega tarde demais.",
}

export function getSynopsis(s: Series): string {
  return s.synopsis ?? defaultSynopsis[s.genre]
}

export function getRating(s: Series): number {
  if (s.rating) return s.rating
  // Deterministic pseudo-rating between 4.4 and 4.9 based on id
  const sum = s.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0)
  return 4.4 + ((sum % 6) * 0.1)
}

export const series: Series[] = [
  {
    id: "99a-prova",
    title: "A 99ª Prova De Um Amor Superado",
    genre: "Romance",
    episodes: 99,
    cover: "/capas/01-99a-prova.jpg",
    hot: true,
  },
  {
    id: "beleza-na-dor",
    title: "A Beleza Na Dor",
    genre: "Drama",
    episodes: 64,
    cover: "/capas/02-beleza-na-dor.jpg",
  },
  {
    id: "namorada-paga",
    title: "A Namorada Paga é Minha Chefona",
    genre: "CEO",
    episodes: 78,
    cover: "/capas/03-namorada-paga.jpg",
    new: true,
  },
  {
    id: "rainha-vinganca",
    title: "A Rainha da Vingança",
    genre: "Vingança",
    episodes: 88,
    cover: "/capas/04-rainha-vinganca.jpg",
    hot: true,
  },
  {
    id: "serpente-coracao",
    title: "A Serpente Do Meu Coração",
    genre: "Thriller",
    episodes: 72,
    cover: "/capas/05-serpente-coracao.jpg",
  },
  {
    id: "ultima-ceia",
    title: "A Última Ceia",
    genre: "Vingança",
    episodes: 56,
    cover: "/capas/06-ultima-ceia.jpg",
  },
  {
    id: "vida-brilha",
    title: "A Vida Que Brilha Por Si Mesma",
    genre: "Drama",
    episodes: 80,
    cover: "/capas/07-vida-brilha.jpg",
  },
  {
    id: "amor-dos-jogos",
    title: "Amor Dos Jogos",
    genre: "Romance",
    episodes: 68,
    cover: "/capas/08-amor-dos-jogos.jpg",
  },
  {
    id: "amor-nota-bolsa",
    title: "Amor, Nota E Bolsa",
    genre: "Romance",
    episodes: 60,
    cover: "/capas/09-amor-nota-bolsa.jpg",
    new: true,
  },
  {
    id: "anos-teclado",
    title: "Anos no Teclado, Poder nas Mãos",
    genre: "Drama",
    episodes: 84,
    cover: "/capas/10-anos-teclado.jpg",
  },
  {
    id: "duas-dores",
    title: "As Duas Dores e a Única Saudade",
    genre: "Drama",
    episodes: 70,
    cover: "/capas/11-duas-dores.jpg",
  },
  {
    id: "bilionario-secreto",
    title: "Casei Com Um Bilionário Secreto",
    genre: "CEO",
    episodes: 92,
    cover: "/capas/12-bilionario-secreto.jpg",
    hot: true,
  },
  {
    id: "confronto-roteiro",
    title: "Confronto, O Roteiro: Encontro O Amor",
    genre: "Romance",
    episodes: 58,
    cover: "/capas/13-confronto-roteiro.jpg",
  },
  {
    id: "gorducha-arrasadora",
    title: "De Gorducha A Arrasadora",
    genre: "Drama",
    episodes: 76,
    cover: "/capas/14-gorducha-arrasadora.jpg",
  },
  {
    id: "vila-odio",
    title: "De Volta à Vila Do Ódio",
    genre: "Vingança",
    episodes: 82,
    cover: "/capas/15-vila-odio.jpg",
  },
  {
    id: "depois-chuva",
    title: "Depois da Chuva, Não Houve Reencontro",
    genre: "Romance",
    episodes: 66,
    cover: "/capas/16-depois-chuva.jpg",
  },
  {
    id: "demitido-temido",
    title: "Do Demitido Ao Temido",
    genre: "Vingança",
    episodes: 90,
    cover: "/capas/17-demitido-temido.jpg",
    hot: true,
  },
  {
    id: "efetivada-gravida",
    title: "Efetivada, Grávida E Casada Com Meu CEO",
    genre: "CEO",
    episodes: 86,
    cover: "/capas/18-efetivada-gravida.jpg",
    new: true,
  },
  {
    id: "jantar-humilhacao",
    title: "Jantar, Humilhação E Vingança",
    genre: "Vingança",
    episodes: 74,
    cover: "/capas/19-jantar-humilhacao.jpg",
  },
  {
    id: "mais-irma",
    title: "Mais Do Que Apenas A Irmã Dele",
    genre: "Romance",
    episodes: 62,
    cover: "/capas/20-mais-irma.jpg",
  },
  {
    id: "marido-razao",
    title: "Marido Dono Da Razão",
    genre: "Drama",
    episodes: 68,
    cover: "/capas/21-marido-razao.jpg",
  },
  {
    id: "me-joga-trapo",
    title: "Me Joga Como Trapo, Eu Assumo O Manto",
    genre: "Vingança",
    episodes: 94,
    cover: "/capas/22-me-joga-trapo.jpg",
  },
  {
    id: "exmulher-floresce",
    title: "Minha Ex-mulher Floresce Após Divórcio",
    genre: "Drama",
    episodes: 80,
    cover: "/capas/23-exmulher-floresce.jpg",
    hot: true,
  },
  {
    id: "identidades-expostas",
    title: "Nossas Identidades Expostas",
    genre: "Thriller",
    episodes: 72,
    cover: "/capas/24-identidades-expostas.jpg",
  },
  {
    id: "despertar-genio",
    title: "O Despertar Do Gênio",
    genre: "Drama",
    episodes: 78,
    cover: "/capas/25-despertar-genio.jpg",
  },
  {
    id: "guerreiro-fronteira",
    title: "O Guerreiro da Fronteira",
    genre: "Thriller",
    episodes: 66,
    cover: "/capas/26-guerreiro-fronteira.jpg",
  },
  {
    id: "renascimento-irma",
    title: "O Renascimento Da Irmã",
    genre: "Vingança",
    episodes: 88,
    cover: "/capas/27-renascimento-irma.jpg",
  },
  {
    id: "segredo-bebe",
    title: "O Segredo que Só o Bebê Sabia",
    genre: "Romance",
    episodes: 70,
    cover: "/capas/28-segredo-bebe.jpg",
  },
  {
    id: "partir-sem-olhar",
    title: "Partir Sem Olhar para Trás",
    genre: "Drama",
    episodes: 64,
    cover: "/capas/29-partir-sem-olhar.jpg",
  },
  {
    id: "sem-perdao",
    title: "Sem Perdão, Agora Pertenço A Ele",
    genre: "Romance",
    episodes: 82,
    cover: "/capas/30-sem-perdao.jpg",
    new: true,
  },
  {
    id: "sussurros-mortos",
    title: "Sussurros Dos Mortos: Sapato Mortal",
    genre: "Thriller",
    episodes: 60,
    cover: "/capas/31-sussurros-mortos.jpg",
  },
  {
    id: "vinganca-perfume",
    title: "Vingança Com Perfume",
    genre: "Vingança",
    episodes: 76,
    cover: "/capas/32-vinganca-perfume.jpg",
    hot: true,
  },
]
