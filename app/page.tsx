"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, BookOpen, Clock3, ShieldCheck, type LucideIcon } from "lucide-react";
import { BrokerPlans, FAQList, PageShell, PropFirmPlans, SectionHead } from "@/components/site";

const stats = [
  ["10+", "Years of experience"], ["Style", "Intraday - Swing"],
  ["1%", "Max risk per idea"], ["Session", "NY Session Only"]
];

const principles: [LucideIcon, string, string][] = [
  [ShieldCheck, "Risk Management", "A fixed amount of risk means no single idea controls the account."],
  [BarChart3, "Context Matters", "Analyze the market structure, find the liquidity before entering any trade."],
  [Clock3, "Quality Over Quantity", "Focus on high-probability setups instead of chasing every market move."],
  [BookOpen, "Continuous Improvement", "Every trade is documented and reviewed. The goal is to improve over time."]
];

export default function Home() {
  return (
    <PageShell>
      <section className="grid-bg overflow-hidden border-b border-line">
        <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">Professional Trader<br /><span className="text-slate-400">Market Analyst<br />Educator</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">Learn market structure, liquidity concepts, disciplined risk management, and practical trading education to become a top 1% trader.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a className="btn-primary" href="https://t.me/pratapmohanliv" target="_blank" rel="noreferrer">Join my free Telegram <ArrowRight size={17} /></a><Link className="btn-secondary" href="/about">About Me</Link></div>
            <p className="mt-6 text-xs text-slate-500">* Trading involves substantial risk</p>
          </div>
          <div className="relative mx-auto flex min-h-[430px] w-full max-w-md items-end justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-electric/15 via-panel to-ink shadow-glow">
            <div className="absolute inset-x-12 bottom-0 h-48 rounded-full bg-signal/15 blur-3xl" />
            <Image src="/images/trader-portrait.png" alt="Professional trader portrait" width={500} height={500} priority className="hero-float relative z-10 h-auto w-full max-w-[440px] object-contain object-bottom" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10"><div className="grid divide-y divide-line rounded-2xl border border-line bg-panel/50 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">{stats.map(([number, label]) => <div className="p-6" key={label}><p className="text-3xl font-semibold text-white">{number}</p><p className="mt-2 text-sm text-slate-400">{label}</p></div>)}</div></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHead eyebrow="A disciplined approach" title="Professional Trading Starts with a Proven Process" text="Successful trading isn't about predicting every market move. It's about managing risk, waiting patiently for high-quality setups, and making decisions based on a clear, repeatable process." /><Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-signal">Learn about me <ArrowRight size={16} /></Link></div><div className="grid gap-4 sm:grid-cols-2">{principles.map(([Icon, title, text]) => <div key={title} className="card p-5"><Icon size={20} className="text-signal" /><h3 className="mt-4 font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>)}</div></section>
      <section className="mx-auto max-w-7xl px-5 pb-20"><div className="relative overflow-hidden rounded-[2rem] border border-signal/40 bg-gradient-to-br from-[#071d1a] via-[#0b1a21] to-[#08111f] px-6 py-16 text-center shadow-[0_0_50px_rgba(69,224,180,.10)] sm:px-10"><div className="absolute left-1/2 top-0 h-56 w-2/3 -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" /><div className="relative"><p className="eyebrow">Mentorship program</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">Start Your Trading Journey</h2><p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">Learn Price Action and Liquidity Trading with a structured step-by-step course designed for traders of all levels.</p><Link href="/mentorship" className="btn-primary mt-8 shadow-[0_0_26px_rgba(69,224,180,.25)]">Explore the Course <ArrowRight size={17} /></Link></div></div></section>
      <section className="border-y border-line bg-[#091525]"><div className="mx-auto max-w-7xl px-5 py-20"><div className="flex flex-wrap items-end justify-between gap-6"><SectionHead eyebrow="TRUSTED PARTNERS" title="Trusted Prop Firms" text="Recommended prop firms based on reputation, trading conditions, payout history, and trader experience. Always review each firm's rules, fees, and risk disclosures before signing up." /><Link href="/prop-firms" className="btn-secondary">Compare all firms <ArrowRight size={16} /></Link></div><div className="mt-10"><PropFirmPlans /></div></div></section>
      <section className="border-y border-line bg-[#091525]"><div className="mx-auto max-w-7xl px-5 py-20"><div className="flex flex-wrap items-end justify-between gap-6"><SectionHead eyebrow="TRUSTED BROKERS" title="Trade with trusted brokers." text="Compare essential broker details, then use the sign-up button to access your referral link." /><Link href="/brokers" className="btn-secondary">Compare all brokers <ArrowRight size={16} /></Link></div><div className="mt-10"><BrokerPlans /></div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20"><SectionHead eyebrow="Common questions" title="Straight answers, before you begin." /><FAQList /></section>
    </PageShell>
  );
}
