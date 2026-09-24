import {
  siApple,
  siGmail,
  siGoogle,
  siGooglecalendar,
  siGooglesheets,
  siHubspot,
  siMake,
  siN8n,
  siNotion,
  siShopify,
  siStripe,
  siWhatsapp,
  siWoocommerce,
  siWordpress,
  siZapier,
  type SimpleIcon,
} from "simple-icons";
import Marquee from "@/components/motion/Marquee";

type Tool = { name: string; icon: SimpleIcon };

const TOOLS: Tool[] = [
  { name: "WhatsApp", icon: siWhatsapp },
  { name: "Gmail", icon: siGmail },
  { name: "Google Sheets", icon: siGooglesheets },
  { name: "Google Calendar", icon: siGooglecalendar },
  { name: "HubSpot", icon: siHubspot },
  { name: "Shopify", icon: siShopify },
  { name: "WooCommerce", icon: siWoocommerce },
  { name: "WordPress", icon: siWordpress },
  { name: "Stripe", icon: siStripe },
  { name: "Notion", icon: siNotion },
  { name: "Apple Wallet", icon: siApple },
  { name: "Google Wallet", icon: siGoogle },
  { name: "n8n", icon: siN8n },
  { name: "Make", icon: siMake },
  { name: "Zapier", icon: siZapier },
];

// Dark brand colours would vanish on the dark background: render them white.
const visible = (hex: string) => {
  const n = parseInt(hex, 16);
  const lum = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum < 120 ? "#FFFFFF" : `#${hex}`;
};

export default function Integrations() {
  return (
    <section
      aria-labelledby="integraciones-title"
      className="relative border-y border-white/10 bg-night py-10 md:py-14"
    >
      <div className="container mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
        <h2 id="integraciones-title" className="eyebrow">
          Se integra con las herramientas que ya usas
        </h2>
        <p className="text-sm text-white/45">Y con cualquier sistema que tenga API: ERP, CRM, TPV o programa contable.</p>
      </div>
      <Marquee duration={60} className="mask-fade-x">
        {TOOLS.map(({ name, icon }) => (
          <span
            key={name}
            className="group mx-3 flex items-center gap-3.5 rounded-full border border-white/10 bg-white/[0.03] py-3 pl-3.5 pr-6 transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.06] md:mx-4 md:gap-4 md:py-4 md:pl-4 md:pr-8"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12"
              style={{ background: `${visible(icon.hex)}1A` }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" aria-hidden>
                <path d={icon.path} fill={visible(icon.hex)} />
              </svg>
            </span>
            <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-white/85 md:text-2xl">
              {name}
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
