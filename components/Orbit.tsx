"use client";
import { motion } from "motion/react";
export type OrbitNode = { l: string; d?: string };
export default function Orbit({ nodes, center, onPick, active }: { nodes: OrbitNode[]; center: string; onPick?: (n: OrbitNode) => void; active?: string }) {
  const pts = nodes.map((_, i) => { const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2; return [50 + 40 * Math.cos(a), 50 + 40 * Math.sin(a)]; });
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0" aria-hidden>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#F5820D" strokeOpacity=".35" strokeDasharray="1 2" />
        {pts.map(([x, y], i) => <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#FFB800" strokeOpacity=".4" strokeWidth=".35" />)}
      </svg>
      <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-violet text-center text-xs font-extrabold leading-tight text-white shadow-[0_0_65px_15px_rgba(245,130,13,0.6)] sm:size-28 sm:text-sm">{center}</div>
      {nodes.map((n, i) => (
        <motion.button key={n.l} type="button" onClick={() => onPick?.(n)} onMouseEnter={() => onPick?.(n)} onFocus={() => onPick?.(n)}
          style={{ left: `${pts[i][0]}%`, top: `${pts[i][1]}%` }} animate={{ y: [0, i % 2 ? -6 : 6, 0] }} transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2 text-xs font-semibold backdrop-blur sm:text-sm ${active === n.l ? "border-cyan bg-cyan/15 text-cyan shadow-[0_0_20px_rgba(255,184,0,0.3)]" : "border-white/15 bg-white/[.06] text-white"}`}>{n.l}</motion.button>
      ))}
    </div>
  );
}
