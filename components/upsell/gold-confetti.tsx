"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
}

export function GoldConfetti({ count = 26 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 3 + Math.random() * 5,
      duration: 9 + Math.random() * 8,
      delay: -Math.random() * 12,
      drift: (Math.random() - 0.5) * 60,
    }))
    setParticles(arr)
  }, [count])

  useEffect(() => {
    let timeout: number | undefined
    const onScroll = () => {
      setPaused(true)
      if (timeout) window.clearTimeout(timeout)
      timeout = window.setTimeout(() => {
        if (window.scrollY < 80) setPaused(false)
      }, 350)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (timeout) window.clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ animationPlayState: paused ? "paused" : "running" }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-dot"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              animationPlayState: paused ? "paused" : "running",
              ["--drift" as string]: `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
      <style jsx>{`
        .confetti-dot {
          position: absolute;
          top: -20px;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 30% 30%,
            #f0d075,
            #d4a843 60%,
            #8a6d22 100%
          );
          opacity: 0.6;
          box-shadow: 0 0 6px rgba(212, 168, 67, 0.5);
          animation-name: confetti-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @keyframes confetti-fall {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.65;
          }
          90% {
            opacity: 0.55;
          }
          100% {
            transform: translate3d(var(--drift), 110vh, 0) rotate(540deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
