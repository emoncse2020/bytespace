import type { ReactNode } from "react";

type Variant = "glass" | "lime" | "muted" | "veil";

const VARIANTS: Record<Variant, string> = {
  // white pill over the blue hero — course meta
  glass: "bg-white text-gray-950 px-6 py-2 text-[16px] leading-[1.2] backdrop-blur-[20px]",
  // lime pill — Share, Creator badge
  lime: "bg-lime-400 text-gray-950 px-6 py-2 text-[16px] leading-[24px] backdrop-blur-[20px]",
  // grey chip inside cards — difficulty level
  muted: "bg-gray-50 text-gray-700 px-3 py-1.5 text-[12px] leading-[20px]",
  // translucent badge over a card thumbnail
  veil:
    "bg-[rgba(246,246,246,0.6)] text-ink-700 px-3 py-1.5 text-[12px] leading-[20px] backdrop-blur-[4px]",
};

export default function Chip({
  variant = "muted",
  children,
  className = "",
}: {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-1 rounded-card font-medium whitespace-nowrap ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
