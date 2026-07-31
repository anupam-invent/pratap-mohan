"use client";

import { ShieldCheck } from "lucide-react";
import { BrokerPlans, PageShell, SectionHead } from "@/components/site";

export default function Brokers() {
  return <PageShell><section className="mx-auto max-w-7xl px-5 py-20">
    <SectionHead eyebrow="TRUSTED BROKERS" title="Choose a broker with confidence." text="Select a broker to highlight it, then use the sign-up button to access your referral link. Always confirm regulation, fees, and local availability directly with the broker." />
    <div className="mt-10"><BrokerPlans /></div>
    <div className="mt-10 flex gap-3 rounded-xl border border-line bg-panel/60 p-5 text-sm leading-6 text-slate-400"><ShieldCheck className="shrink-0 text-signal" size={20} /><p>Before choosing a broker, check whether it is authorized for your region and understand leverage, margin, fees, withdrawal rules, and the risks of the products you plan to trade.</p></div>
  </section></PageShell>;
}
