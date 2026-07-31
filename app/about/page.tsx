import Image from "next/image";
import { PageShell, SectionHead } from "@/components/site";

export default function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Hi 👋 This is Pratap Mohan, A professional trader.
            </h1>
            <p className="mt-2 max-w-xl text-lg leading-8 text-slate-400">
              I Trade With Discipline, Patience, and a Proven Process.
              <br />
              </p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Trading has taught me that consistency doesn't come from predicting
              the market—it comes from following a repeatable process. Every
              trade I take is planned around price action, liquidity, and
              disciplined risk management rather than emotions or guesswork.
              <br />
              <br />
              My goal isn't just to improve as a trader, but also to help others
              avoid common mistakes by sharing practical insights, trusted
              resources, and the lessons I've learned throughout my journey.
            </p>
          </div>

          <div className="relative mx-auto flex min-h-[500px] w-full max-w-md items-end justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-electric/15 via-panel to-ink shadow-glow">
            <div className="absolute inset-x-12 bottom-0 h-48 rounded-full bg-signal/15 blur-3xl" />
            <Image
              src="/images/trader-portrait.png"
              alt="Professional trader portrait"
              width={500}
              height={500}
              className="relative z-10 h-auto w-full max-w-[440px] object-contain object-bottom"
            />
            <div className="absolute bottom-5 left-5 z-20 rounded-lg border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur">
              <p className="text-sm font-semibold text-white">Kolkata, India</p>
              <p className="mt-1 text-xs text-slate-400">West Bengal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/35">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHead
            eyebrow="Trading philosophy"
            title="A simple framework for complex markets."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Plan",
                "Identify the market context, levels, and conditions before the session begins.",
              ],
              [
                "02",
                "Execute",
                "Wait for the setup and take the planned action with defined risk.",
              ],
              [
                "03",
                "Learn",
                "Record the decision, execution, and lesson—regardless of profit or loss.",
              ],
            ].map(([n, t, d]) => (
              <article className="card p-6" key={n}>
                <p className="text-sm font-bold text-signal">{n}</p>
                <h3 className="mt-8 text-xl font-semibold text-white">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}