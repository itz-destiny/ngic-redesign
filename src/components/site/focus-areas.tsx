import { Bot, Leaf, Radio, CloudRain, Sparkles, Cpu, Plus } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { FOCUS_AREAS, FOCUS_AREAS_EXTRA_COUNT } from "@/lib/data";

const ICONS = { Bot, Leaf, Radio, CloudRain, Sparkles, Cpu } as const;

export function FocusAreas() {
  return (
    <section id="focus-areas" className="border-t border-border/60 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Focus Areas
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                11 thematic tracks, one national mission
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              Every application is submitted under a thematic track aligned to
              Nigeria&apos;s technology and industrial priorities.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area) => {
            const Icon = ICONS[area.icon as keyof typeof ICONS];
            return (
              <RevealItem
                key={area.title}
                className="hover-lift group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-7 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-card"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background">
                  <Icon className="size-5 text-[var(--brand-green)]" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {area.description}
                </p>
                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-[var(--brand-green)]/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              </RevealItem>
            );
          })}

          <RevealItem className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border/60 p-7 text-center">
            <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background">
              <Plus className="size-5 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold">
              +{FOCUS_AREAS_EXTRA_COUNT} more tracks
            </h3>
            <p className="text-sm text-muted-foreground">
              Including HealthTech, FinTech, AgriTech, EdTech and advanced
              manufacturing — full list on the innovator portal.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
