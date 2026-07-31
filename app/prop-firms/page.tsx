"use client";

import { CircleAlert } from "lucide-react";
import { PageShell, PropFirmPlans, SectionHead } from "@/components/site";
export default function PropFirms() { return <PageShell><section className="mx-auto max-w-7xl px-5 py-20"><SectionHead eyebrow="Partner directory" title="Choose your challenge account." text="Select an account to highlight it. Verify all current terms, rules, and eligibility directly with each firm."/><div className="mt-10"><PropFirmPlans /></div><div id="disclosure" className="mt-12 flex gap-3 rounded-xl border border-amber-400/20 bg-amber-300/[.06] p-5 text-sm leading-6 text-amber-100/75"><CircleAlert className="shrink-0 text-amber-300" size={20}/><p><b className="text-amber-100">Affiliate notice:</b> Partner links and product details are placeholders. Clearly disclose any compensated links, and never represent a partner&apos;s rules or payouts without checking its current official terms.</p></div></section></PageShell>; }
