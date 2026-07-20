"use client"

import { useEffect } from "react"

// Destino para onde o utilizador é enviado ao tentar sair (botão "voltar").
const BACK_REDIRECT_URL = "https://www.dramapt.vip/"

export function ExitBackRedirect() {
  useEffect(() => {
    let urlBackRedirect =
      BACK_REDIRECT_URL.trim() +
      (BACK_REDIRECT_URL.indexOf("?") > 0 ? "&" : "?") +
      document.location.search.replace("?", "").toString()

    history.pushState({}, "", location.href)
    history.pushState({}, "", location.href)
    history.pushState({}, "", location.href)

    function onPopState() {
      console.log("[v0] onpopstate back-redirect", urlBackRedirect)
      setTimeout(() => {
        location.href = urlBackRedirect
      }, 1)
    }

    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  return null
}
