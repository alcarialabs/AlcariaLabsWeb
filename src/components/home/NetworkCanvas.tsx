"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

type Node = { x: number; y: number; vx: number; vy: number; r: number; hue: 0 | 1 | 2 };
type Packet = { a: number; b: number; t: number; speed: number };

const COLORS = ["227,204,156", "111,155,255", "255,79,0"]; // sand, cobalt-light, ember

/**
 * "Automation network": drifting nodes, links between close neighbours and ember
 * packets travelling along the links. The pointer gently attracts nearby nodes.
 * Pauses when off-screen or the tab is hidden; scales node count to viewport.
 */
export default function NetworkCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const linkDist = () => Math.min(170, Math.max(110, w / 9));

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      // Mobile browsers resize the height when the URL bar hides: keep the nodes then.
      const keep = nodes.length > 0 && Math.abs(rect.width - w) < 1;
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (keep) return;
      const count = Math.round(Math.min(150, Math.max(45, (w * h) / 11000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28 - 0.08,
        r: Math.random() * 1.6 + 0.6,
        hue: (Math.random() < 0.12 ? 2 : Math.random() < 0.5 ? 1 : 0) as Node["hue"],
      }));
      packets = [];
    };

    const spawnPacket = () => {
      const a = Math.floor(Math.random() * nodes.length);
      const na = nodes[a];
      const max = linkDist();
      let best = -1;
      let bestD = Infinity;
      for (let i = 0; i < nodes.length; i++) {
        if (i === a) continue;
        const d = Math.hypot(nodes[i].x - na.x, nodes[i].y - na.y);
        if (d < max && d < bestD && Math.random() > 0.3) {
          best = i;
          bestD = d;
        }
      }
      if (best >= 0) packets.push({ a, b: best, t: 0, speed: 0.012 + Math.random() * 0.02 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const max = linkDist();

      for (const n of nodes) {
        if (!reduced) {
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const d = Math.hypot(dx, dy);
            if (d < 220 && d > 1) {
              n.vx += (dx / d) * 0.012;
              n.vy += (dy / d) * 0.012;
            }
          }
          n.vx *= 0.992;
          n.vy *= 0.992;
          // keep a minimum drift so the field never freezes
          if (Math.hypot(n.vx, n.vy) < 0.08) {
            n.vx += (Math.random() - 0.5) * 0.04;
            n.vy += (Math.random() - 0.5) * 0.04 - 0.01;
          }
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
        }
      }

      // links
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > max || Math.abs(dy) > max) continue;
          const d = Math.hypot(dx, dy);
          if (d < max) {
            const alpha = (1 - d / max) * 0.22;
            ctx.strokeStyle = `rgba(143,179,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // pointer links
      if (pointer.active) {
        for (const n of nodes) {
          const d = Math.hypot(n.x - pointer.x, n.y - pointer.y);
          if (d < 200) {
            ctx.strokeStyle = `rgba(255,79,0,${(1 - d / 200) * 0.45})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${COLORS[n.hue]},${n.hue === 2 ? 0.95 : 0.7})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // packets
      if (!reduced && packets.length < 18 && Math.random() < 0.18) spawnPacket();
      packets = packets.filter((p) => p.t <= 1);
      for (const p of packets) {
        p.t += p.speed;
        const a = nodes[p.a];
        const b = nodes[p.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 9);
        g.addColorStop(0, "rgba(255,120,40,0.95)");
        g.addColorStop(1, "rgba(255,79,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(x, y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = visible && !document.hidden && !reduced ? requestAnimationFrame(loop) : 0;
    };
    const start = () => {
      if (!raf && !reduced) raf = requestAnimationFrame(loop);
    };

    init();
    reduced ? draw() : start();

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = e.pointerType === "mouse";
    };
    const onLeave = () => (pointer.active = false);
    const onResize = () => {
      init();
      if (reduced) draw();
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    const onVisibility = () => !document.hidden && start();

    io.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`h-full w-full ${className}`} />;
}
