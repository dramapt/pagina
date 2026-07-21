"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

const CHECKOUT_HOST = "go.perfectpay.com.br"
const FLAG_KEY = "dramapt_checkout_started_v1"
const FIRED_KEY = "dramapt_back_redirect_fired_v1"
const BACK_PATH = "/oferta-especial"

/**
 * Mounts ONCE on the sales page (home).
 * Three behaviours:
 *  1. Click on any anchor that points to the Hotmart checkout: stay on the SAME tab
 *     (so we can detect the return) and mark a sessionStorage flag.
 *  2. When the user returns to the page (pageshow / visibilitychange) after the flag
 *     was set, redirect to /oferta-especial.
 *  3. Exit-intent (desktop mouseleave at top + mobile pagehide/visibilitychange after
 *     30s of engagement) — also redirects to /oferta-especial.
 *
 * Only runs on the home page; never fires on /oferta-especial itself or on /obrigado.
 */
export function BackRedirectGuard() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return
    // Never run on the back-redirect page or on thank-you / disabled paths.
    if (pathname === BACK_PATH || pathname?.startsWith("/obrigado")) return

    // ----- helpers -----
    const isFired = () => sessionStorage.getItem(FIRED_KEY) === "1"
    const fire = (reason: string) => {
      if (isFired()) return
      sessionStorage.setItem(FIRED_KEY, "1")
      // Use replace so the back button does not loop the user back to checkout.
      try {
        router.replace(BACK_PATH)
      } catch {
        window.location.replace(BACK_PATH)
      }
      // small breadcrumb for debugging
      console.log("[v0] back-redirect fired:", reason)
    }

    // ----- 1) Intercept Hotmart checkout clicks -----
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest("a") as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute("href") || ""
      if (!href.includes(CHECKOUT_HOST)) return

      // Force same-tab navigation so we can detect the return via pageshow.
      // (Hotmart links currently use target="_blank"; we override here.)
      if (anchor.target && anchor.target !== "_self") {
        e.preventDefault()
        sessionStorage.setItem(FLAG_KEY, Date.now().toString())
        window.location.href = anchor.href
        return
      }

      sessionStorage.setItem(FLAG_KEY, Date.now().toString())
    }
    document.addEventListener("click", onClick, true)

    // ----- 2) Detect return from checkout -----
    function maybeFireOnReturn() {
      const stamp = sessionStorage.getItem(FLAG_KEY)
      if (!stamp) return
      const startedAt = Number.parseInt(stamp, 10)
      // Only treat as a real "return" if at least 4s elapsed (avoids accidental
      // fires from quick navigations) and at most 60min.
      const elapsed = Date.now() - startedAt
      if (elapsed < 4000 || elapsed > 60 * 60 * 1000) return
      sessionStorage.removeItem(FLAG_KEY)
      fire("returned-from-checkout")
    }
    function onPageShow(e: PageTransitionEvent) {
      // bfcache restore or normal navigation back
      if (e.persisted || performance.getEntriesByType("navigation")[0]) {
        maybeFireOnReturn()
      } else {
        maybeFireOnReturn()
      }
    }
    function onVisibility() {
      if (document.visibilityState === "visible") maybeFireOnReturn()
    }
    window.addEventListener("pageshow", onPageShow)
    document.addEventListener("visibilitychange", onVisibility)

    // ----- 3) Exit intent (desktop) -----
    let armed = false
    let suppressMouseLeaveUntil = 0
    const armTimer = window.setTimeout(() => {
      armed = true
    }, 8000) // arm after 8s on the page

    // Suppress mouseleave-based exit intent right after an in-page anchor click,
    // because the smooth scroll can move the cursor close to the viewport top.
    function onAnchorClickSuppress(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute("href") || ""
      if (href.startsWith("#")) {
        suppressMouseLeaveUntil = Date.now() + 2500
      }
    }
    document.addEventListener("click", onAnchorClickSuppress, true)

    function onMouseLeave(e: MouseEvent) {
      if (!armed || isFired()) return
      if (Date.now() < suppressMouseLeaveUntil) return
      // top of the viewport
      if (e.clientY <= 2 && (e.relatedTarget === null || (e.relatedTarget as Node)?.nodeName === "HTML")) {
        fire("exit-intent-desktop")
      }
    }
    document.addEventListener("mouseleave", onMouseLeave)

    // ----- 3b) Exit intent (mobile) — back gesture -----
    // When the user presses the OS back button on mobile, popstate fires.
    // We push a sentinel state so the FIRST back press triggers the redirect
    // instead of leaving the site.
    const SENTINEL = "__dramapt_guard__"
    let lastPathname = window.location.pathname
    if (!window.history.state || window.history.state.guard !== SENTINEL) {
      window.history.pushState({ guard: SENTINEL }, "", window.location.href)
    }
    function onPopState() {
      if (isFired()) return
      // Ignore hash-only navigations (anchor links #oferta etc).
      // We only treat real pathname changes as a true back-navigation attempt.
      const currentPathname = window.location.pathname
      if (currentPathname === lastPathname) {
        // Hash change within the same page — re-push the sentinel and bail.
        window.history.pushState({ guard: SENTINEL }, "", window.location.href)
        return
      }
      lastPathname = currentPathname
      // Re-push so a second back press still works on /oferta-especial side.
      window.history.pushState({ guard: SENTINEL }, "", window.location.href)
      fire("exit-intent-back-button")
    }
    window.addEventListener("popstate", onPopState)

    return () => {
      window.clearTimeout(armTimer)
      document.removeEventListener("click", onClick, true)
      document.removeEventListener("click", onAnchorClickSuppress, true)
      window.removeEventListener("pageshow", onPageShow)
      document.removeEventListener("visibilitychange", onVisibility)
      document.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("popstate", onPopState)
    }
  }, [pathname, router])

  return null
}
