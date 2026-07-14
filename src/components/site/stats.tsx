import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { AnimatedCounter } from "@/components/site/animated-counter";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat) => (
            <RevealItem
              key={stat.label}
              className="flex flex-col gap-2 border-l border-border/60 pl-5"
            >
              <div className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <span className="text-gradient-brand">+</span>
              </div>
              <div className="text-sm font-medium text-foreground/90">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">{stat.sub}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
