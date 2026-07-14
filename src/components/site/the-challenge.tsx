import { FileText, Users, GraduationCap, Trophy } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";

const STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "Apply",
    description:
      "Submit your idea or venture under one of 11 national thematic tracks through the innovator portal.",
  },
  {
    icon: Users,
    step: "02",
    title: "Mentorship",
    description:
      "Shortlisted innovators are paired with mentors from industry, academia and government.",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Bootcamp",
    description:
      "A residential training bootcamp in Abuja, delivered with Teesside University (UK) and Google.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Grand Finale",
    description:
      "Top innovators pitch to global investors and partner governments at the international finale.",
  },
];

export function TheChallenge() {
  return (
    <section id="challenge" className="border-t border-border/60 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              From idea to international investment
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <RevealItem
              key={s.step}
              className="group relative z-0 flex flex-col gap-4 bg-background p-8 transition-all duration-300 ease-out hover:z-10 hover:scale-[1.03] hover:bg-card hover:shadow-2xl"
            >
              <span className="font-heading text-sm text-muted-foreground/60">
                {s.step}
              </span>
              <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-card transition-colors group-hover:border-[var(--brand-green)]/50">
                <s.icon className="size-5 text-[var(--brand-green)]" />
              </div>
              <div>
                <div className="font-heading text-lg font-semibold">
                  {s.title}
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
