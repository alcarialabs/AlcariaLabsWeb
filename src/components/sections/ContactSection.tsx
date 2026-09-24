"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Arrow from "@/components/ui/Arrow";

const INTERESTS = ["Automatización", "Agente de IA / WhatsApp", "Tarjetas Wallet", "Consultoría IA", "Aún no lo sé"];

export default function ContactSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [interest, setInterest] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Firebase is loaded on demand so it doesn't weigh on every page.
      const [{ db }, { collection, addDoc }] = await Promise.all([import("../../../firebase"), import("firebase/firestore")]);
      // Same document shape as before (name, email, message) so existing Firestore rules keep working.
      await addDoc(collection(db, "tickets"), {
        name: form.name,
        email: form.email,
        message: interest ? `[Interés: ${interest}] ${form.message}` : form.message,
      });
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
      setInterest("");
    } catch {
      setStatus("error");
    }
  };

  const field =
    "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-7 text-lg text-white outline-none transition-colors placeholder:text-transparent focus:border-ember focus:ring-0";
  const label =
    "pointer-events-none absolute left-0 top-7 origin-left font-display text-lg text-white/45 transition-all duration-300 ease-expo peer-focus:top-0 peer-focus:scale-75 peer-focus:text-ember peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-75";

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-night py-24 md:py-36">
      <div className="pointer-events-none absolute -left-40 top-20 h-[36rem] w-[36rem] rounded-full bg-cobalt/20 blur-[140px]" />
      <div className="container relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">Contacto</p>
          <SplitReveal
            as={headingLevel}
            id="contact-title"
            className="mb-6 font-display text-display-md font-extrabold text-white"
            trigger={headingLevel === "h1" ? "load" : "scroll"}
          >
            Diseñemos juntos tu primera automatización
          </SplitReveal>
          <p className="mb-10 max-w-[40ch] text-lg leading-relaxed text-white/65">
            En una videollamada de 30 minutos analizamos tu caso, identificamos qué procesos se pueden
            automatizar y estimamos el tiempo y el coste que recuperarías. Sin coste ni compromiso.
          </p>
          <ul className="space-y-5">
            {[
              ["01", "Atención directa de un especialista del equipo"],
              ["02", "Diagnóstico con estimación de ahorro y retorno"],
              ["03", "Propuesta cerrada, clara y sin compromiso"],
            ].map(([n, t]) => (
              <li key={n} className="flex items-center gap-4 text-white/80">
                <span className="font-mono text-xs text-ember">{n}</span>
                {t}
              </li>
            ))}
          </ul>
          <a href={`mailto:${SITE.email}`} className="link-underline mt-10 inline-block font-display text-xl font-semibold text-sand">
            {SITE.email}
          </a>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <div data-reveal className="glass rounded-[32px] p-7 md:p-10">
            {status === "ok" ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center" role="status">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mb-3 font-display text-3xl font-bold text-white">¡Mensaje recibido!</h3>
                <p className="mb-8 text-white/65">Te escribimos muy pronto. Mientras tanto, echa un vistazo a nuestras guías.</p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-ghost">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <fieldset>
                  <legend className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Me interesa</legend>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((i) => (
                      <button
                        type="button"
                        key={i}
                        aria-pressed={interest === i}
                        onClick={() => setInterest((cur) => (cur === i ? "" : i))}
                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ease-expo ${
                          interest === i
                            ? "border-ember bg-ember text-white"
                            : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="relative">
                  <input id="c-name" name="name" required autoComplete="name" placeholder="Nombre" value={form.name} onChange={onChange} className={field} />
                  <label htmlFor="c-name" className={label}>Tu nombre</label>
                </div>
                <div className="relative">
                  <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="Email" value={form.email} onChange={onChange} className={field} />
                  <label htmlFor="c-email" className={label}>Email de trabajo</label>
                </div>
                <div className="relative">
                  <textarea id="c-msg" name="message" required rows={4} placeholder="Mensaje" value={form.message} onChange={onChange} className={`${field} resize-none`} />
                  <label htmlFor="c-msg" className={label}>¿Qué proceso te gustaría automatizar?</label>
                </div>
                {status === "error" && (
                  <p role="alert" className="text-sm text-ember">
                    No hemos podido enviar el mensaje. Inténtalo de nuevo o escríbenos a {SITE.email}.
                  </p>
                )}
                <div className="flex flex-col-reverse items-start gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[30ch] text-xs leading-relaxed text-white/40">
                    Al enviar aceptas nuestra{" "}
                    <a href="/privacy-policy" className="underline hover:text-white">
                      política de privacidad
                    </a>
                    .
                  </p>
                  <button type="submit" disabled={status === "loading"} className="btn-ember btn-fill disabled:opacity-60">
                    {status === "loading" ? "Enviando…" : "Enviar mensaje"}
                    <Arrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
