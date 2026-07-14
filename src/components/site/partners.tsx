import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SplitText } from "@/components/site/split-text";
import { PARTNERS } from "@/lib/data";

export function Partners() {
  return (
    <section id="partners" className="border-t border-border/60 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Partners
            </span>
          </Reveal>
          <SplitText
            as="h2"
            text="Backed by government, academia and industry"
            className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          />
        </div>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-3 lg:grid-cols-4">
          {PARTNERS.map((name) => (
            <RevealItem
              key={name}
              className="group relative z-0 flex min-h-[100px] items-center justify-center bg-background p-6 text-center text-sm font-medium text-muted-foreground transition-all duration-300 ease-out hover:z-10 hover:scale-[1.03] hover:bg-card hover:text-foreground hover:shadow-2xl"
            >
              {name}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
