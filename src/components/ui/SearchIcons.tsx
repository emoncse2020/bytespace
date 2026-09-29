/* Material Symbols outlines, matching the set the design uses. */

type Props = { className?: string; size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
});

export function FilterIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A1 1 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z" />
    </svg>
  );
}

export function LevelIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M19 3h-2v18h2V3zm-6 6h-2v12h2V9zM7 13H5v8h2v-8z" />
    </svg>
  );
}

export function CategoryIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 2l-5.5 9h11L12 2zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zM3 21.5h8v-8H3v8z" />
    </svg>
  );
}

export function SortIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
    </svg>
  );
}

export function ChevronDown({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  );
}

export function ChevronLeft({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

export function ChevronRight({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );
}
