"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/utils";
import Magnetic from "./Magnetic";
const links = ["Services", "Solutions", "Work", "About", "Insights", "Pricing"];
const anchor: Record<string, string> = { Solutions: "#engine", About: "#why" };
export default function Navbar() {
  const [s, setS] = useState(false), [o, setO] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 24); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  const href = (l: string) => anchor[l] ?? `#${l.toLowerCase()}`;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-white transition-all ${s || o ? "bg-navy/80 backdrop-blur-xl border-b border-white/10" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight"><span className="grid size-7 place-items-center rounded-lg bg-violet text-sm">{BRAND[0]}</span>{BRAND}</a>
        <ul className="hidden gap-8 text-sm font-medium text-white/75 lg:flex">{links.map((l) => <li key={l}><a href={href(l)} className="transition hover:text-white">{l}</a></li>)}</ul>
        <Magnetic href="#contact" className="hidden bg-white !py-2 text-sm text-navy lg:inline-flex">Let&apos;s Talk →</Magnetic>
        <button aria-label="Menu" aria-expanded={o} className="lg:hidden" onClick={() => setO(!o)}>{o ? <X /> : <Menu />}</button>
      </nav>
      {o && <div className="flex h-[calc(100dvh-4rem)] flex-col gap-1 bg-navy px-5 pt-6 lg:hidden">
        {links.map((l) => <a key={l} href={href(l)} onClick={() => setO(false)} className="border-b border-white/10 py-4 text-3xl font-bold">{l}</a>)}
        <a href="#contact" onClick={() => setO(false)} className="mt-6 rounded-full bg-violet py-4 text-center font-semibold">Let&apos;s Talk →</a></div>}
    </header>
  );
}
