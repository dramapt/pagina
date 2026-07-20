"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

type Toast = {
  id: number
  avatar: string
  name: string
  city: string
  action: string
}

function getInitials(name: string) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("")
}

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #F5C518, #C28E0E)",
  "linear-gradient(135deg, #8B5CF6, #5B21B6)",
  "linear-gradient(135deg, #10B981, #047857)",
  "linear-gradient(135deg, #EF4444, #991B1B)",
  "linear-gradient(135deg, #3B82F6, #1E40AF)",
  "linear-gradient(135deg, #EC4899, #9D174D)",
]

function gradientFor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0
  return AVATAR_GRADIENTS[hash % AVATAR_GRADIENTS.length]
}

function Avatar({ src, name }: { src: string; name: string }) {
  const [errored, setErrored] = useState(false)
  const initials = getInitials(name)
  if (errored) {
    return (
      <div
        aria-label={name}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white ring-2 ring-amber/30"
        style={{ background: gradientFor(name) }}
      >
        {initials}
      </div>
    )
  }
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={name}
      width={36}
      height={36}
      onError={() => setErrored(true)}
      className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-amber/30"
    />
  )
}

const POOL: Omit<Toast, "id">[] = [
  { avatar: "/pessoas/p1.jpg", name: "Mariana F.", city: "São Paulo", action: "acabou de entrar" },
  { avatar: "/pessoas/p3.jpg", name: "Sofia R.", city: "Rio de Janeiro", action: "está vendo A Rainha da Vingança" },
  { avatar: "/pessoas/p13.webp", name: "Catarina M.", city: "Belo Horizonte", action: "comprou acesso vitalício" },
  { avatar: "/pessoas/p4.jpg", name: "Tiago L.", city: "Curitiba", action: "começou a 5ª série esta semana" },
  { avatar: "/pessoas/p6.jpg", name: "Beatriz C.", city: "Salvador", action: "ficou viciada em Sussurros Dos Mortos" },
  { avatar: "/pessoas/p2.jpg", name: "Pedro T.", city: "Fortaleza", action: "acabou de entrar" },
  { avatar: "/pessoas/p8.jpg", name: "Rita P.", city: "Recife", action: "viu 3 episódios seguidos" },
  { avatar: "/pessoas/p11.jpg", name: "João M.", city: "Porto Alegre", action: "comprou acesso vitalício" },
  { avatar: "/pessoas/p10.jpg", name: "Patrícia V.", city: "Brasília", action: "está vendo Casei Com Um Bilionário Secreto" },
  { avatar: "/pessoas/p12.jpg", name: "Bruno N.", city: "Manaus", action: "acabou de entrar" },
]

export function LiveToasts() {
  const [current, setCurrent] = useState<Toast | null>(null)

  useEffect(() => {
    let mounted = true
    let timeoutId: ReturnType<typeof setTimeout>

    function pickAndShow() {
      if (!mounted) return
      const item = POOL[Math.floor(Math.random() * POOL.length)]
      const t: Toast = { ...item, id: Date.now() }
      setCurrent(t)
      // Remove after 4s
      const removeAfter = setTimeout(() => {
        if (!mounted) return
        setCurrent(null)
      }, 4000)
      // Schedule next 12-20s after this appears
      const next = 4500 + Math.random() * 8000
      timeoutId = setTimeout(pickAndShow, next + 1000)
      return () => clearTimeout(removeAfter)
    }

    // First toast after a small delay
    timeoutId = setTimeout(pickAndShow, 6000)
    return () => {
      mounted = false
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed left-3 top-20 z-30 sm:bottom-6 sm:left-5 sm:top-auto">
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex w-[300px] max-w-[calc(100vw-32px)] items-center gap-3 rounded-xl border border-white/10 bg-[#161616]/95 p-3 backdrop-blur-md"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}
          >
            <Avatar src={current.avatar} name={current.name} />
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-foreground">
                {current.name} <span className="font-normal text-muted">· {current.city}</span>
              </p>
              <p className="line-clamp-1 text-[12px] text-muted-2">{current.action}</p>
            </div>
            <div className="shrink-0">
              <span className="block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
