"use client"

import { series } from "@/lib/series"

/**
 * Infinite vertical-scrolling thumbnail grid.
 * 5 columns with alternating directions and varying speeds.
 */
export function AnimatedGrid({
  columns = 5,
  speeds = [28, 40, 22, 35, 30, 26, 33],
  className = "",
}: {
  columns?: number
  speeds?: number[]
  className?: string
}) {
  const cols = Array.from({ length: columns }).map((_, c) => {
    const offset = (c * 4) % series.length
    const base = [...series.slice(offset), ...series.slice(0, offset)]
    // Duplicate the deck twice for a seamless -50% loop
    const looped = [...base, ...base]
    const speed = speeds[c % speeds.length]
    // Odd columns scroll up (normal: 0 -> -50%), even columns scroll down (reverse)
    const direction: "normal" | "reverse" = c % 2 === 0 ? "normal" : "reverse"
    return { id: c, items: looped, speed, direction }
  })

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="grid h-full w-full gap-2 p-2"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }}
      >
        {cols.map((col) => (
          <div key={col.id} className="relative h-full overflow-hidden">
            <div
              className="flex flex-col gap-2"
              style={{
                animation: `grid-scroll ${col.speed}s linear infinite`,
                animationDirection: col.direction,
                willChange: "transform",
              }}
            >
              {col.items.map((s, i) => (
                <div
                  key={`${col.id}-${s.id}-${i}`}
                  className="aspect-[9/16] w-full shrink-0 overflow-hidden rounded-md bg-elevated"
                >
                  <img
                    src={s.cover || "/placeholder.svg"}
                    alt=""
                    loading={i < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
