import { PARTNERS } from "@/lib/data";

export function MarqueePartners() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative border-y border-border/60 bg-card/40 py-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center text-sm font-medium tracking-wide text-muted-foreground/80 uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
