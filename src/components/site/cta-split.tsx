import { ArrowUpRight, Rocket, Building } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SplitText } from "@/components/site/split-text";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";

export function CtaSplit() {
  return (
    <section id="apply" className="border-t border-border/60 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Get Involved
            </span>
          </Reveal>
          <SplitText
            as="h2"
            text="Where do you fit in?"
            className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={0.05} className="hover-lift group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-[var(--brand-green)]/15 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-green)]/15">
              <Rocket className="size-6 text-[var(--brand-green)]" />
            </div>
            <h3 className="relative mt-6 font-heading text-2xl font-semibold">
              For Innovators
            </h3>
            <p className="relative mt-3 max-w-sm text-muted-foreground">
              Apply before 17 April 2026 to join the next cohort — mentorship,
              a fully-funded bootcamp and a shot at the global finale.
            </p>
            <Button
              render={
                <a href={`mailto:${SITE.email}?subject=NGIC%202026%20Application`} />
              }
              nativeButton={false}
              size="lg"
              className="relative mt-8 group/btn"
            >
              Start Your Application
              <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="hover-lift group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-[var(--brand-violet)]/15 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-violet)]/15">
              <Building className="size-6 text-[var(--brand-violet)]" />
            </div>
            <h3 className="relative mt-6 font-heading text-2xl font-semibold">
              For Partners
            </h3>
            <p className="relative mt-3 max-w-sm text-muted-foreground">
              Join the growing network of governments, universities and
              investors accelerating Nigeria&apos;s innovation pipeline.
            </p>
            <Button
              render={
                <a href={`mailto:${SITE.email}?subject=NGIC%20Partnership%20Enquiry`} />
              }
              nativeButton={false}
              size="lg"
              variant="outline"
              className="relative mt-8 group/btn"
            >
              Become a Partner
              <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
