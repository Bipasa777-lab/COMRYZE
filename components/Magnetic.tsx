"use client";
import { useRef } from "react";
export default function Magnetic({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const r = useRef<HTMLAnchorElement>(null);
  return (
    <a ref={r} href={href} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-cyan ${className}`}
      onMouseMove={(e) => { const b = r.current!.getBoundingClientRect(); r.current!.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.15}px,${(e.clientY - b.top - b.height / 2) * 0.25}px)`; }}
      onMouseLeave={() => { r.current!.style.transform = ""; }}>{children}</a>
  );
}
