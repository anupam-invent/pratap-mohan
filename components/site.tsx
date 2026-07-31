"use client";

import Link from "next/link";
import { useState } from "react";
import { BarChart3, BookOpen, ChevronDown, CircleCheck, Menu, Scale, ShieldCheck, X } from "lucide-react";

const nav = [
  ["Home", "/"], ["About", "/about"], ["Mentorship", "/mentorship"], ["Prop Firms", "/prop-firms"], ["Brokers", "/brokers"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-30 border-b border-line/80 bg-ink/85 backdrop-blur-xl">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
      <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}><span className="grid size-8 place-items-center rounded-lg bg-signal text-sm font-black text-ink">PM</span><span className="font-semibold tracking-tight text-white">PRATAP<span className="text-signal">MOHAN</span></span></Link>
      <nav className="hidden items-center gap-5 lg:flex">{nav.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</Link>)}</nav>
      <Link href="/contact" className="hidden rounded-lg bg-signal px-4 py-2 text-sm font-bold text-ink sm:inline-block">Contact Me</Link>
      <button className="text-slate-100 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-line bg-panel px-5 py-4 lg:hidden">{nav.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-line/70 py-3 text-sm text-slate-200">{label}</Link>)}</nav>}
  </header>;
}

export function Footer() { return <footer className="border-t border-line bg-[#060d18]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
  <div><div className="mb-3 font-semibold text-white">PRATAP<span className="text-signal">MOHAN</span></div><p className="max-w-sm text-sm leading-6 text-slate-400">Helping traders build consistency through practical education, trusted trading resources, and disciplined risk management.</p></div>
  <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Explore</p><div className="grid gap-2 text-sm text-slate-400"><Link href="/about">About</Link><Link href="/certificates">Certificates</Link><Link href="/contact">Contact</Link></div></div>
  <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p><div className="grid gap-2 text-sm text-slate-400"><Link href="/risk-disclaimer">Risk disclaimer</Link><Link href="/affiliate-disclosure">Affiliate disclosure</Link><Link href="/privacy">Privacy policy</Link></div></div>
  </div><div className="border-t border-line px-5 py-5 text-center text-xs text-slate-500">© 2026 Pratap Mohan. Educational content only. Not financial advice.</div></footer>; }

export function PageShell({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }

export function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) { return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{text && <p className="mt-4 leading-7 text-slate-400">{text}</p>}</div>; }

export const firms = [
  { name: "Investabl", referralUrl: "https://app.investabl.ai/referrals?ref=TRADER-XJNG2", target: "8%", maxLoss: "8%", dailyLoss: "3%", days: "0", split: "Weekly · 80%" },
  { name: "Funding Pips", referralUrl: "https://app.fundingpips.com/register?referral_code=A6752EF8", target: "12%", maxLoss: "12%", dailyLoss: "3%", days: "0", split: "Biweekly · 85%" },
  { name: "FTMO", referralUrl: "https://app.fundingpips.com/register?referral_code=A6752EF8", target: "10%", maxLoss: "10%", dailyLoss: "3%", days: "4", split: "Biweekly · 90%" }
];
export function PartnerCard({ firm, selected = false, onSelect }: { firm: typeof firms[number]; selected?: boolean; onSelect?: () => void }) {
  const rows = [["Profit Target", firm.target], ["Max Loss", firm.maxLoss], ["Daily Loss", firm.dailyLoss], ["Min Trading Days", firm.days], ["Split", firm.split]];
  return <article onClick={onSelect} className={`relative cursor-pointer rounded-2xl border p-4 transition duration-200 ${selected ? "border-signal bg-panel shadow-[0_18px_36px_rgba(69,224,180,.12)]" : "border-line bg-panel/70 hover:-translate-y-1 hover:border-signal/60"}`}>
    {selected && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-signal px-5 py-1 text-[10px] font-bold tracking-[.12em] text-ink">RECOMMENDED</span>}
    <div className="px-1 pt-2"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">Prop firm</p><p className="mt-1 text-2xl font-bold text-white">{firm.name}</p></div>
    <a href={firm.referralUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className={`mt-4 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${selected ? "bg-signal text-ink hover:bg-[#7bf1d0]" : "bg-electric text-white hover:bg-[#759eff]"}`}>Buy Challenge</a>
    <div className="mt-3 rounded-xl bg-white/[.05] px-3 py-3 text-white">{rows.map(([label, value], index) => <div key={label} className={`flex items-center justify-between py-2 text-xs ${index ? "border-t border-white/10" : ""}`}><span className="font-bold">{label}</span><span className="font-bold">{value}</span></div>)}</div>
  </article>;
}
export function PropFirmPlans() { const [selected, setSelected] = useState(0); return <div className="grid gap-5 md:grid-cols-3">{firms.map((firm, index) => <PartnerCard key={firm.name} firm={firm} selected={selected === index} onSelect={() => setSelected(index)} />)}</div>; }

export const brokers = [
  { name: "Hantec Markets", referralUrl: "https://one.exnessonelink.com/a/hp817gso0k", regulation: "Regulated broker", platforms: "Web · MT4 · MT5", spreads: "Raw spread accounts", funding: "Multiple deposit methods" },
  { name: "IC Markets", referralUrl: "https://one.exnessonelink.com/a/hp817gso0k", regulation: "Regulated broker", platforms: "cTrader · MT4 · MT5", spreads: "Razor pricing", funding: "Multiple deposit methods" },
  { name: "EXNESS", referralUrl: "https://one.exnessonelink.com/a/hp817gso0k", regulation: "Regulated broker", platforms: "Web · MT4 · MT5", spreads: "Flexible account options", funding: "Multiple deposit methods" }
];
export function BrokerCard({ broker, selected = false, onSelect }: { broker: typeof brokers[number]; selected?: boolean; onSelect?: () => void }) {
  const rows = [["Regulation", broker.regulation], ["Platforms", broker.platforms], ["Funding", broker.funding]];
  return <article onClick={onSelect} className={`relative cursor-pointer rounded-2xl border p-4 transition duration-200 ${selected ? "border-signal bg-panel shadow-[0_18px_36px_rgba(69,224,180,.12)]" : "border-line bg-panel/70 hover:-translate-y-1 hover:border-signal/60"}`}>
    {selected && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-signal px-5 py-1 text-[10px] font-bold tracking-[.12em] text-ink">RECOMMENDED</span>}
    <div className="px-1 pt-2"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">Broker</p><p className="mt-1 text-2xl font-bold text-white">{broker.name}</p></div>
    <a href={broker.referralUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className={`mt-4 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${selected ? "bg-signal text-ink hover:bg-[#7bf1d0]" : "bg-electric text-white hover:bg-[#759eff]"}`}>Sign Up</a>
    <div className="mt-3 rounded-xl bg-white/[.05] px-3 py-3 text-white">{rows.map(([label, value], index) => <div key={label} className={`flex items-center justify-between gap-4 py-2 text-xs ${index ? "border-t border-white/10" : ""}`}><span className="font-bold">{label}</span><span className="text-right font-bold text-slate-300">{value}</span></div>)}</div>
  </article>;
}
export function BrokerPlans() { const [selected, setSelected] = useState(0); return <div className="grid gap-5 md:grid-cols-3">{brokers.map((broker, index) => <BrokerCard key={broker.name} broker={broker} selected={selected === index} onSelect={() => setSelected(index)} />)}</div>; }

export function FAQList() {
  const items = [
    ["Is this financial advice?", "No. Everything shared on this website is for educational purposes only and reflects personal opinions and trading experience. Always do your own research before making financial decisions."],
    ["How are prop firms and brokers selected?", "Every recommendation is based on reputation, trading conditions, payout reliability, platform quality, customer support, and overall value for traders."],
    ["Do affiliate links cost me more?", "No. Using an affiliate link never increases your cost. If you choose to sign up through one, I may earn a commission at no additional cost to you."],
    ["Are the recommended prop firms trustworthy?", "Only firms with a strong reputation, transparent rules, reliable payouts, and positive trader feedback are recommended. However, you should always review their terms before purchasing an evaluation."],
    ["Which prop firm is right for me?", "The best prop firm depends on your trading style, experience, preferred platform, risk tolerance, and evaluation rules. Compare each firm's features before making a decision."],
    ["Can beginners join a prop firm?", "Yes, but it is recommended to first understand risk management, drawdown rules, and evaluation requirements. Building consistency on a demo account can greatly improve your chances of success."],
    ["Do you guarantee profits or funded accounts?", "No. Trading involves significant risk, and no strategy, course, or prop firm can guarantee profits or passing an evaluation. Your results will depend on your skills, discipline, and risk management."],
    ["Can I contact you directly?", "Absolutely. If you have any questions about trading, educational content, or the resources shared on this website, feel free to reach out through the Contact page or social media."]
  ];
  return <div className="mt-9 divide-y divide-line rounded-2xl border border-line bg-panel/60">{items.map(([question, answer], index) => <details key={question} className="group px-6 py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white"><span><span className="mr-3 text-signal">{index + 1}.</span>{question}</span><ChevronDown className="shrink-0 text-slate-400 transition group-open:rotate-180" size={18}/></summary><p className="max-w-3xl pt-4 text-sm leading-6 text-slate-400">{answer}</p></details>)}</div>;
}

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) { return <PageShell><section className="mx-auto max-w-3xl px-5 py-20 sm:py-28"><p className="eyebrow">Important information</p><h1 className="mt-3 text-4xl font-semibold text-white">{title}</h1><div className="mt-10 space-y-6 leading-7 text-slate-400">{children}</div></section></PageShell>; }

export const Icons = { BarChart3, BookOpen, CircleCheck, Scale, ShieldCheck };
