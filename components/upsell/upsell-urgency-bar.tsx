"use client"

export function UpsellUrgencyBar() {
  return (
    <div
      className="relative w-full"
      style={{
        background: "#0D0D1C",
        borderTop: "1px solid rgba(231,76,60,0.18)",
        borderBottom: "1px solid rgba(231,76,60,0.18)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-center gap-3 px-4 text-center">
        <span className="red-pulse inline-block h-2 w-2 rounded-full bg-crimson-bright" />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-noir-muted sm:text-xs">
          Esta oferta só existe nesta página · Quando você sair desaparece para sempre
        </p>
      </div>
    </div>
  )
}
