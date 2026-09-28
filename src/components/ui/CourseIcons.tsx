/* Material Symbols outlines, matching the set the design uses. */

type Props = { className?: string; size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
});

export function ShareIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 1 0-3-3c0 .24.04.47.09.7L8.04 9.81A3 3 0 1 0 6 15c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.8.43-.8.65a2.92 2.92 0 1 0 2.92-2.92z" />
    </svg>
  );
}

export function StarFilled({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export function PeopleIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12a4 4 0 1 0 0-8 4 4 0 0 0-1.33.24 5.98 5.98 0 0 1 0 7.52c.42.15.87.24 1.33.24zM9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

export function SourceIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-6.5 10h-6v-1.5h6V16zm3-3h-9v-1.5h9V13z" />
    </svg>
  );
}

export function VideocamIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
    </svg>
  );
}

export function BadgeIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M19 5h-4.18A2.99 2.99 0 0 0 12 3a2.99 2.99 0 0 0-2.82 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-7-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 16.43V17z" />
    </svg>
  );
}

export function ConsultIcon({ className, size = 24 }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9 13c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 0l-1.63 1.63a8.07 8.07 0 0 1 0 10.74L20.07 14c2.98-2.98 2.98-7.5 0-10.74L20.07 0z" />
    </svg>
  );
}

export function CheckCircle({ className, size = 22 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden className={className}>
      <circle cx="11" cy="11" r="11" fill="#003BE2" />
      <path
        d="M6.4 11.3l3 3 6.2-6.2"
        stroke="#fff"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
