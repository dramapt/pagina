import { Lock } from "lucide-react"

export function GuaranteeLine({ className = "" }: { className?: string }) {
  return (
    <p
      className={`mt-2 inline-flex items-center justify-center gap-1.5 text-[12px] text-muted ${className}`}
    >
      <Lock className="h-3 w-3 text-amber" />
      Pagamento seguro · 7 dias de reembolso · Sem burocracia
    </p>
  )
}
