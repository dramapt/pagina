"use client"

import { motion } from "framer-motion"

export function PersonalLetter() {
  return (
    <section className="relative isolate overflow-hidden bg-noir-surface py-20 sm:py-28">
      {/* paper-like vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(212,168,67,0.06), transparent 70%)",
        }}
      />
      <div className="grain-noir absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Letter header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-gold/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80">
            Carta da Sofia
          </span>
          <span className="h-px flex-1 bg-gold/20" />
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="br-letter space-y-6 px-2 font-lora text-base leading-relaxed text-ivory/85 sm:px-0 sm:text-lg sm:leading-[1.8]"
        >
          <p className="font-cormorant text-2xl italic text-gold sm:text-3xl">
            Olá, você.
          </p>

          <p>
            Pode ser que você esteja com pressa. Pode ser que tenha clicado
            sem querer. Pode ser que tenha pensado &ldquo;mais uma plataforma de
            streaming, sei lá&rdquo; — e fechou a aba.
          </p>

          <p>
            Eu entendo. Eu também faço isso, no meu celular, deitada na
            cama, às onze da noite, depois de um dia em que a única coisa que
            quero é{" "}
            <span className="italic text-gold">desligar o cérebro</span> e
            sentir <span className="italic text-gold">qualquer coisa</span> que
            não seja a vida real.
          </p>

          <p className="text-pretty">
            Por isso fizemos a DramaPT. Não para te dar mais 50 horas de
            série coreana com 300 episódios. Não para te dar &ldquo;conteúdo&rdquo;.{" "}
            <span className="font-bold text-ivory">
              Para te dar pequenos vícios de 90 minutos
            </span>{" "}
            — em português, em vertical, escritos para te fisgarem no
            terceiro segundo e te soltarem no episódio 87 com vontade de
            chorar e de começar outra em seguida.
          </p>

          {/* Highlighted pull quote */}
          <blockquote className="my-10 border-l-2 border-gold/60 pl-6">
            <p className="font-cormorant text-2xl italic leading-snug text-ivory sm:text-3xl">
              E eu sei que vais adorar. <br />
              <span className="text-gold">
                Por isso é que esta carta existe.
              </span>
            </p>
          </blockquote>

          <p>
            Se você já esteve comigo até aqui, merece algo que não dou a mais
            ninguém. Não é um truque de marketing. Você não vai ver isso numa
            campanha. É só{" "}
            <span className="italic">para quem quase saiu</span> — e ficou.
          </p>

          <div className="flex items-center gap-3 pt-6">
            <div className="h-px flex-1 bg-ivory/15" />
            <p className="font-cormorant text-xl italic text-gold">
              continua vendo{" "}
              <span className="bounce-x inline-block">→</span>
            </p>
            <div className="h-px flex-1 bg-ivory/15" />
          </div>
        </motion.article>
      </div>
    </section>
  )
}
