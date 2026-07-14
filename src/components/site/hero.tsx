"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/site/aurora-background";
import { SITE } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-16 bg-grain"
    >
      <AuroraBackground />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_calc(50%-0.5px),color-mix(in_oklch,var(--foreground),transparent_95%)_calc(50%-0.5px),color-mix(in_oklch,var(--foreground),transparent_95%)_calc(50%+0.5px),transparent_calc(50%+0.5px))] opacity-40"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-[var(--brand-green)]" />
          A {SITE.organizer} initiative · Est. by the Federal Government of Nigeria
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Igniting Nigeria&apos;s{" "}
          <span className="text-gradient-brand">Tech Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          The NEXTGEN Innovation Challenge connects Nigerian entrepreneurs,
          researchers and young talent with global investors, governments and
          development partners — accelerating the ideas that will define the
          continent&apos;s next decade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            render={<a href="#apply" />}
            nativeButton={false}
            size="lg"
            className="group h-12 px-7 text-base"
          >
            Apply as an Innovator
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            render={<a href="#challenge" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-12 px-7 text-base"
          >
            Explore the Challenge
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative mt-16 flex justify-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
