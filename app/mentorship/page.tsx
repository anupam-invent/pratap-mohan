import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleCheck, LockKeyhole } from "lucide-react";
import { PageShell } from "@/components/site";

const modules: [string, string, string[]][] = [
  ["01", "Trading Fundamentals", ["Financial Markets", "Trading Platforms", "Market Participants", "Trading Psychology"]],
  ["02", "Price Action", ["Support & Resistance", "Trend Identification", "Swing High & Swing Low", "Reversal & Continuation Patterns"]],
  ["03", "Liquidity Concepts", ["Buy-Side & Sell-Side Liquidity", "Liquidity Pools", "Equal Highs & Equal Lows", "Liquidity Sweeps"]],
  ["04", "Trading Sessions", ["Asian Session", "London Session", "New York Session", "Session Timing & Volatility"]],
  ["05", "Trade Execution", ["Entry Conditions", "Stop Loss Placement", "Take Profit Strategy", "Trade Management"]],
  ["06", "Risk Management", ["Position Sizing", "Risk-to-Reward Ratio", "Capital Protection", "Trading Discipline"]],
  ["07", "Trading Psychology", ["Emotional Control", "Patience & Discipline", "Avoiding FOMO & Revenge Trading"]],
  ["08", "Performance Review", ["Trading Journal", "Trade Analysis", "Performance Evaluation"]]
];

const outcomes = ["Read price action with confidence.", "Understand institutional market structure.", "Identify and trade liquidity-based setups.", "Build high-probability trading plans.", "Execute trades with disciplined risk management.", "Develop a repeatable and professional trading process."];

export default function Mentorship() {
  return <PageShell>
    <section className="grid-bg overflow-hidden border-b border-line"><div className="mx-auto max-w-7xl px-5 py-20 text-center sm:py-28"><p className="eyebrow">Mentorship program</p><h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Build Confidence Through a Proven Trading Process</h1><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="https://t.me/mpratapmohanliv" target="_blank" rel="noreferrer" className="btn-primary">Get the course — $99 <ArrowRight size={17} /></a><a href="#curriculum" className="btn-secondary">View curriculum</a></div><p className="mt-5 text-xs text-slate-500">Secure purchase support via Telegram</p></div></section>
    <section id="curriculum" className="mx-auto max-w-7xl px-5 py-20">
      <div><p className="eyebrow">Course curriculum</p><h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">8 Modules. One Repeatable Framework.</h1></div>
      <div className="mt-9 grid gap-12 lg:grid-cols-[1fr_.38fr]">
        <div className="grid gap-4 md:grid-cols-2">{modules.map(([number, title, lessons]) => <article className="card p-6" key={number}><p className="text-sm font-bold text-signal">MODULE {number}</p><h2 className="mt-3 text-xl font-semibold text-white">{title}</h2><ul className="mt-5 space-y-3">{lessons.map((lesson) => <li key={lesson} className="flex gap-2 text-sm text-slate-400"><CircleCheck size={17} className="mt-0.5 shrink-0 text-signal" />{lesson}</li>)}</ul></article>)}</div>
        <aside className="h-fit rounded-2xl border border-signal/40 bg-panel p-7 shadow-glow lg:sticky lg:top-24"><p className="text-sm font-bold uppercase tracking-[.14em] text-signal">Full course access</p><p className="mt-4 text-5xl font-semibold text-white">$99</p><p className="mt-3 text-sm leading-6 text-slate-400">One complete framework, from fundamentals through performance review.</p><a href="https://t.me/mpratapmohanliv" target="_blank" rel="noreferrer" className="btn-primary mt-7 w-full">Purchase course <ArrowRight size={16} /></a><div className="mt-6 border-t border-line pt-5 text-xs leading-5 text-slate-500"><LockKeyhole size={14} className="mr-1 inline" />Contact via Telegram to complete your purchase securely.</div></aside>
      </div>
    </section>
    <section className="border-y border-line bg-panel/35"><div className="mx-auto max-w-7xl px-5 py-20"><div className="max-w-2xl"><p className="eyebrow">Course outcomes</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Trade from a plan, not an impulse.</h2></div><div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{outcomes.map((outcome) => <div className="card flex gap-3 p-5 text-slate-300" key={outcome}><CheckCircle2 className="shrink-0 text-signal" size={20} />{outcome}</div>)}</div><Link href="/contact" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-signal">Have a question first? Contact me <ArrowRight size={16} /></Link></div></section>
  </PageShell>;
}
