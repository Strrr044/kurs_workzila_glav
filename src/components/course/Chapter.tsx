import type { ReactNode } from "react";

export function Chapter({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section id={`chapter-${number}`} className="scroll-mt-8 pt-24">
      <p className="text-sm font-medium tracking-widest text-neutral-500">ГЛАВА {number}</p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">{title}</h2>
      <hr className="mt-6 border-neutral-900" />
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-800">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-12 text-2xl font-bold text-neutral-900">{children}</h3>;
}

export function MiniHeading({ children }: { children: ReactNode }) {
  return <h4 className="mt-8 text-xl font-semibold text-neutral-900">{children}</h4>;
}
