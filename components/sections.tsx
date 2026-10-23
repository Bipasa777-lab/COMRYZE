"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { ShoppingBag, Megaphone, Palette, PenLine, Clapperboard, Code2, Mail, Phone, MapPin, MessageCircle, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BRAND } from "@/lib/utils";
import Magnetic from "./Magnetic";
import Orbit, { type OrbitNode } from "./Orbit";

const Sec = ({ id, dark, alt, children }: { id?: string; dark?: boolean; alt?: boolean; children: React.ReactNode }) => (
  <section id={id} className={`px-5 py-24 lg:py-32 ${dark ? "bg-navy text-white" : alt ? "bg-lav" : ""}`}><div className="mx-auto max-w-7xl">{children}</div></section>
);
const H = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => <h2 className={`max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl ${className}`}>{children}</h2>;
const Rise = ({ i = 0, className = "", children }: { i?: number; className?: string; children: React.ReactNode }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: i * 0.06 }}>{children}</motion.div>
);

export const TrustBar = () => (
  <div className="border-b border-ink/10 bg-white px-5 py-10 text-center">
    <p className="text-sm font-semibold text-ink/50">Built for ambitious businesses selling on the platforms they already use</p>
    <ul className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-3 text-2xl font-extrabold text-ink/30">{["Amazon", "Shopify", "Google", "Meta", "Flipkart", "Meesho"].map((b) => <li key={b}>{b}</li>)}</ul>
    <p className="mt-4 text-xs text-ink/40">Platforms we work with. Not official partnerships.</p>
  </div>
);

export const Problem = () => (
  <Sec>
    <H>Your digital growth shouldn&apos;t feel fragmented.</H>
    <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">
      {["Too many vendors", "Disconnected marketing", "No clear growth system"].map((t, i) => (
        <Rise key={t} i={i} className="bg-white p-8"><span className="text-5xl font-extrabold text-violet/25">0{i + 1}</span><h3 className="mt-6 text-2xl font-bold">{t}</h3></Rise>))}
    </div>
    <p className="mt-14 text-2xl font-bold md:text-4xl">One team. One strategy. <span className="text-violet">One digital growth engine.</span></p>
  </Sec>
);

const services = [
  { n: "E-commerce", I: ShoppingBag, d: "Build, optimize and manage your digital storefront across major commerce platforms.", t: ["Amazon", "Flipkart", "Meesho", "Shopify", "WooCommerce", "Marketplace Management"] },
  { n: "Growth & Marketing", I: Megaphone, d: "Turn attention into qualified traffic, leads and repeat buyers.", t: ["SEO", "Google Ads", "Meta Ads", "PPC", "Social Media", "CRO", "Lead Generation"] },
  { n: "Creative Studio", I: Palette, d: "Brand and visual assets that make products look worth buying.", t: ["Brand Identity", "Logo Design", "Product Graphics", "A+ Content", "Social Creatives", "Packaging"] },
  { n: "Content Studio", I: PenLine, d: "Clear, search-friendly words for every page, listing and ad.", t: ["Website Copy", "Product Descriptions", "Blogs", "SEO Content", "Ad Copy", "Social Content"] },
  { n: "Video & Motion", I: Clapperboard, d: "Short-form and product video that explains and sells.", t: ["Reels", "Product Videos", "Explainer Videos", "Motion Graphics", "2D Animation", "Video Editing"] },
  { n: "Technology", I: Code2, d: "Fast, conversion-ready websites and storefronts, built and maintained.", t: ["Business Websites", "E-commerce Websites", "Landing Pages", "Shopify", "WooCommerce", "React / Next.js", "Maintenance"] },
];
export const Services = () => (
  <Sec id="services" alt>
    <H>Everything your brand needs to grow online.</H>
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ n, I, d, t }, i) => (
        <Rise key={n} i={i}><a href="#contact" className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet hover:shadow-[0_20px_60px_-20px_rgba(245,130,13,0.45)]">
          <div className="flex items-start justify-between"><span className="text-6xl font-extrabold text-ink/10">0{i + 1}</span><I className="size-7 text-violet" strokeWidth={1.5} /></div>
          <h3 className="mt-6 text-2xl font-bold">{n}</h3><p className="mt-2 text-ink/65">{d}</p>
          <ul className="mt-5 flex flex-wrap gap-2">{t.map((x) => <li key={x} className="rounded-full bg-lav px-3 py-1 text-xs font-semibold text-violet">{x}</li>)}</ul>
          <span className="mt-auto pt-6 font-semibold text-violet">Explore service →</span></a></Rise>))}
    </div>
  </Sec>
);

const steps = [["Discover", "We audit your channels, catalog and goals."], ["Strategize", "One plan across marketplaces, ads, content and site."], ["Build", "Storefronts, creative and campaigns get made."], ["Launch", "Everything ships together, tracked from day one."], ["Optimize", "We test, read the data and tighten what works."], ["Scale", "Budget and effort move to the channels that pay back."]];
export const Process = () => (
  <Sec id="process">
    <H>From idea to execution.</H>
    <ol className="relative mt-16 grid gap-10 border-l-2 border-violet/25 pl-8 lg:grid-cols-6 lg:gap-6 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-8">
      {steps.map(([t, d], i) => (
        <li key={t} className="relative"><span className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-off bg-violet lg:-top-[41px] lg:left-0" />
          <span className="text-sm font-bold text-violet">0{i + 1}</span><h3 className="text-xl font-bold">{t}</h3><p className="mt-1 text-sm text-ink/65">{d}</p></li>))}
    </ol>
  </Sec>
);

const engine: OrbitNode[] = [["Commerce", "Marketplaces and storefronts, kept in sync."], ["Marketing", "Paid and organic demand tied to real sales."], ["Creative", "Visuals shaped by what converts."], ["Content", "Copy that ranks and sells."], ["Technology", "Sites and tooling that stay fast."], ["Analytics", "One view of what is working."]].map(([l, d]) => ({ l, d }));
export const GrowthEngine = () => {
  const [a, setA] = useState(engine[0]);
  return (
    <Sec id="engine" dark>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div><H>Everything works better when it works together.</H>
          <p className="mt-8 min-h-14 text-xl text-white/70" aria-live="polite"><b className="text-cyan">{a.l}.</b> {a.d}</p></div>
        <Orbit nodes={engine} center="YOUR BRAND" onPick={setA} active={a.l} />
      </div>
    </Sec>
  );
};

const work = [["Fashion Brand", "E-commerce + Branding + Social", "A storefront and social system for a apparel label.", "from-violet to-navy"], ["D2C Beauty Brand", "Amazon + A+ Content + Performance Marketing", "Listings, A+ content and paid campaigns working as one.", "from-cyan/80 to-violet"], ["Food Brand", "Website + Branding + Content", "Brand, site and recipe-led content for a packaged food line.", "from-cyan to-navy"]];
export const Portfolio = () => (
  <Sec id="work">
    <H>Work that moves brands forward.</H>
    <div className="mt-14 grid gap-5 md:grid-cols-3">
      {work.map(([n, s, d, g], i) => (
        <Rise key={n} i={i}><article className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
          <div className={`relative h-52 bg-gradient-to-br ${g}`}><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">Concept Project</span></div>
          <div className="p-6"><h3 className="text-xl font-bold">{n}</h3><p className="mt-1 text-sm font-semibold text-violet">{s}</p><p className="mt-3 text-ink/65">{d}</p><a href="#contact" className="mt-4 inline-block font-semibold">View case study →</a></div></article></Rise>))}
    </div>
  </Sec>
);

export const CaseStudy = () => (
  <Sec alt>
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="grid aspect-[4/3] place-items-center rounded-3xl bg-gradient-to-br from-navy via-[#1F1712] to-violet p-6 text-center text-white"><p className="text-sm font-semibold text-white/60">Case study visual (placeholder)</p></div>
      <div><p className="font-bold text-violet">Case study</p><H className="mt-2 !text-4xl md:!text-5xl">From scattered digital channels to one growth system.</H>
        <dl className="mt-8 grid grid-cols-3 gap-4">{["Conversion", "Traffic", "Engagement"].map((m) => <div key={m} className="rounded-2xl bg-white p-4"><dt className="order-2 text-sm text-ink/60">{m}</dt><dd className="text-3xl font-extrabold text-violet">+XX%</dd></div>)}</dl>
        <p className="mt-3 text-xs text-ink/50">Placeholder metrics. Replace with verified results.</p><a href="#contact" className="mt-6 inline-block font-semibold">View case study →</a></div>
    </div>
  </Sec>
);

export const WhyUs = () => (
  <Sec id="why">
    <H>Not another agency.<br />Your digital growth partner.</H>
    <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
      {[["Strategy-first", "Every channel starts from a shared plan, not a service menu."], ["Creative + Technology", "Designers and engineers in the same room."], ["Data-driven execution", "Decisions follow the numbers, and we show you the numbers."], ["Long-term growth", "We build systems that keep compounding after launch."]].map(([t, d], i) => (
        <Rise key={t} i={i} className="border-t border-ink/15 pt-6"><span className="font-bold text-violet">0{i + 1}</span><h3 className="text-3xl font-extrabold tracking-tight">{t}</h3><p className="mt-2 text-ink/65">{d}</p></Rise>))}
    </div>
  </Sec>
);

const plans = [["Starter", "For small businesses", ["Social Media", "Creative Design", "Basic Content", "Monthly Reporting"], "Get Started"], ["Growth", "For growing brands", ["E-commerce Management", "SEO", "Paid Ads", "Creative", "Content", "Analytics"], "Build My Growth Plan"], ["Scale", "For established businesses", ["Full E-commerce", "Performance Marketing", "Creative", "Content", "Technology", "Analytics", "Dedicated Strategy"], "Talk to an Expert"]] as const;
export const Pricing = () => (
  <Sec id="pricing" alt>
    <H>Plans built around where your brand is now.</H>
    <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
      {plans.map(([n, f, items, cta], i) => (
        <Rise key={n} i={i}><div className={`flex h-full flex-col rounded-3xl p-8 ${i === 1 ? "bg-navy text-white shadow-[0_30px_80px_-30px_rgba(245,130,13,0.5)] ring-1 ring-violet" : "border border-ink/10 bg-white"}`}>
          <h3 className="text-2xl font-extrabold">{n}</h3><p className="opacity-60">{f}</p><p className="mt-6 text-3xl font-extrabold">Custom pricing</p>
          <ul className="my-8 space-y-3">{items.map((x) => <li key={x} className="flex gap-2"><Check className="size-5 shrink-0 text-ok" />{x}</li>)}</ul>
          <a href="#contact" className={`mt-auto rounded-full px-6 py-3 text-center font-semibold ${i === 1 ? "bg-violet text-white shadow-[0_4px_20px_rgba(245,130,13,0.6)]" : "bg-ink text-white"}`}>{cta}</a></div></Rise>))}
    </div>
  </Sec>
);

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const r = useRef(null), v = useInView(r, { once: true }), [n, setN] = useState(0);
  useEffect(() => { if (!v) return; const c = animate(0, to, { duration: 1.2, onUpdate: (x) => setN(Math.round(x)) }); return () => c.stop(); }, [v, to]);
  return <span ref={r}>{n}{suffix}</span>;
}
export const Stats = () => (
  <Sec dark>
    <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
      {[[<Count key="a" to={6} />, "Core Services"], [<Count key="b" to={1} />, "Integrated Growth Team"], [<Count key="c" to={100} suffix="%" />, "Focus on Execution"], ["24/7", "Digital Presence"]].map(([v, l], i) => (
        <div key={i}><p className="text-5xl font-extrabold text-cyan md:text-7xl">{v}</p><p className="mt-2 text-white/65">{l}</p></div>))}
    </div>
  </Sec>
);

export const Testimonials = () => (
  <Sec>
    <H>What clients will say.</H><p className="mt-3 text-sm font-semibold text-violet">Placeholder testimonials. Replace before launch.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => <figure key={i} className="rounded-3xl border border-dashed border-violet/40 bg-white p-6"><blockquote className="text-ink/75">“Placeholder testimonial text goes here once a real client has approved a quote.”</blockquote><figcaption className="mt-5 text-sm"><b>Client Name {i}</b><br />Role, Company</figcaption></figure>)}
    </div>
  </Sec>
);

export const Insights = () => (
  <Sec id="insights" alt>
    <H>Insights for businesses that want to grow.</H>
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {[["E-commerce", "How to Build a High-Converting Product Listing"], ["Technology", "Why Your Website Isn't Converting Visitors"], ["Growth", "Marketplace Growth Strategies for D2C Brands"], ["Branding", "How Creative Content Impacts E-commerce Conversion"]].map(([c, t]) => (
        <a key={t} href="#insights" className="group rounded-3xl border border-ink/10 bg-white p-6 transition hover:border-violet"><span className="rounded-full bg-lav px-3 py-1 text-xs font-bold text-violet">{c}</span><h3 className="mt-16 text-xl font-bold leading-snug">{t}</h3></a>))}
    </div>
    <a href="#insights" className="mt-8 inline-block font-semibold">View all insights →</a>
  </Sec>
);

const faqs = [["What services do you provide?", "E-commerce management, growth marketing, creative, content, video and motion, and web technology, delivered by one team."], ["Do you manage Amazon and other marketplaces?", "Yes. We handle Amazon, Flipkart, Meesho and your own Shopify or WooCommerce store."], ["Can you build an e-commerce website?", "Yes. We build on Shopify, WooCommerce or custom React / Next.js."], ["Do you provide monthly marketing services?", "Yes. Our Starter, Growth and Scale plans run monthly with reporting."], ["How does your onboarding process work?", "A discovery call, a channel and catalog audit, then a single plan we agree on before work starts."], ["How much does a project cost?", "Pricing is custom and depends on scope. Send an enquiry and we will scope it with you."], ["Do you work with startups?", "Yes, from early-stage brands to established businesses."], ["How long does a website project take?", "It depends on scope. We give a timeline after discovery."]];
export const FAQ = () => (
  <Sec><div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]"><H className="!text-4xl md:!text-5xl">Questions, answered.</H>
    <Accordion type="single" collapsible>{faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div></Sec>
);

export const CTA = () => (
  <section className="relative overflow-hidden bg-navy px-5 py-28 text-center text-white"><div className="glow absolute inset-0" aria-hidden />
    <div className="relative mx-auto max-w-3xl"><h2 className="text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">Have a growth challenge?<br />Let&apos;s solve it.</h2>
      <p className="mt-6 text-lg text-white/70">Tell us what you&apos;re building, where you&apos;re stuck, and where you want to go.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><Magnetic href="#contact" className="bg-violet">Start a Conversation →</Magnetic><Magnetic href="#contact" className="border border-white/25">Get a Free Consultation</Magnetic></div></div></section>
);

const inp = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-violet focus:ring-2 focus:ring-violet/30";
const Field = ({ l, name, type = "text", opts, wide }: { l: string; name: string; type?: string; opts?: string[]; wide?: boolean }) => (
  <label className={`block text-sm font-semibold ${wide ? "sm:col-span-2" : ""}`}>{l}
    {opts ? <select name={name} className={`${inp} mt-1`}>{opts.map((o) => <option key={o}>{o}</option>)}</select> : type === "area" ? <textarea name={name} rows={4} className={`${inp} mt-1`} /> : <input name={name} type={type} required={["name", "email"].includes(name)} className={`${inp} mt-1`} />}</label>
);
export const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <Sec id="contact"><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div><H className="!text-4xl md:!text-5xl">Tell us about your project.</H>
        <ul className="mt-8 space-y-4">{[[Mail, "hello@example.com"], [Phone, "+00 00000 00000"], [MapPin, "Your city, Country"], [MessageCircle, "WhatsApp"]].map(([I, t]) => { const Ic = I as typeof Mail; return <li key={t as string} className="flex items-center gap-3"><Ic className="size-5 text-violet" />{t as string}</li>; })}</ul>
        <p className="mt-6 text-sm text-ink/60">LinkedIn · Instagram</p></div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); /* TODO: POST to your API route or form service */ }} className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-6 sm:grid-cols-2 sm:p-8">
        <Field l="Name" name="name" /><Field l="Company" name="company" /><Field l="Email" name="email" type="email" /><Field l="Phone" name="phone" type="tel" /><Field l="Website" name="website" type="url" wide />
        <Field l="Business Type" name="type" opts={["Startup", "D2C Brand", "Retail / Marketplace Seller", "Service Business", "Other"]} /><Field l="Service Required" name="service" opts={services.map((s) => s.n)} />
        <Field l="Monthly Budget" name="budget" opts={["Not sure yet", "Under ₹50k", "₹50k – ₹2L", "₹2L+"]} wide /><Field l="Message" name="message" type="area" wide />
        <button className="rounded-full bg-violet px-6 py-4 font-semibold text-white sm:col-span-2">Send Project Enquiry →</button>
        {sent && <p role="status" className="font-semibold text-ok sm:col-span-2">Thanks. We&apos;ll be in touch soon.</p>}</form>
    </div></Sec>
  );
};

export const Footer = () => (
  <footer className="bg-navy px-5 pb-8 pt-20 text-white"><div className="mx-auto max-w-7xl">
    <p className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-6xl">Commerce. Growth. Creative. Technology.</p>
    <div className="mt-14 grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
      {[["Services", ["E-commerce", "Growth & Marketing", "Creative Studio", "Technology"]], ["Company", ["About", "Work", "Careers"]], ["Resources", ["Insights", "Privacy Policy", "Terms"]], ["Contact", ["hello@example.com", "LinkedIn", "Instagram"]]].map(([h, l]) => (
        <div key={h as string}><h3 className="font-bold">{h as string}</h3><ul className="mt-3 space-y-2 text-white/60">{(l as string[]).map((x) => <li key={x}><a href="#" className="hover:text-white">{x}</a></li>)}</ul></div>))}
    </div>
    <p className="mt-16 border-t border-white/10 pt-6 text-sm text-white/50">© 2026 {BRAND}. All rights reserved.</p></div></footer>
);
