"use client";

import { PageShell, PropFirmPlans, SectionHead } from "@/components/site";
export default function PropFirms() { return <PageShell><section className="mx-auto max-w-7xl px-5 py-20"><SectionHead eyebrow="Partner directory" title="Choose your challenge account." text="Select an account to highlight it. Verify all current terms, rules, and eligibility directly with each firm."/><div className="mt-10"><PropFirmPlans /></div></section></PageShell>; }
