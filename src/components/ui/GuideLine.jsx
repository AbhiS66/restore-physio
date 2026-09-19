import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* ─── Continuous scroll-reactive guide line ──────────────────────────────
   One decorative SVG path is woven through the home page composition,
   measured from the live layout. The base path stays visible in a muted
   tone; the portion at the reader's focus is traced over in the brand
   accent via stroke-dasharray, driven by scroll position in a rAF loop.
   Purely decorative — hidden from assistive technology. */

const SECTION_IDS = [
  "hero",
  "about",
  "services",
  "conditions",
  "testimonials",
  "why-us",
  "cta",
  "contact",
];

const FOCUS = 0.62; // traced head rides this far down the viewport
const CROSS_H = 116; // vertical height of a boundary sweep

const fmt = (n) => String(Math.round(n * 100) / 100);

/* Path builder — emits d-string segments and records every waypoint y so a
   length-to-position lookup can be binary-searched once attached. */
function makePath() {
  const d = [];
  const wayY = [];
  return {
    d,
    wayY,
    move(x, y) {
      d.push(`M ${fmt(x)} ${fmt(y)}`);
      wayY.push(y);
    },
    line(x, y) {
      d.push(`L ${fmt(x)} ${fmt(y)}`);
      wayY.push(y);
    },
    /* Boundary sweep: leaves (x, y0) vertically, travels across, and arrives
       at (x2, y1) vertically. Rounded fillet corners with a capped radius
       ease into a shallow, gently sagging middle — soft and monotonic in y.
       Vertical tangents at both ends let it join seamlessly with the lanes
       on either side. */
    sweep(x, y0, x2, y1) {
      const dir = x2 > x ? 1 : -1;
      const h = y1 - y0;
      const r = h * 0.42; // fillet radius, capped by the boundary whitespace
      const k = 0.5523; // cubic quarter-circle approximation
      const xm = x + dir * r;
      const x2m = x2 - dir * r;
      const sag = h - r * 2; // shallow drop across the middle run

      d.push(
        `C ${fmt(x)} ${fmt(y0 + r * k)}, ${fmt(x + dir * (r * (1 - k)))} ${fmt(y0 + r)}, ${fmt(xm)} ${fmt(y0 + r)}`,
        `Q ${fmt((xm + x2m) / 2)} ${fmt(y0 + r + sag)}, ${fmt(x2m)} ${fmt(y0 + r + sag)}`,
        `C ${fmt(x2m + dir * (r * k))} ${fmt(y1 - r)}, ${fmt(x2)} ${fmt(y1 - r * k)}, ${fmt(x2)} ${fmt(y1)}`
      );
      wayY.push(y0 + r * 0.5, y0 + r, y0 + r + sag * 0.5, y1 - r, y1);
    },
    /* Vertical bulge between (x, y0) and (x, y1) with vertical in/out
       tangents, peaking at peakX. */
    bow(x, y0, y1, peakX) {
      const m = (y0 + y1) / 2;
      const k = (y1 - y0) * 0.38;
      d.push(
        `C ${fmt(x)} ${fmt(y0 + k)}, ${fmt(peakX)} ${fmt(m - k * 0.55)}, ${fmt(peakX)} ${fmt(m)}`,
        `C ${fmt(peakX)} ${fmt(m + k * 0.55)}, ${fmt(x)} ${fmt(y1 - k)}, ${fmt(x)} ${fmt(y1)}`
      );
      wayY.push(m, y1);
    },
  };
}

/* Binary-search the rendered path for its length at each waypoint y (the
   path is built strictly downward, so y is monotonic along its length). */
function buildLookup(pathEl, wayY) {
  const total = pathEl.getTotalLength();
  const table = [{ y: wayY[0], len: 0 }];
  let from = 0;
  for (let i = 1; i < wayY.length; i++) {
    const y = wayY[i];
    let lo = from;
    let hi = total;
    for (let j = 0; j < 16; j++) {
      const mid = (lo + hi) / 2;
      if (pathEl.getPointAtLength(mid).y < y) lo = mid;
      else hi = mid;
    }
    const len = (lo + hi) / 2;
    table.push({ y, len });
    from = len;
  }
  return { total, table };
}

/* Map a wrapper-relative y to the revealed length on the path. */
function lengthAtY({ table, total }, y) {
  if (y <= table[0].y) return 0;
  const last = table[table.length - 1];
  if (y >= last.y) return total;
  let lo = 0;
  let hi = table.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (table[mid].y < y) lo = mid;
    else hi = mid;
  }
  const a = table[lo];
  const b = table[hi];
  const span = b.y - a.y;
  return span > 0 ? a.len + ((b.len - a.len) * (y - a.y)) / span : b.len;
}

/* Measure the live layout and weave the path through the section
   composition: lanes sit in the margins outside the text edges, sweeps
   connect them across section-boundary whitespace, bows wrap key content. */
function buildGeometry(root) {
  const els = SECTION_IDS.map((id) => root.querySelector(`#${id}`));
  if (els.some((el) => !el)) return null;

  const rootRect = root.getBoundingClientRect();
  const W = rootRect.width;
  const H = rootRect.height;
  if (W < 40 || H < 200) return null;

  const rel = (el) => {
    const r = el.getBoundingClientRect();
    return {
      top: r.top - rootRect.top,
      bottom: r.bottom - rootRect.top,
      height: r.height,
    };
  };
  const S = els.map(rel);

  // Every section shares the same container (max-w-7xl + responsive
  // padding); measure one to find the text edges the line keeps clear of.
  const container = els[1].firstElementChild || els[1];
  const cRect = container.getBoundingClientRect();
  const boxLeft = cRect.left - rootRect.left;
  const boxRight = cRect.right - rootRect.left;
  const bp = W < 640 ? "mobile" : W < 1024 ? "tablet" : "desktop";
  const pad = bp === "desktop" ? 80 : W >= 768 ? 48 : 24;

  const p = makePath();

  if (bp === "desktop") {
    const tL = boxLeft + pad;
    const tR = boxRight - pad;
    const left = Math.max(46, tL - 110);
    // Right lane stops short of the fixed call buttons (x < W - 104) and
    // keeps clear of the text edge.
    const right = Math.max(tR + 34, Math.min(W - 104, tR + 110));
    const bowIn = Math.max(0, Math.min(56, tL - left - 44));

    // Hero - the journey begins below the navbar; a gentle inward bow wraps
    // the headline block.
    const heroStart = S[0].top + 108;
    const heroMid = S[0].top + S[0].height * 0.55;
    p.move(left, heroStart);
    if (bowIn > 2) p.bow(left, heroStart, heroMid, left + bowIn * 0.85);
    else p.line(left, heroMid);

    // Hero > About - sweep across in the boundary whitespace, biased just
    // below the hero's baseline rule so the two never intersect.
    const cyA = S[0].bottom - CROSS_H / 2 + 28;
    p.line(left, cyA);
    p.sweep(left, cyA, right, cyA + CROSS_H);

    // About - straight along the right margin, then the second sweep.
    const cyB = S[1].bottom - CROSS_H / 2;
    p.line(right, cyB);
    p.sweep(right, cyB, left, cyB + CROSS_H);

    // Services > Conditions - down the left margin with an inward bow that
    // wraps the vertical tab list.
    const tabs = root.querySelector('#conditions [role="tablist"]');
    const tr = tabs ? rel(tabs) : null;
    if (tr && bowIn > 6) {
      const bs = Math.max(S[2].top + 120, tr.top - 52);
      const be = Math.min(S[3].bottom - 134, tr.bottom + 52);
      if (be - bs > 70) {
        p.line(left, bs);
        p.bow(left, bs, be, left + bowIn);
      }
    }
    const cyC = S[3].bottom - CROSS_H / 2;
    p.line(left, cyC);
    p.sweep(left, cyC, right, cyC + CROSS_H);

    // Testimonials > WhyUs > CTA - one long quiet run down the right,
    // crossing the dark sections.
    p.line(right, S[6].bottom - CROSS_H / 2);
    p.sweep(right, S[6].bottom - CROSS_H / 2, left, S[6].bottom + CROSS_H / 2);

    // Contact - down the left margin, finishing in a small inward hook.
    p.line(left, S[7].bottom - 122);
    p.bow(left, S[7].bottom - 122, S[7].bottom - 46, left + Math.max(20, bowIn * 0.5));
  } else {
    // Tablet / mobile - the margins are too tight for side switches, so the
    // line keeps to one side with only a few quiet gestures.
    const lane = bp === "mobile" ? 10 : Math.max(9, Math.min(22, pad * 0.4));
    const out = Math.min(lane - 5, 10); // outward (toward the edge)
    const inB = Math.max(0, Math.min(10, pad - lane - 22)); // inward

    const start = S[0].top + (bp === "mobile" ? 92 : 108);
    const heroMid = S[0].top + S[0].height * 0.5;
    p.move(lane, start);
    if (inB > 2) p.bow(lane, start, heroMid, lane + inB);
    else if (out > 2) p.bow(lane, start, heroMid, lane - out);
    else p.line(lane, heroMid);

    // About - a single quiet outward wave.
    p.line(lane, S[1].top + 90);
    p.bow(lane, S[1].top + 90, S[1].bottom - 120, lane - out * 0.9);

    // Everything below - straight down.
    p.line(lane, S[6].bottom - 92);

    // Contact - small terminal hook.
    p.line(lane, S[7].bottom - 116);
    p.bow(lane, S[7].bottom - 116, S[7].bottom - 46, lane + Math.max(6, inB));
  }

  return { d: p.d.join(" "), wayY: p.wayY, W, H, top: rootRect.top + window.scrollY };
}

export default function GuideLine() {
  const overlayRef = useRef(null);
  const svgRef = useRef(null);
  const haloRef = useRef(null);
  const baseRef = useRef(null);
  const accentRef = useRef(null);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const overlay = overlayRef.current;
    const svg = svgRef.current;
    const base = baseRef.current;
    const accent = accentRef.current;
    const halo = haloRef.current;
    if (!overlay || !svg || !base || !accent || !halo) return;

    let geo = null;
    let shown = 0;
    let raf = 0;
    let running = false;
    let rebuildT = 0;

    const paint = () => {
      const dash = `${shown} ${geo.total + 24}`;
      halo.style.strokeDasharray = dash;
      accent.style.strokeDasharray = dash;
    };

    const targetNow = () => {
      const vh = window.innerHeight;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);
      const remaining = Math.max(0, maxScroll - window.scrollY);
      // The traced head rides the focus line; near the very bottom it is
      // allowed to overtake so the full path completes by the page's end.
      const y = Math.max(window.scrollY + vh * FOCUS - geo.top, geo.endY - remaining);
      return lengthAtY(geo, y);
    };

    const applyStatic = () => {
      shown = targetNow();
      paint();
    };

    const measure = () => {
      if (!overlay.isConnected) return;
      // The sections are siblings of the overlay, not descendants of it -
      // measure from the composition wrapper that contains both.
      const next = buildGeometry(overlay.parentElement || document);
      if (!next) return;
      svg.setAttribute("viewBox", `0 0 ${next.W} ${next.H}`);
      base.setAttribute("d", next.d);
      accent.setAttribute("d", next.d);
      halo.setAttribute("d", next.d);
      const { total, table } = buildLookup(base, next.wayY);
      geo = { total, table, top: next.top, endY: next.wayY[next.wayY.length - 1] };
      setReady(true);
      if (reduceMotion) applyStatic();
      else paint(); // keep the dash in sync; tick() resumes the trace
    };

    const tick = () => {
      if (!geo) {
        running = false;
        return;
      }
      const target = targetNow();
      const delta = target - shown;
      if (Math.abs(delta) > 0.1) {
        shown += delta * 0.15;
        paint();
        raf = requestAnimationFrame(tick);
      } else {
        if (shown !== target) {
          shown = target;
          paint();
        }
        running = false;
      }
    };

    const kick = () => {
      if (running || reduceMotion) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const requestRebuild = () => {
      clearTimeout(rebuildT);
      rebuildT = setTimeout(measure, 160);
    };

    // Content height changes (fonts, images, hydration) after the first
    // build would leave the woven path misaligned - rebuild from the live
    // layout whenever the overlay resizes; watch viewport resizes too.
    const ro = new ResizeObserver(requestRebuild);
    ro.observe(overlay);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", requestRebuild);

    // Fonts change text heights after first paint - rebuild once loaded.
    if (document.fonts?.ready) document.fonts.ready.then(() => measure());

    measure();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(rebuildT);
      ro.disconnect();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", requestRebuild);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[15] transition-opacity duration-1000 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg ref={svgRef} className="h-full w-full" focusable="false">
        <path
          ref={haloRef}
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.12"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          ref={baseRef}
          fill="none"
          stroke="var(--color-mist)"
          strokeOpacity="0.6"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          ref={accentRef}
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.95"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
