"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/site/reveal";
import { SplitText } from "@/components/site/split-text";
import { TIMELINE } from "@/lib/data";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="border-t border-border/60 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Roadmap
            </span>
          </Reveal>
          <SplitText
            as="h2"
            text="The 2026 edition, at a glance"
            className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          />
        </div>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-[7px] top-0 h-full w-px bg-border/60 sm:left-1/2" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-[var(--brand-green)] via-[var(--brand-blue)] to-[var(--brand-violet)] sm:left-1/2"
          />

          <div className="flex flex-col gap-14">
            {TIMELINE.map((item, i) => (
              <div
                key={item.title}
                className="relative flex flex-col gap-4 pl-8 sm:grid sm:grid-cols-2 sm:gap-12 sm:pl-0"
              >
                <span className="absolute left-0 top-1 size-4 -translate-x-1/2 rounded-full border-2 border-background bg-[var(--brand-green)] shadow-[0_0_16px_var(--brand-green)] sm:left-1/2" />

                <Reveal
                  y={16}
                  className={
                    i % 2 === 0
                      ? "sm:col-start-1 sm:row-start-1 sm:pr-12 sm:text-right"
                      : "sm:col-start-2 sm:row-start-1 sm:pl-12"
                  }
                >
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--brand-green)]">
                    {item.date}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
