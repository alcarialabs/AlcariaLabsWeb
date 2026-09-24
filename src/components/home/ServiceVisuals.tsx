import type { ComponentType } from "react";

/* Lightweight, CSS-animated illustrations for each service. No images, no JS. */

export function AutomationViz() {
  const steps = ["Email", "IA lee", "Valida", "ERP"];
  return (
    <div className="relative flex h-full w-full items-center justify-center p-6">
      <div className="relative flex w-full max-w-[380px] items-center justify-between">
        <div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-ember/20 via-ember/60 to-ember/20" />
        <div className="absolute left-6 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-ember shadow-[0_0_20px_4px_rgba(255,79,0,0.7)] [animation:packet_2.6s_cubic-bezier(.65,0,.35,1)_infinite]" />
        {steps.map((s, i) => (
          <div key={s} className="relative z-10 flex flex-col items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-night font-mono text-[10px] text-white/80 shadow-xl [animation:node-pop_2.6s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.55}s` }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">{s}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes packet { 0%{left:1.5rem;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{left:calc(100% - 1.5rem);opacity:0} }
        @keyframes node-pop { 0%,100%{border-color:rgba(255,255,255,.15);transform:scale(1)} 12%{border-color:#FF4F00;transform:scale(1.08)} 30%{border-color:rgba(255,255,255,.15);transform:scale(1)} }
      `}</style>
    </div>
  );
}

export function AgentViz() {
  const msgs = [
    { me: false, t: "Hola, ¿tenéis hueco el jueves por la tarde?" },
    { me: true, t: "¡Sí! Jueves a las 17:30 o 18:15. ¿Cuál te va mejor?" },
    { me: false, t: "17:30 perfecto 🙌" },
    { me: true, t: "Reservado ✅ Te llegará un recordatorio el día antes." },
  ];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 p-6">
      {msgs.map((m, i) => (
        <div
          key={i}
          className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-snug opacity-0 [animation:bubble_8s_ease-out_infinite] ${
            m.me ? "self-end rounded-br-md bg-cobalt text-white" : "self-start rounded-bl-md bg-white/10 text-white/85"
          }`}
          style={{ animationDelay: `${i * 1.1}s` }}
        >
          {m.t}
        </div>
      ))}
      <style>{`@keyframes bubble { 0%{opacity:0;transform:translateY(12px) scale(.96)} 6%,85%{opacity:1;transform:none} 95%,100%{opacity:0} }`}</style>
    </div>
  );
}

export function WalletViz() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6 [perspective:900px]">
      <div className="relative aspect-[1.58] w-full max-w-[320px] rounded-[22px] bg-gradient-to-br from-[#0b2c55] via-ink to-night p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ring-1 ring-sand/25 [animation:card-tilt_7s_ease-in-out_infinite] [transform-style:preserve-3d]">
        <div className="absolute inset-0 overflow-hidden rounded-[22px]">
          <div className="absolute -inset-y-10 -left-1/2 w-1/3 rotate-12 bg-white/10 blur-md [animation:shine_7s_ease-in-out_infinite]" />
        </div>
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-bold tracking-widest text-sand">CLUB</span>
            <span className="rounded-full bg-ember px-2 py-0.5 font-mono text-[10px] font-bold text-white">ORO</span>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Puntos</p>
            <p className="font-display text-3xl font-bold text-white">1.240</p>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-[11px] text-white/60">Tu próximo café es gratis ☕</span>
            <span className="grid h-10 w-10 grid-cols-4 gap-[2px] rounded-md bg-white p-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className={`${[0, 2, 5, 7, 8, 11, 13, 14, 15].includes(i) ? "bg-ink" : ""}`} />
              ))}
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes card-tilt { 0%,100%{transform:rotateY(-14deg) rotateX(8deg)} 50%{transform:rotateY(14deg) rotateX(-4deg)} }
        @keyframes shine { 0%,100%{transform:translateX(0) rotate(12deg)} 50%{transform:translateX(420%) rotate(12deg)} }
      `}</style>
    </div>
  );
}

export function ConsultViz() {
  const bars = [38, 56, 44, 72, 64, 90];
  return (
    <div className="flex h-full w-full items-end justify-center gap-3 p-8">
      {bars.map((h, i) => (
        <div key={i} className="flex h-full w-8 flex-col justify-end">
          <div
            className="origin-bottom rounded-t-lg bg-gradient-to-t from-cobalt/40 to-[#8FB3FF] [animation:grow_4s_cubic-bezier(.16,1,.3,1)_infinite]"
            style={{ height: `${h}%`, animationDelay: `${i * 0.12}s`, ...(i === bars.length - 1 ? { background: "linear-gradient(to top, rgba(255,79,0,.4), #FF4F00)" } : {}) }}
          />
        </div>
      ))}
      <style>{`@keyframes grow { 0%{transform:scaleY(.1)} 35%,80%{transform:scaleY(1)} 100%{transform:scaleY(.1)} }`}</style>
    </div>
  );
}

export const SERVICE_VIZ: Record<string, ComponentType> = {
  "automatizacion-de-procesos": AutomationViz,
  "agentes-ia": AgentViz,
  "tarjetas-wallet": WalletViz,
  "consultoria-ia": ConsultViz,
};
