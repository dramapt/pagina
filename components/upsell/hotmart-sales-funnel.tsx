"use client"

import { useEffect, useId, useRef } from "react"

declare global {
  interface Window {
    checkoutElements?: {
      init: (type: string) => { mount: (selector: string) => void }
    }
  }
}

const SCRIPT_SRC = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"

let scriptPromise: Promise<void> | null = null

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.checkoutElements) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    )
    if (existing) {
      existing.addEventListener("load", () => resolve())
      existing.addEventListener("error", () => reject())
      return
    }
    const s = document.createElement("script")
    s.src = SCRIPT_SRC
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject()
    document.head.appendChild(s)
  })

  return scriptPromise
}

interface Props {
  className?: string
}

export function HotmartSalesFunnel({ className }: Props) {
  const reactId = useId()
  const containerId = `hotmart-sales-funnel-${reactId.replace(/:/g, "")}`
  const mountedRef = useRef(false)

  useEffect(() => {
    let cancelled = false
    loadScript()
      .then(() => {
        if (cancelled || mountedRef.current) return
        if (!window.checkoutElements) return
        try {
          window.checkoutElements.init("salesFunnel").mount(`#${containerId}`)
          mountedRef.current = true
        } catch (err) {
          console.error("[v0] Hotmart salesFunnel mount error:", err)
        }
      })
      .catch((err) => {
        console.error("[v0] Failed to load Hotmart checkout-elements script:", err)
      })

    return () => {
      cancelled = true
    }
  }, [containerId])

  return <div id={containerId} className={className} />
}
