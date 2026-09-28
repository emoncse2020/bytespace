import Image from "next/image";
import CourseCard from "@/components/cards/CourseCard";
import Ornament from "@/components/ui/Ornament";
import { COURSES, HERO_AVATARS } from "@/data/content";

/**
 * Mesh background fitted to colours sampled from the design: lime blooms at
 * the top centre-left and bottom left, periwinkle down the left flank and
 * across the right, over a #FAFAFA base. Residual ~2.7 per channel RMS.
 */
const MESH =
  "radial-gradient(39% 46% at 29% 7%, rgba(203,252,1,0.38) 0%, rgba(203,252,1,0) 75%)," +
  "radial-gradient(40% 39% at 4% 51%, rgba(159,180,240,0.41) 0%, rgba(159,180,240,0) 75%)," +
  "radial-gradient(29% 22% at 3% 88%, rgba(203,252,1,0.56) 0%, rgba(203,252,1,0) 75%)," +
  "radial-gradient(38% 38% at 90% 93%, rgba(159,180,240,0.63) 0%, rgba(159,180,240,0) 75%)," +
  "radial-gradient(45% 61% at 99% 2%, rgba(159,180,240,0.21) 0%, rgba(159,180,240,0) 75%)," +
  "#fafafa";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
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

const CARD = "rounded-[16px] bg-white shadow-[0_8px_28px_rgba(16,24,40,0.10)]";

function LearningProgress({ className = "" }: { className?: string }) {
  return (
    <div className={`${CARD} flex w-[240px] flex-col gap-2 p-5 ${className}`}>
      <span className="text-[14px] leading-[1.2] font-medium text-gray-950">
        Learning Progress
      </span>
      <span className="font-display track-tight text-[40px] leading-[1.2] font-semibold text-gray-950">
        55%
      </span>
      <span className="block h-2 w-full rounded-card bg-track">
        <span className="block h-2 w-[56%] rounded-card bg-lime-400" />
      </span>
    </div>
  );
}

function HappyStudents({ className = "" }: { className?: string }) {
  return (
    <div className={`${CARD} flex w-[255px] flex-col gap-2 p-4 ${className}`}>
      <span className="text-[16px] leading-[1.2] font-medium text-gray-950">
        Happy Students
      </span>
      <span className="flex items-center gap-1 text-[12px] leading-[1.6]">
        <span className="font-bold text-gray-950">4.5</span>
        <span className="text-gray-400">(240)</span>
        <Image src="/assets/icons/star.svg" alt="" width={14} height={14} />
      </span>
      <span className="flex items-center">
        {HERO_AVATARS.slice(0, 6).map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={34}
            height={34}
            className="-mr-2 rounded-full"
            style={{ zIndex: 6 - i }}
          />
        ))}
        <span className="relative ml-3 inline-flex size-[34px] items-center justify-center">
          <Image
            src="/assets/hero/badge-2k.svg"
            alt=""
            width={34}
            height={34}
            className="absolute inset-0"
          />
          <span className="relative text-[11px] font-bold text-gray-950">2K+</span>
        </span>
      </span>
    </div>
  );
}

function RevenueCard({
  title,
  sub,
  value,
  delta,
  bar,
  className = "",
  style,
}: {
  title: string;
  sub: string;
  value: string;
  delta?: string;
  bar?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`flex flex-col gap-0.5 rounded-[12px] bg-blue-800 p-4 text-white shadow-[0_8px_24px_rgba(0,59,226,0.28)] ${className}`}
    >
      <span className="text-[15px] leading-[1.25] font-medium">{title}</span>
      <span className="text-[11px] leading-[1.3] opacity-75">{sub}</span>
      <span className="font-display mt-1 text-[22px] leading-[1.15] font-semibold">
        {value}
      </span>
      {bar ? (
        <span className="mt-2 block h-[7px] w-full rounded-full bg-white">
          <span className="block h-[7px] w-[62%] rounded-full bg-lime-400" />
        </span>
      ) : null}
      {delta ? (
        <span className="mt-2 w-max rounded-full bg-lime-400 px-2 py-0.5 text-[11px] font-medium text-gray-950">
          {delta}
        </span>
      ) : null}
    </div>
  );
}

/* ----------------------------- text columns ----------------------------- */

function GrowthText() {
  return (
    <div className="flex max-w-[564px] flex-col gap-8">
      <h2 className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
        Your Path to Professional Growth Starts Here!
      </h2>
      <p className="max-w-[480px] text-[16px] leading-[1.75] text-gray-700">
        Explore our curated selection of courses tailored to enhance your
        capabilities and accelerate your career journey. Whether you are looking
        to sharpen specific skills, gain industry expertise, or embark on a new
        career path entirely, we have the resources you need.
      </p>
      <dl className="flex gap-[50px]">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col">
            <dt className="font-display track-tight text-[36px] leading-[1.2] font-semibold text-blue-800">
              {s.value}
            </dt>
            <dd className="text-[15px] leading-[1.6] text-gray-700">{s.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CreateText() {
  return (
    <div className="flex max-w-[580px] flex-col gap-8">
      <h2 className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
        Create &amp; Manage Courses Easily.
      </h2>
      <p className="text-[16px] leading-[1.75] text-gray-700">
        <span className="font-bold text-gray-950">ByteSpace</span> supports
        individuals or entities in the creation, publication, and administration
        of educational courses.
      </p>
      <ul className="flex flex-col gap-4">
        {BENEFITS.map((b) => (
          <li
            key={b}
            className="flex items-center gap-3 text-[16px] leading-[1.6] text-gray-950"
          >
            <CheckIcon />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------- section -------------------------------- */

export default function Features() {
  return (
    <section className="overflow-hidden py-24" style={{ background: MESH }}>
      <div className="container-1200 flex flex-col gap-24 xl:gap-[110px]">
        {/* ---------------- block one: text left, collage right ---------------- */}
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-5">
          <div className="xl:w-[564px] xl:shrink-0 xl:pt-[66px]">
            <GrowthText />
          </div>

          {/* exact collage, design coords relative to (760,100) */}
          <div className="relative hidden h-[610px] w-[585px] shrink-0 xl:block">
            <div className="absolute" style={{ left: 3, top: 13, width: 373 }}>
              <CourseCard course={{ ...COURSES[5], thumb: COURSES[0].thumb }} />
            </div>
            <Image
              src="/assets/hero/student.png"
              alt="A ByteSpace learner"
              width={440}
              height={580}
              className="absolute object-contain"
              style={{ left: 145, top: 20, width: 440, height: 580 }}
            />
            <div
              className="pointer-events-none absolute"
              style={{ left: 449, top: 112, width: 124, height: 162 }}
            >
              <Ornament
                src="/assets/ornaments/spiral-b.png"
                mask="/assets/ornaments/spiral-b-mask.png"
                tint="#d4fb20"
                left={0}
                top={0}
                size={124}
              />
            </div>
            <div className="absolute" style={{ left: 340, top: 240 }}>
              <LearningProgress />
            </div>
          </div>

          {/* compact stand-in below xl */}
          <div className="relative mx-auto block h-[380px] w-[300px] xl:hidden">
            <Image
              src="/assets/hero/student.png"
              alt="A ByteSpace learner"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ---------------- block two: collage left, text right ---------------- */}
        <div className="flex flex-col-reverse gap-12 xl:flex-row xl:items-start xl:gap-5">
          {/* exact collage, design coords relative to (110,770) */}
          <div className="relative hidden h-[630px] w-[595px] shrink-0 xl:block">
            <RevenueCard
              title="Total Revenue"
              sub="July 1-28"
              value="$120.29"
              bar
              className="absolute"
              style={{ left: 11, top: 18, width: 218 }}
            />
            <RevenueCard
              title="Year to Date"
              sub="2023"
              value="$1,200.38"
              delta="+12$"
              className="absolute"
              style={{ left: 11, top: 168, width: 134 }}
            />
            <Image
              src="/assets/hero/student-female.png"
              alt="A ByteSpace creator"
              width={350}
              height={630}
              className="absolute object-contain object-bottom"
              style={{ left: 70, top: 0, width: 350, height: 630 }}
            />
            <div
              className="pointer-events-none absolute"
              style={{ left: 350, top: 124, width: 141, height: 150 }}
            >
              <Ornament
                src="/assets/ornaments/spiral-a.png"
                mask="/assets/ornaments/spiral-a-mask.png"
                tint="#d4fb20"
                left={0}
                top={0}
                size={141}
              />
            </div>
            <div className="absolute" style={{ left: 295, top: 390 }}>
              <HappyStudents />
            </div>
          </div>

          {/* compact stand-in below xl */}
          <div className="relative mx-auto block h-[420px] w-[300px] xl:hidden">
            <Image
              src="/assets/hero/student-female.png"
              alt="A ByteSpace creator"
              fill
              className="object-contain"
            />
          </div>

          <div className="xl:w-[580px] xl:shrink-0 xl:pt-[80px]">
            <CreateText />
          </div>
        </div>
      </div>
    </section>
  );
}
