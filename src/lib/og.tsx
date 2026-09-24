import { ImageResponse } from "next/og";
import { ISO_A_PATH, ISO_FLAME_PATH } from "@/components/brand/Isotipo";

export const OG_SIZE = { width: 1200, height: 630 };

/** Brand display font for social cards; falls back to the default font if offline. */
let syne: Promise<ArrayBuffer | null> | null = null;
function loadSyne() {
  syne ??= (async () => {
    try {
      const css = await (await fetch("https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap")).text();
      const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
      return url ? await (await fetch(url)).arrayBuffer() : null;
    } catch {
      return null;
    }
  })();
  return syne;
}

/** Branded 1200×630 social card. */
export async function renderOg({ kicker, title, footer = "alcarialabs.com" }: { kicker: string; title: string; footer?: string }) {
  const font = await loadSyne();
  const size = (title.length > 70 ? 50 : title.length > 45 ? 58 : 68) - (font ? 0 : -6);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#000D1C",
          backgroundImage:
            "radial-gradient(900px 600px at 95% -10%, rgba(3,68,220,0.55), transparent 60%), radial-gradient(700px 500px at -10% 110%, rgba(255,79,0,0.35), transparent 60%)",
          color: "white",
          fontFamily: font ? "Syne" : "sans-serif",
          position: "relative",
        }}
      >
        <svg
          viewBox="340 200 1260 1560"
          width="330"
          height="408"
          style={{ position: "absolute", right: 64, top: 110, opacity: 0.95 }}
        >
          <path d={ISO_A_PATH} fill="#E3CC9C" />
          <path d={ISO_FLAME_PATH} fill="#FF4F00" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#FF4F00" }} />
          <div style={{ fontSize: 18, letterSpacing: 5, textTransform: "uppercase", color: "#E3CC9C" }}>{kicker}</div>
        </div>
        <div style={{ display: "flex", fontSize: size, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 800 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26 }}>
          <div style={{ fontWeight: 800, letterSpacing: 8 }}>ALCARIA</div>
          <div style={{ color: "rgba(255,255,255,0.55)" }}>{footer}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: font ? [{ name: "Syne", data: font, weight: 800, style: "normal" }] : undefined },
  );
}
