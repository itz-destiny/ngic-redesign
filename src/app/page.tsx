import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { MarqueePartners } from "@/components/site/marquee-partners";
import { Stats } from "@/components/site/stats";
import { About } from "@/components/site/about";
import { TheChallenge } from "@/components/site/the-challenge";
import { FocusAreas } from "@/components/site/focus-areas";
import { Timeline } from "@/components/site/timeline";
import { Recognition } from "@/components/site/recognition";
import { Partners } from "@/components/site/partners";
import { CtaSplit } from "@/components/site/cta-split";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarqueePartners />
        <Stats />
        <About />
        <TheChallenge />
        <FocusAreas />
        <Timeline />
        <Recognition />
        <Partners />
        <CtaSplit />
      </main>
      <Footer />
    </>
  );
}
