import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "Tarjetas Apple Wallet y Google Wallet para empresas";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ kicker: "Apple Wallet · Google Wallet", title: "Tarjetas de fidelización en el bolsillo de tus clientes" });
}
