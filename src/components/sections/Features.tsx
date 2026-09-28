import Image from "next/image";
import CourseCard from "@/components/cards/CourseCard";
import Ornament from "@/components/ui/Ornament";
import { COURSES, HERO_AVATARS } from "@/data/content";

/**
 * Mesh background fitted to colours sampled from the design render:
 * lime blooms top centre-left and bottom left, periwinkle down the left
 * flank and across the right, over #FAFAFA. ~2.7 per channel RMS.
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

const CARD = "rounded-[16px] bg-white shadow-[0_10px_34px_rgba(16,24,40,0.12)]";

function LearningProgress() {
  return (
    <div className={`${CARD} flex w-[235px] flex-col gap-2 p-5`}>
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

function HappyStudents() {
  return (
    <div className={`${CARD} flex w-[255px] flex-col gap-2 p-4`}>
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
  width,
}: {
  title: string;
  sub: string;
  value: string;
  delta?: string;
  bar?: boolean;
  width: number;
}) {
  return (
    <div
      style={{ width }}
      className="flex flex-col gap-0.5 rounded-[12px] bg-blue-800 p-4 text-white shadow-[0_10px_28px_rgba(0,59,226,0.30)]"
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

/* ------------------------------ text blocks ------------------------------ */

function GrowthText() {
  return (
    <div className="flex flex-col gap-11">
      <h2 className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
        Your Path to Professional Growth Starts Here!
      </h2>
      <p className="max-w-[505px] text-[18px] leading-[1.6] text-gray-700">
        Explore our curated selection of courses tailored to enhance your
        capabilities and accelerate your career journey. Whether you are looking
        to sharpen specific skills, gain industry expertise, or embark on a new
        career path entirely, we have the resources you need.
      </p>
      <dl className="flex">
        {STATS.map((s) => (
          <div key={s.label} className="flex w-[123px] flex-col">
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
    <div className="flex flex-col gap-11">
      <h2 className="font-display track-tight max-w-[400px] text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
        Create &amp; Manage Courses Easily.
      </h2>
      <p className="max-w-[552px] text-[18px] leading-[1.6] text-gray-700">
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

/* --------------------------------- section -------------------------------- */

const At = ({
  x,
  y,
  z,
  children,
}: {
  x: number;
  y: number;
  z?: number;
  children: React.ReactNode;
}) => (
  <div className="absolute" style={{ left: x, top: y, zIndex: z }}>
    {children}
  </div>
);

export default function Features() {
  return (
    <section className="relative overflow-hidden" style={{ background: MESH }}>
      {/*
        Desktop: an exact 1440x1460 canvas. Both collages deliberately run
        outside the 1200 content column in the design - block one reaches
        x=1392 and block two starts at x=55 - so they are placed on the
        canvas rather than inside the container.
      */}
      <div className="relative mx-auto hidden h-[1460px] w-[1440px] xl:block">
        {/* block one — text */}
        <div className="absolute" style={{ left: 120, top: 195, width: 564 }}>
          <GrowthText />
        </div>

        {/* block one — collage */}
        <At x={763} y={113} z={10}>
          <div style={{ width: 373 }}>
            <CourseCard course={COURSES[0]} />
          </div>
        </At>
        <At x={759} y={114} z={20}>
          <Image
            src="/assets/hero/student.png"
            alt="A ByteSpace learner"
            width={576}
            height={539}
            className="object-contain"
            style={{ width: 576, height: 539 }}
          />
        </At>
        <At x={1162} y={197} z={50}>
          <div style={{ width: 216, height: 216 }} className="relative">
            <Ornament
              src="/assets/ornaments/spiral-a.png"
              mask="/assets/ornaments/spiral-a-mask.png"
              tint="#d4fb20"
              left={0}
              top={0}
              size={216}
            />
          </div>
        </At>
        <At x={1103} y={340} z={40}>
          <LearningProgress />
        </At>

        {/* block two — collage */}
        <At x={121} y={788} z={10}>
          <RevenueCard
            title="Total Revenue"
            sub="July 1-28"
            value="$120.29"
            bar
            width={218}
          />
        </At>
        <At x={121} y={938} z={10}>
          <RevenueCard
            title="Year to Date"
            sub="2023"
            value="$1,200.38"
            delta="+12$"
            width={134}
          />
        </At>
        <At x={132} y={746} z={20}>
          <Image
            src="/assets/hero/student-female.png"
            alt="A ByteSpace creator"
            width={535}
            height={665}
            className="object-contain"
            style={{ width: 535, height: 665 }}
          />
        </At>
        <At x={424} y={868} z={30}>
          <div style={{ width: 216, height: 216 }} className="relative">
            <Ornament
              src="/assets/ornaments/spiral-b.png"
              mask="/assets/ornaments/spiral-b-mask.png"
              tint="#d4fb20"
              left={0}
              top={0}
              size={216}
            />
          </div>
        </At>
        <At x={405} y={1160} z={40}>
          <HappyStudents />
        </At>

        {/* block two — text */}
        <div className="absolute" style={{ left: 740, top: 850, width: 580 }}>
          <CreateText />
        </div>
      </div>

      {/* Below xl: stacked, with the photography kept but the overlay
          collages simplified so nothing collides. */}
      <div className="container-1200 flex flex-col gap-20 py-20 xl:hidden">
        <div className="flex flex-col gap-10">
          <GrowthText />
          <div className="relative mx-auto h-[360px] w-full max-w-[420px]">
            <Image
              src="/assets/hero/student.png"
              alt="A ByteSpace learner"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="relative mx-auto h-[420px] w-full max-w-[380px]">
            <Image
              src="/assets/hero/student-female.png"
              alt="A ByteSpace creator"
              fill
              className="object-contain"
            />
          </div>
          <CreateText />
        </div>
      </div>
    </section>
  );
}
