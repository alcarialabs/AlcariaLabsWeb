import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/content/blog";
import type { ReactNode } from "react";

const textOf = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) return textOf((node as { props: { children?: ReactNode } }).props.children);
  return "";
};

const components: Components = {
  h2: ({ children }) => {
    const id = slugify(textOf(children));
    return (
      <h2 id={id} className="group mb-5 mt-16 scroll-mt-28 font-display text-[clamp(1.45rem,2.1vw,1.85rem)] font-bold leading-[1.15] tracking-tight text-ink first:mt-0">
        <a href={`#${id}`} className="relative">
          <span aria-hidden className="absolute -left-7 top-0 hidden text-ember opacity-0 transition-opacity group-hover:opacity-100 md:inline">
            #
          </span>
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ children }) => {
    const id = slugify(textOf(children));
    return (
      <h3 id={id} className="mb-3 mt-10 scroll-mt-28 font-display text-xl font-bold leading-snug text-ink md:text-2xl">
        {children}
      </h3>
    );
  },
  p: ({ children }) => <p className="mb-6 text-[17.5px] leading-[1.8] text-ink/80">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  a: ({ href = "", children }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} className="font-medium text-cobalt underline decoration-cobalt/30 decoration-2 underline-offset-4 transition-colors hover:decoration-ember">
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-cobalt underline decoration-cobalt/30 decoration-2 underline-offset-4 hover:decoration-ember">
        {children}
      </a>
    ),
  ul: ({ children }) => <ul className="mb-7 space-y-3 pl-1 text-[17px] leading-[1.7] text-ink/80">{children}</ul>,
  ol: ({ children }) => (
    <ol className="mb-7 list-decimal space-y-3 pl-6 [&>li]:pl-2 text-[17px] leading-[1.7] text-ink/80 marker:font-display marker:font-bold marker:text-ember">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-10 rounded-r-2xl border-l-4 border-ember bg-white px-7 py-5 font-display text-lg font-semibold text-ink [&_p]:mb-0 [&_p]:text-ink">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-10 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
      <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-ink text-white">{children}</thead>,
  th: ({ children }) => <th className="px-5 py-3.5 font-display text-sm font-bold">{children}</th>,
  td: ({ children }) => <td className="border-t border-ink/10 px-5 py-3.5 align-top leading-relaxed text-ink/80">{children}</td>,
  hr: () => <hr className="my-12 border-ink/10" />,
  code: ({ children }) => <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[0.9em]">{children}</code>,
};

export default function ArticleBody({ content }: { content: string }) {
  return (
    <div className="article-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
