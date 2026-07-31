import { Camera, Mail, Send, Users } from "lucide-react";
import { PageShell } from "@/components/site";

const socialLinks = [
  { name: "Telegram", detail: "@mpratapmohanliv", href: "https://t.me/mpratapmohanliv", icon: Send, ready: true },
  { name: "Instagram", detail: "Add your Instagram link", href: "#", icon: Camera, ready: false },
  { name: "Facebook", detail: "Add your Facebook page", href: "#", icon: Users, ready: false },
  { name: "Gmail", detail: "Add your Gmail address", href: "#", icon: Mail, ready: false }
];

export default function Contact() {
  return <PageShell><section className="mx-auto max-w-7xl px-5 py-20 sm:py-28"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Get in touch</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Connect with me.</h1><p className="mt-6 leading-7 text-slate-400">Follow my trading journey, join the Telegram community, or reach out through your preferred platform.</p></div><div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">{socialLinks.map(({ name, detail, href, icon: Icon, ready }) => <a key={name} href={href} target={ready ? "_blank" : undefined} rel={ready ? "noreferrer" : undefined} className={`card group flex items-center gap-5 p-6 transition ${ready ? "hover:-translate-y-1 hover:border-signal" : "cursor-default opacity-70"}`}><span className={`grid size-12 place-items-center rounded-xl ${ready ? "bg-signal/10 text-signal" : "bg-white/[.05] text-slate-400"}`}><Icon size={22} /></span><span className="min-w-0"><span className="block font-semibold text-white">{name}</span><span className="mt-1 block text-sm text-slate-400">{detail}</span></span><span className={`ml-auto rounded-lg px-3 py-2 text-xs font-bold ${ready ? "bg-signal text-ink" : "bg-white/[.06] text-slate-400"}`}>{ready ? "Open" : "Add link"}</span></a>)}</div><p className="mx-auto mt-8 max-w-xl text-center text-xs leading-5 text-slate-500">Replace the Instagram, Facebook, and Gmail links in this page before publishing.</p></section></PageShell>;
}
