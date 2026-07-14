import { Globe, Coins, Tv, Building2 } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { RECOGNITION } from "@/lib/data";

const ICONS = [Globe, Coins, Tv, Building2];

export function Recognition() {
  return (
    <section id="recognition" className="border-t border-border/60 bg-card/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              2025 Edition
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Recognition on the world stage
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {RECOGNITION.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <RevealItem
                key={item.title}
                className="hover-lift flex gap-5 rounded-2xl border border-border/60 bg-background p-7"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-green)]/20 via-[var(--brand-blue)]/20 to-[var(--brand-violet)]/20">
                  <Icon className="size-5 text-[var(--brand-green)]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
