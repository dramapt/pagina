"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const h = document.documentElement
      const total = h.scrollHeight - h.clientHeight
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0
      setProgress(p)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      className="fixed left-0 right-0 z-40 h-[2px] bg-transparent"
      style={{ top: "var(--top-bar-h, 40px)" }}
    >
      <div
        className="h-full bg-amber transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
