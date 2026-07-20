import type { ReactNode } from "react"

/**
 * Refined square 52x52 icons with subtle DramaPT signature.
 * - Dark amber-tinted background, amber border at 30% opacity
 * - Outline-only SVG icons in amber (#F5C518), stroke 1.5
 * - Decorative diagonal line at bottom-right for depth
 * - Hover (parent .group): brighter background, brighter border, scaled icon
 */
function IconTile({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[10px] border bg-[#1a1400] transition-colors duration-200 group-hover:bg-[#2a1f00]"
      style={{ borderColor: "rgba(245,197,24,0.3)" }}
    >
      {/* Diagonal accent line for depth */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px right-0 h-px"
        style={{
          width: "140%",
          background: "rgba(245,197,24,0.18)",
          transform: "rotate(-45deg)",
          transformOrigin: "bottom right",
        }}
      />
      <div
        className="relative flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ color: "#F5C518" }}
      >
        {children}
      </div>
      {/* Brighter border on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[10px] border opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ borderColor: "rgba(245,197,24,0.7)" }}
      />
    </div>
  )
}

/* ============== FEATURES ============== */

// Eye with play triangle inside the pupil
export function PosterAlreadyWatched() {
  return (
    <IconTile>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M11 10.7v2.6l2.2-1.3z" fill="currentColor" stroke="none" />
      </svg>
    </IconTile>
  )
}

// Heart with wifi waves emanating from the top
export function PosterFoundIt() {
  return (
    <IconTile>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4.6c.9-.55 1.95-.85 3-.85s2.1.3 3 .85" opacity="0.6" />
        <path d="M7 2.9C8.5 2.05 10.2 1.6 12 1.6s3.5.45 5 1.3" opacity="0.32" />
        <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />
      </svg>
    </IconTile>
  )
}

// Speech bubble with simplified PT flag inside (vertical green/red bands)
export function PosterPortuguese() {
  return (
    <IconTile>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8 8 0 0 1-8 8H8.5L4.5 22v-3.4A8 8 0 0 1 13 3.5a8 8 0 0 1 8 8z" />
        {/* PT flag inside (vertical: green ~30%, red ~70%) */}
        <rect x="7.6" y="8.6" width="2.7" height="5.2" fill="#2E7D32" stroke="none" rx="0.4" />
        <rect x="10.3" y="8.6" width="6.1" height="5.2" fill="#D32F2F" stroke="none" rx="0.4" />
        <circle cx="10.3" cy="11.2" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    </IconTile>
  )
}

/* ============== HOW IT WORKS ============== */

// Unlocked padlock with infinity symbol inside
export function PosterUnlock() {
  return (
    <IconTile>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="11" width="15" height="10" rx="2" />
        <path d="M8 11V7.5a4 4 0 0 1 7-2.6" />
        {/* Infinity symbol inside body */}
        <path
          d="M9 16c0-.95.78-1.55 1.55-1.55.65 0 1.05.4 1.45.95.4-.55.8-.95 1.45-.95.77 0 1.55.6 1.55 1.55s-.78 1.55-1.55 1.55c-.65 0-1.05-.4-1.45-.95-.4.55-.8.95-1.45.95-.77 0-1.55-.6-1.55-1.55z"
          strokeWidth="1.3"
        />
      </svg>
    </IconTile>
  )
}

// Phone in front, tablet behind offset by 6px
export function PosterDevices() {
  return (
    <IconTile>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Tablet behind */}
        <rect x="3.5" y="3" width="11" height="14" rx="1.5" opacity="0.5" />
        {/* Phone in front, offset down/right */}
        <rect x="11" y="7" width="9" height="14" rx="1.8" fill="#1a1400" />
        <rect x="11" y="7" width="9" height="14" rx="1.8" />
        <line x1="13" y1="11" x2="18" y2="11" strokeWidth="1.2" />
        <line x1="13" y1="13.5" x2="17" y2="13.5" strokeWidth="1.2" opacity="0.6" />
        <line x1="14" y1="18.5" x2="17" y2="18.5" strokeWidth="1.2" />
      </svg>
    </IconTile>
  )
}

// Large play triangle with lightning bolt overlay
export function PosterFastStart() {
  return (
    <IconTile>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4.5v15l13-7.5z" />
        {/* Lightning bolt centered, masked with bg color */}
        <path
          d="M11.6 7.8 8.9 12.5h2.3l-1.5 4.1 4-4.8h-2.4z"
          fill="#1a1400"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    </IconTile>
  )
}
