import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "accent" | "outline";

const VARIANTS: Record<Variant, string> = {
  // lime CTA — the design's default action
  primary:
    "bg-lime-400 text-gray-950 px-6 py-3 text-[18px] leading-[1.2] font-medium hover:bg-lime-500",
  // blurred pill used by "View More"
  accent:
    "bg-lime-accent text-gray-900 px-6 py-2 text-[16px] leading-[24px] font-medium backdrop-blur-[20px] hover:brightness-95",
  // bordered secondary, e.g. "See Full Profile"
  outline:
    "border border-gray-200 text-gray-700 px-4 py-2 text-[16px] leading-[1.2] font-medium hover:bg-gray-50",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-card whitespace-nowrap " +
  "transition-colors duration-200 cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800";

type Props = {
  variant?: Variant;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
  href?: string;
} & Omit<ComponentProps<"button">, "ref">;

export default function Button({
  variant = "primary",
  fullWidth,
  children,
  className = "",
  href,
  ...rest
}: Props) {
  const cls = `${BASE} ${VARIANTS[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
