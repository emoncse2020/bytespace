import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import CourseCard from "@/components/cards/CourseCard";
import Ornament from "@/components/ui/Ornament";
import { COURSES, HERO_AVATARS } from "@/data/content";

const LIME = "#d4fb20";
const OFFWHITE = "#f5f5f6";

/** 120px lattice, 2px lines of white at 12.2% — as measured off the design. */
const GRID =
  "repeating-linear-gradient(to right, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)," +
  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)";

function HappyStudents() {
  return (
    <div className="flex w-[258px] flex-col gap-2 rounded-[16px] bg-lime-400 p-4">
      <span className="text-[16px] leading-[1.2] font-medium text-gray-950">
        Happy Students
      </span>
      <span className="flex items-center gap-1 text-[12px] leading-[1.6]">
        <span className="font-bold text-gray-950">4.5</span>
        <span className="text-gray-700">(240)</span>
        <Image src="/assets/icons/star-blue.svg" alt="" width={14} height={14} />
      </span>
      <span className="flex items-center">
        {HERO_AVATARS.slice(0, 6).map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={38}
            height={38}
            className="-mr-2 rounded-full"
            style={{ zIndex: 6 - i }}
          />
        ))}
        <span className="relative z-10 ml-1 inline-flex size-[38px] items-center justify-center rounded-full bg-gray-950">
          <span className="text-[11px] font-bold text-white">2K+</span>
        </span>
      </span>
    </div>
  );
}

export default function AuthLayout({
  eyebrow,
  heading,
  intro,
  children,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  children: ReactNode;
}) {
  const card = (
    <div className="flex w-full max-w-[579px] flex-col rounded-card bg-white px-8 py-10 sm:px-[63px] sm:py-[61px] xl:h-[784px]">
      <h2 className="sr-only">{heading}</h2>
      {children}
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-800">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: GRID }}
        aria-hidden
      />

      {/* the design shows the mark alone here, with no wordmark */}
      <Link
        href="/"
        aria-label="ByteSpace home"
        className="absolute z-30 left-5 top-8 xl:left-[120px] xl:top-[35px]"
      >
        <Image
          src="/assets/icons/logo-mark.svg"
          alt=""
          width={29}
          height={32}
          priority
        />
      </Link>

      {/* desktop: the design's exact 1440 x 1024 canvas */}
      <div className="relative mx-auto hidden h-[1024px] w-[1440px] xl:block">
        <div className="absolute" style={{ left: 120, top: 120, width: 475 }}>
          <p className="text-[18px] leading-[1.6] font-medium text-white">
            {eyebrow}
          </p>
          <p className="mt-2 text-[18px] leading-[1.6] text-white">{intro}</p>
        </div>

        {/* decorative stack, back to front */}
        <div className="absolute" style={{ left: 122, top: 394, width: 373, zIndex: 10 }}>
          <CourseCard course={COURSES[1]} tone="auth" />
        </div>
        <div className="absolute" style={{ left: 150, top: 320, zIndex: 30 }}>
          <Ornament
            src="/assets/ornaments/cone-a.png"
            mask="/assets/ornaments/cone-a-mask.png"
            tint={LIME}
            left={0}
            top={0}
            size={146}
          />
        </div>
        <div
          className="absolute"
          style={{ left: 233, top: 305, width: 373, zIndex: 20 }}
        >
          <CourseCard course={COURSES[2]} tone="auth" />
        </div>
        <div className="absolute" style={{ left: 471, top: 614, zIndex: 50 }}>
          <Ornament
            src="/assets/ornaments/spiral-a.png"
            mask="/assets/ornaments/spiral-a-mask.png"
            tint={OFFWHITE}
            left={0}
            top={0}
            size={180}
          />
        </div>
        <div className="absolute" style={{ left: 96, top: 702, zIndex: 30 }}>
          <Ornament
            src="/assets/ornaments/cone-c.png"
            mask="/assets/ornaments/cone-c-mask.png"
            tint={LIME}
            left={0}
            top={0}
            size={188}
          />
        </div>
        <div className="absolute" style={{ left: 348, top: 740, zIndex: 40 }}>
          <HappyStudents />
        </div>

        {/* form card — 579 x 784 at (741,120) */}
        <div
          className="absolute"
          style={{ left: 741, top: 120, width: 579, zIndex: 30 }}
        >
          {card}
        </div>
      </div>

      {/* below xl: stacked, no decoration */}
      <div className="relative z-10 container-1200 flex flex-col gap-10 py-28 xl:hidden">
        <div className="max-w-[475px]">
          <p className="text-[18px] leading-[1.6] font-medium text-white">
            {eyebrow}
          </p>
          <p className="mt-2 text-[18px] leading-[1.6] text-white">{intro}</p>
        </div>
        <div className="flex justify-center">{card}</div>
      </div>
    </div>
  );
}
