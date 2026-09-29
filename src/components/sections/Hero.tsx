import Image from "next/image";
import HeroSearch from "@/components/ui/HeroSearch";
import Ornament, { type OrnamentSpec } from "@/components/ui/Ornament";
import { HERO_AVATARS } from "@/data/content";

const LIME = "#d4fb20";
const OFFWHITE = "#f5f5f6";

/**
 * Positions come straight from the Figma canvas (1440x1024). Figma centres
 * these with `left: calc(50% + X)` plus a -50% translate, so the left edge is
 * 720 + X - size/2. Percentage tops are resolved against the 1024 height.
 */
const ORNAMENTS: OrnamentSpec[] = [
  { src: "/assets/ornaments/spiral-b.png", mask: "/assets/ornaments/spiral-b-mask.png", tint: LIME,     left: -118, top: 221, size: 385 },
  { src: "/assets/ornaments/cone-b.png",   mask: "/assets/ornaments/cone-b-mask.png",   tint: LIME,     left: 1231, top: 221, size: 370 },
  { src: "/assets/ornaments/cone-c.png",   mask: "/assets/ornaments/cone-c-mask.png",   tint: OFFWHITE, left: 1106, top: 464, size: 188 },
  { src: "/assets/ornaments/spiral-b.png", mask: "/assets/ornaments/spiral-c-mask.png", tint: OFFWHITE, left: 183,  top: 477, size: 175, flip: true },
  { src: "/assets/ornaments/spiral-a.png", mask: "/assets/ornaments/spiral-a-mask.png", tint: OFFWHITE, left: 1127, top: 672, size: 330 },
  { src: "/assets/ornaments/cone-a.png",   mask: "/assets/ornaments/cone-a-mask.png",   tint: OFFWHITE, left: 18,   top: 682, size: 342 },
];

function FloatingCard({
  className = "",
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      style={style}
      className={`flex flex-col gap-2 rounded-float bg-white p-4 backdrop-blur-[10px] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-blue-800 lg:h-[1024px]">
      {/* faint 12-column grid drawn in the design itself */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <Image src="/assets/hero/grid.svg" alt="" fill className="object-cover" priority />
      </div>

      {/* lime radial glow behind the student */}
      <div
        className="pointer-events-none absolute left-1/2 hidden size-[1149px] -translate-x-1/2 lg:block"
        style={{ top: 582 }}
        aria-hidden
      >
        <Image src="/assets/hero/glow.svg" alt="" fill className="object-contain" />
      </div>

      {/* 3D ornaments, pinned to the 1440 design canvas */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 hidden h-[1024px] w-[1440px] -translate-x-1/2 xl:block"
        aria-hidden
      >
        {ORNAMENTS.map((o) => (
          <Ornament key={`${o.src}-${o.left}-${o.top}`} {...o} />
        ))}
      </div>

      {/* headline + search */}
      <div className="relative z-10 container-1200 flex flex-col items-center gap-[60px] pt-[169px] text-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-display track-tight max-w-[935px] text-[40px] leading-[1.2] font-semibold text-white sm:text-[56px] lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[760px] text-[18px] leading-[1.6] text-gray-100">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        <HeroSearch />
      </div>

      {/* student cutout + the three floating stat cards, pinned to the canvas */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block"
      >
        <div
          className="absolute h-[541px] w-[578px]"
          style={{ left: 431, top: 512 }}
        >
          <Image
            src="/assets/hero/student.png"
            alt="A student learning with ByteSpace"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* category pill */}
        <FloatingCard className="absolute w-max" style={{ left: 404, top: 639 }}>
          <span className="text-[16px] leading-[1.2] font-medium text-gray-950">
            UI/UX Design
          </span>
          <span className="flex items-center gap-2 text-[12px] leading-[1.6] text-gray-400">
            200 Courses <span className="text-[10px] leading-[1.5]">&bull;</span> 1000+ Students
          </span>
        </FloatingCard>

        {/* learning progress */}
        <FloatingCard className="absolute" style={{ left: 842, top: 651 }}>
          <span className="text-[14px] leading-[1.2] font-medium text-gray-950">
            Learning Progress
          </span>
          <span className="font-display track-tight text-[48px] leading-[1.2] font-semibold text-gray-950">
            55%
          </span>
          <span className="block h-2 w-[200px] rounded-card bg-track">
            <span className="block h-2 w-[112px] rounded-card bg-lime-400" />
          </span>
        </FloatingCard>

        {/* happy students */}
        <FloatingCard className="absolute w-[258px]" style={{ left: 328, top: 837 }}>
          <div className="flex flex-col">
            <span className="text-[16px] leading-[1.2] font-medium text-gray-950">
              Happy Students
            </span>
            <span className="flex items-center gap-1 text-[12px] leading-[1.6]">
              <span className="text-gray-950">4.5</span>
              <span className="text-gray-400">(240)</span>
              <Image src="/assets/icons/star.svg" alt="" width={16} height={16} />
            </span>
          </div>
          <div className="flex items-center">
            {HERO_AVATARS.slice(0, 6).map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={43}
                height={43}
                className="-mr-4 rounded-full"
                style={{ zIndex: 6 - i }}
              />
            ))}
            <span className="relative z-10 inline-flex size-[43px] items-center justify-center">
              <Image
                src="/assets/hero/badge-2k.svg"
                alt=""
                width={43}
                height={43}
                className="absolute inset-0"
              />
              <span className="relative text-[12px] leading-[1.5] font-bold text-gray-950">
                2K+
              </span>
            </span>
          </div>
        </FloatingCard>
      </div>

      {/* compact hero image for narrow viewports */}
      <div className="relative z-10 mx-auto mt-12 block h-[320px] w-[340px] lg:hidden">
        <Image
          src="/assets/hero/student.png"
          alt="A student learning with ByteSpace"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
