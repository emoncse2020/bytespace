import type { ComponentProps } from "react";

/**
 * Three input shapes exist in the design and they are deliberately different:
 *  field      — auth forms      · 1px gray-100 · radius 12
 *  pill       — footer newsletter · 1px gray-200 · radius 100
 *  search     — hero search bar  · no border     · radius 24
 */
type Variant = "field" | "pill" | "search";

const VARIANTS: Record<Variant, string> = {
  field:
    "bg-white border border-gray-100 rounded-[12px] h-[52px] px-6 py-3 text-[18px] leading-[1.6] placeholder:text-gray-400",
  pill:
    "bg-white border border-gray-200 rounded-pill h-[52px] px-6 py-[18px] text-[16px] leading-[1.6] placeholder:text-gray-950",
  search:
    "bg-transparent border-0 h-full flex-1 text-[18px] leading-[1.6] placeholder:text-gray-400 focus:outline-none",
};

export default function Input({
  variant = "field",
  className = "",
  ...rest
}: { variant?: Variant } & ComponentProps<"input">) {
  return (
    <input
      className={`w-full text-gray-950 outline-none transition-colors focus:border-blue-800 ${VARIANTS[variant]} ${className}`}
      {...rest}
    />
  );
}
