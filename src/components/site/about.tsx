"use client";

import { motion } from "framer-motion";
import { Landmark, Globe2, Handshake } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/data";

const PILLARS = [
  {
    icon: Landmark,
    title: "Government-backed",
    description:
      "Established by the National Board for Technology Incubation, a Federal Government of Nigeria agency.",
  },
  {
    icon: Globe2,
    title: "Globally connected",
    description:
      "Built with UKALD to link Nigerian innovators directly to UK and Commonwealth partners.",
  },
  {
    icon: Handshake,
    title: "Investment-ready",
    description:
      "A structured pathway from idea to mentorship, bootcamp and international investment.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About the Challenge
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Uniting academia, government and private investors
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {SITE.fullName} ({SITE.name}) is Nigeria&apos;s leading innovation
              platform — designed to accelerate transformative ideas and
              technologies aligned with national priorities and the UN
              Sustainable Development Goals, positioning Nigeria as a regional
              science and technology hub.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.15 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card">
                    <pillar.icon className="size-5 text-[var(--brand-green)]" />
                  </div>
                  <div>
                    <div className="font-medium">{pillar.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {pillar.description}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <OrbitVisual />
        </div>
      </div>
    </section>
  );
}

function OrbitVisual() {
  return (
    <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center lg:max-w-none">
      <div className="absolute inset-0 rounded-full border border-border/50" />
      <div className="absolute inset-[12%] rounded-full border border-border/40" />
      <div className="absolute inset-[24%] rounded-full border border-border/30" />

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 flex size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-green)] shadow-[0_0_20px_var(--brand-green)]" />
      </motion.div>
      <motion.div
        className="absolute inset-[12%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute right-0 top-1/2 flex size-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--brand-blue)] shadow-[0_0_20px_var(--brand-blue)]" />
      </motion.div>
      <motion.div
        className="absolute inset-[24%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute bottom-0 left-1/2 flex size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--brand-violet)] shadow-[0_0_20px_var(--brand-violet)]" />
      </motion.div>

      <div className="relative flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-green)] via-[var(--brand-blue)] to-[var(--brand-violet)] shadow-2xl">
        <span className="font-heading text-2xl font-bold text-black">NG</span>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs whitespace-nowrap text-muted-foreground backdrop-blur">
        Nigeria ⇄ Global Partners
      </div>
    </div>
  );
}
