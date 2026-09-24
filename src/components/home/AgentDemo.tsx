"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Arrow from "@/components/ui/Arrow";

type Step =
  | { kind: "user" | "agent"; text: string; wait: number }
  | { kind: "log"; text: string; tone: "ok" | "info" | "ember"; wait: number };

const SCRIPT: Step[] = [
  { kind: "user", text: "Hola! Os pedí 3 cajas de tomate el lunes y aún no ha llegado 😕", wait: 900 },
  { kind: "log", text: "whatsapp.message → intención: estado_pedido", tone: "info", wait: 500 },
  { kind: "log", text: "erp.pedidos.buscar(cliente: 'Bar Central') → #4812", tone: "info", wait: 700 },
  { kind: "agent", text: "¡Hola Marta! Tu pedido #4812 sale hoy en la ruta de las 12:00. Llega antes de las 14:00.", wait: 1300 },
  { kind: "user", text: "Genial. ¿Podéis añadir 2 de pimiento?", wait: 1400 },
  { kind: "log", text: "stock.check('pimiento', 2) → disponible", tone: "ok", wait: 600 },
  { kind: "log", text: "erp.pedidos.actualizar(#4812, +2 pimiento)", tone: "ok", wait: 600 },
  { kind: "agent", text: "Hecho ✅ He añadido 2 cajas de pimiento al mismo envío. Total actualizado: 86,40 €.", wait: 1200 },
  { kind: "log", text: "crm.nota + factura.regenerar → enviada por email", tone: "ember", wait: 700 },
  { kind: "log", text: "Tiempo total: 38 s · Humanos implicados: 0", tone: "ember", wait: 3800 },
];

type Chat = { kind: "user" | "agent"; text: string };
type Log = { text: string; tone: "ok" | "info" | "ember"; time: string };

export default function AgentDemo() {
  const root = useRef<HTMLElement>(null);
  const [chat, setChat] = useState<Chat[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [typing, setTyping] = useState<"user" | "agent" | null>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    let cancelled = false;
    const timers: number[] = [];
    const sleep = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)));
    const stamp = () => new Date().toLocaleTimeString("es-ES", { hour12: false });

    const play = async () => {
      while (!cancelled) {
        setChat([]);
        setLogs([]);
        for (const step of SCRIPT) {
          if (cancelled) return;
          if (step.kind === "log") {
            await sleep(step.wait);
            if (cancelled) return;
            setLogs((l) => [...l, { text: step.text, tone: step.tone, time: stamp() }].slice(-8));
          } else {
            setTyping(step.kind);
            await sleep(step.wait);
            if (cancelled) return;
            setTyping(null);
            setChat((c) => [...c, { kind: step.kind, text: step.text }]);
          }
        }
        await sleep(1500);
      }
    };
    play();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      setTyping(null);
    };
  }, [running]);

  return (
    <section ref={root} aria-labelledby="demo-title" className="relative overflow-hidden bg-night py-24 md:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[40rem] w-[40rem] rounded-full bg-ember/10 blur-[140px]" />
      <div className="container relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-10">
          <p className="eyebrow mb-5">En directo</p>
          <SplitReveal as="h2" id="demo-title" className="mb-6 font-display text-display-md font-extrabold text-white">
            Un agente de IA que no solo responde: actúa
          </SplitReveal>
          <Reveal>
            <p data-reveal className="mb-8 max-w-[44ch] text-lg leading-relaxed text-white/65">
              Así trabaja un agente de ALCARIA conectado a WhatsApp, tu ERP y tu CRM. Entiende al cliente, consulta
              tus sistemas, ejecuta la acción y deja todo registrado. Si algo se sale de lo previsto, avisa a una
              persona.
            </p>
            <ul data-reveal className="mb-10 space-y-3 text-[15px] text-white/75">
              {["Responde 24/7 con los datos reales de tu negocio", "Ejecuta acciones en tus sistemas", "Registro auditable de cada paso"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ember/15 text-ember">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden>
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div data-reveal>
              <Link href="/servicios/agentes-ia" className="btn-ghost">
                Cómo creamos agentes de IA <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="grid gap-4 md:grid-cols-2 lg:col-span-7" stagger={0.15}>
          {/* Phone */}
          <div data-reveal className="relative mx-auto w-full max-w-[360px] rounded-[40px] border border-white/15 bg-[#0b141a] p-2.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]" aria-hidden>
            <div className="overflow-hidden rounded-[32px]">
              <div className="flex items-center gap-3 bg-[#1f2c34] px-4 pb-3 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ember font-display text-sm font-bold">A</div>
                <div>
                  <p className="text-sm font-semibold text-white">Frutas Levante</p>
                  <p className="text-[11px] text-emerald-400">{typing === "agent" ? "escribiendo…" : "en línea"}</p>
                </div>
              </div>
              <div className="flex h-[420px] flex-col justify-end gap-2 overflow-hidden bg-[#0b141a] bg-dots px-3 py-4">
                {chat.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] animate-[msg-in_.45s_cubic-bezier(.16,1,.3,1)] rounded-xl px-3 py-2 text-[13px] leading-snug text-white ${
                      m.kind === "user" ? "self-end rounded-tr-sm bg-[#005c4b]" : "self-start rounded-tl-sm bg-[#1f2c34]"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
                {typing && (
                  <div className={`flex gap-1 rounded-xl px-3 py-3 ${typing === "user" ? "self-end bg-[#005c4b]" : "self-start bg-[#1f2c34]"}`}>
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" style={{ animationDelay: `${d * 0.15}s` }} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Console */}
          <div data-reveal className="flex min-h-[320px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-abyss/80 backdrop-blur md:mt-16" aria-hidden>
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ember" />
              <span className="h-2.5 w-2.5 rounded-full bg-sand/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-[11px] text-white/40">alcaria · agent-runtime</span>
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-5 font-mono text-[11.5px] leading-relaxed">
              {logs.map((l, i) => (
                <p key={i} className="animate-[msg-in_.4s_ease-out]">
                  <span className="text-white/30">{l.time} </span>
                  <span className={l.tone === "ok" ? "text-emerald-400" : l.tone === "ember" ? "text-ember" : "text-[#8FB3FF]"}>
                    {l.text}
                  </span>
                </p>
              ))}
              <span className="mt-auto inline-block h-4 w-2 animate-blink bg-ember" />
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@keyframes msg-in { from { opacity: 0; transform: translateY(10px) scale(.97) } to { opacity: 1; transform: none } }`}</style>
    </section>
  );
}
