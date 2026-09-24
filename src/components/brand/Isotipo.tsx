import Image from "next/image";
import type { SVGProps } from "react";

/** ALCARIA isotype: the Λ "rocket" and its ember flame. Parts are addressable for animation. */
export const ISO_A_PATH =
  "M840 250 L848 241 L1090 241 L1099 250 L1554 1455 L1545 1465 L1279 1465 L969 552 L659 1465 L393 1465 L384 1455 Z";
export const ISO_FLAME_PATH =
  "M969 1388 C1024 1388 1068 1432 1068 1487 C1068 1547 969 1718 969 1718 C969 1718 870 1547 870 1487 C870 1432 914 1388 969 1388 Z";

export default function Isotipo({
  aColor = "#E3CC9C",
  flameColor = "#FF4F00",
  title = "ALCARIA",
  ...props
}: SVGProps<SVGSVGElement> & { aColor?: string; flameColor?: string; title?: string }) {
  return (
    <svg viewBox="340 200 1260 1560" fill="none" role="img" aria-label={title} {...props}>
      <path data-iso="a" d={ISO_A_PATH} fill={aColor} />
      <path data-iso="flame" d={ISO_FLAME_PATH} fill={flameColor} style={{ transformOrigin: "969px 1388px" }} />
    </svg>
  );
}

// Intrinsic size of the trimmed wordmark PNGs in /public/images/logo.
const W = 2773;
const H = 576;

/** Official wordmark (trimmed from the brand PNG). */
export function Wordmark({
  className = "h-6 w-auto",
  dark = false,
  priority = false,
  sizes = "160px",
}: {
  className?: string;
  dark?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={dark ? "/images/logo/alcaria-wordmark-ink.png" : "/images/logo/alcaria-wordmark-white.png"}
      alt="ALCARIA"
      width={W}
      height={H}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
