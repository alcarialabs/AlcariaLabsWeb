import Link from "next/link";

export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { name: string; path: string }[];
  tone?: "dark" | "light";
}) {
  return (
    <nav aria-label="Migas de pan" className="mb-8">
      <ol className={`flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] ${tone === "dark" ? "text-white/45" : "text-ink/45"}`}>
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-ember">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className={`line-clamp-1 max-w-[40ch] ${tone === "dark" ? "text-white/80" : "text-ink/80"}`}>
                {it.name}
              </span>
            ) : (
              <Link href={it.path} className="transition-colors hover:text-ember">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
