import { BRAND } from "@/lib/utils";
import Magnetic from "./Magnetic";
import Orbit from "./Orbit";
const nodes = ["Amazon", "Shopify", "Google Ads", "Instagram", "Analytics", "Website", "SEO"].map((l) => ({ l }));
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-32 text-white lg:pt-40">
      <div className="glow absolute inset-x-0 top-0 h-[70%]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan">DIGITAL COMMERCE • GROWTH • TECHNOLOGY</p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1] tracking-tight sm:text-7xl xl:text-8xl">Build Better.<br />Grow Faster.<br /><span className="text-violet">Scale Smarter.</span></h1>
          <p className="mt-6 text-xl font-semibold text-white/90">We build the digital systems behind ambitious brands.</p>
          <p className="mt-3 max-w-xl text-white/65">From marketplace growth and performance marketing to creative content and high-converting websites, we help businesses turn digital presence into measurable growth.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic href="#contact" className="bg-violet text-white shadow-[0_10px_40px_-10px_rgba(245,130,13,0.7)] hover:shadow-[0_12px_45px_rgba(245,130,13,0.95)]">Start a Project →</Magnetic>
            <Magnetic href="#work" className="border border-white/20 text-white hover:bg-white/10">Explore Our Work</Magnetic>
          </div>
          <a href="#contact" className="mt-5 inline-block text-sm text-white/60 underline underline-offset-4 hover:text-white">Book a free consultation</a>
        </div>
        <Orbit nodes={nodes} center={BRAND} />
      </div>
    </section>
  );
}
