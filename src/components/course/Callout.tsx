import type { ReactNode } from "react";

export function Callout({ children, tone = "note" }: { children: ReactNode; tone?: "note" | "warn" | "tip" }) {
  const border = tone === "warn" ? "border-amber-500" : tone === "tip" ? "border-emerald-500" : "border-neutral-900";
  return (
    <div className={`my-6 border-l-4 ${border} bg-neutral-50 py-4 pl-5 pr-4 text-neutral-700`}>
      {children}
    </div>
  );
}
