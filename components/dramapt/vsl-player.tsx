"use client"

import { useEffect, useState } from "react"

// Truque anterior (src="about:blank" + onLoad para trocar o src) era frágil:
// em vários navegadores mobile (Safari/iOS em especial) o evento "load" de um
// iframe about:blank nem sempre dispara de forma confiável, deixando o player
// permanentemente em branco. Aqui montamos o src real diretamente no cliente.
export function VslPlayer() {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    setSrc(
      "https://scripts.converteai.net/8dcf496c-08d2-4374-81a3-5e67ad107ffd/players/6a5e661acad645d973c5b4f6/v4/embed.html" +
        (window.location.search || "?") +
        "&vl=" +
        encodeURIComponent(window.location.href),
    )
  }, [])

  return (
    <div
      id="ifr_6a5e661acad645d973c5b4f6_wrapper"
      style={{ margin: "0 auto", width: "100%", maxWidth: 460 }}
    >
      <div
        style={{ position: "relative", paddingTop: "177.77777777777777%" }}
        id="ifr_6a5e661acad645d973c5b4f6_aspect"
      >
        {src && (
          <iframe
            frameBorder={0}
            allowFullScreen
            src={src}
            id="ifr_6a5e661acad645d973c5b4f6"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            referrerPolicy="origin"
          />
        )}
      </div>
    </div>
  )
}
