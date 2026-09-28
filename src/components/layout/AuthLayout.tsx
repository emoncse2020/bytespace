import Image from "next/image";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import CourseCard from "@/components/cards/CourseCard";
import Ornament, { type OrnamentSpec } from "@/components/ui/Ornament";
import { COURSES, HERO_AVATARS } from "@/data/content";

const LIME = "#d4fb20";
const OFFWHITE = "#e9ebef";

/** Ornaments sit behind the decorative column on the auth screens. */
const ORNAMENTS: OrnamentSpec[] = [
  {
    src: "/assets/ornaments/cone-c.png",
    mask: "/assets/ornaments/cone-c-mask.png",
    tint: LIME,
    left: 20,
    top: 200,
    size: 146,
  },
  {
    src: "/assets/ornaments/spiral-a.png",
    mask: "/assets/ornaments/spiral-a-mask.png",
    tint: OFFWHITE,
    left: 260,
    top: 430,
    size: 175,
  },
  {
    src: "/assets/ornaments/cone-a.png",
    mask: "/assets/ornaments/cone-a-mask.png",
    tint: LIME,
    left: 40,
    top: 520,
    size: 188,
  },
];

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
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* the design draws a faint 120px grid across the auth screens */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/assets/hero/grid.svg"
          alt=""
          fill
          className="object-cover [filter:invert(1)]"
        />
      </div>

      <Header minimal dark />

      <div className="relative z-10 container-1200 grid gap-16 pt-[140px] pb-24 lg:grid-cols-2 lg:gap-8">
        {/* left: intro copy + decorative stack */}
        <div className="relative">
          <div className="flex max-w-[475px] flex-col gap-2">
            <h1 className="text-[18px] leading-[1.6] font-medium text-blue-800">
              {eyebrow}
            </h1>
            <p className="text-[18px] leading-[1.6] text-gray-700">{intro}</p>
          </div>

          <div
            className="pointer-events-none absolute top-0 left-0 hidden h-[900px] w-[620px] xl:block"
            aria-hidden
          >
            {ORNAMENTS.map((o) => (
              <Ornament key={`${o.src}-${o.top}`} {...o} />
            ))}
          </div>

          {/* floating course cards, exactly as the design decorates this page */}
          <div className="relative mt-16 hidden h-[640px] xl:block" aria-hidden>
            <div className="absolute top-0 left-[190px] w-[373px] rotate-[-3deg] opacity-95 shadow-xl">
              <CourseCard course={COURSES[1]} />
            </div>
            <div className="absolute top-[150px] left-0 w-[373px] rotate-[2deg] shadow-xl">
              <CourseCard course={COURSES[0]} />
            </div>
            <div className="absolute top-[560px] left-[240px] flex w-[258px] flex-col gap-2 rounded-float bg-white p-4 shadow-lg">
              <div className="flex flex-col">
                <span className="text-[16px] leading-[1.2] font-medium text-gray-950">
                  Happy Students
                </span>
                <span className="flex items-center gap-1 text-[12px] leading-[1.6]">
                  <span className="text-gray-950">4.5</span>
                  <span className="text-gray-400">(240)</span>
                  <Image
                    src="/assets/icons/star.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
              </div>
              <div className="flex items-center">
                {HERO_AVATARS.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={43}
                    height={43}
                    className="-mr-4 rounded-full"
                    style={{ zIndex: HERO_AVATARS.length - i }}
                  />
                ))}
                <span className="relative inline-flex size-[43px] items-center justify-center">
                  <Image
                    src="/assets/hero/badge-2k.svg"
                    alt=""
                    width={43}
                    height={43}
                    className="absolute inset-0"
                  />
                  <span className="relative text-[12px] font-bold text-gray-950">
                    2K+
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* right: the form card — 579 x 784 in the design */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[579px] rounded-card border border-gray-100 bg-white p-8 shadow-[var(--shadow-a)] sm:px-[63px] sm:py-[61px]">
            <h2 className="sr-only">{heading}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
