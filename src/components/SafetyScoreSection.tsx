"use client";

import { SafetyScore } from "@/components/SafetyScore";
import { Reveal } from "@/components/motion/Reveal";
import { DEMO_GRADE_BEFORE, DEMO_SCORE_BEFORE } from "@/data/demoFindings";

export function SafetyScoreSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="bracket">[ score ]</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-4 max-w-xl text-4xl leading-[1.02] sm:text-6xl">
          A score that explains itself.
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          C0RTEX calculates a prioritization score using severity, reachability,
          exploitability indicators, and confidence. It is not a certification and
          does not guarantee that an application is secure.
        </p>
      </Reveal>
      <div className="mt-8 max-w-xl">
        <SafetyScore score={DEMO_SCORE_BEFORE} grade={DEMO_GRADE_BEFORE} />
      </div>
    </section>
  );
}
