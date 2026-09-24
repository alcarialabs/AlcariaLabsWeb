import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "ALCARIA: automatización con IA, agentes y tarjetas Wallet para empresas";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ kicker: "Automatización · Agentes IA · Wallet", title: "Tu empresa, en piloto automático." });
}
