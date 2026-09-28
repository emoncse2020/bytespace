import Image from "next/image";
import CourseCard from "@/components/cards/CourseCard";
import Ornament from "@/components/ui/Ornament";
import { COURSES, HERO_AVATARS } from "@/data/content";

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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#003BE2" />
      <path
        d="M5.8 10.2l2.6 2.6 5.2-5.2"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RevenueCard({
  title,
  sub,
  value,
  delta,
  bar,
}: {
  title: string;
  sub: string;
  value: string;
  delta?: string;
  bar?: boolean;
}) {
  return (
    <div className="flex w-[160px] flex-col gap-1 rounded-float bg-blue-800 p-4 text-white shadow-lg">
      <span className="text-[12px] leading-[1.2] font-medium">{title}</span>
      <span className="text-[10px] leading-[1.4] opacity-70">{sub}</span>
      <span className="font-display text-[18px] leading-[1.2] font-semibold">
        {value}
      </span>
      {bar ? (
        <span className="mt-1 block h-1.5 w-full rounded-full bg-white/25">
          <span className="block h-1.5 w-1/2 rounded-full bg-lime-400" />
        </span>
      ) : null}
      {delta ? (
        <span className="mt-1 w-max rounded-full bg-lime-400 px-2 py-0.5 text-[10px] font-medium text-gray-950">
          {delta}
        </span>
      ) : null}
    </div>
  );
}

export default function Features() {
  return (
    <section
      className="overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(160deg,#f7faee 0%,#eef2fb 35%,#d7dff7 60%,#f4f5f9 100%)",
      }}
    >
      <div className="container-1200 flex flex-col gap-28">
        {/* block one - text left, collage right */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-[574px] flex-col gap-8">
            <h2 className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-[16px] leading-[1.6] text-gray-700">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="flex gap-12">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="font-display track-tight text-[36px] leading-[1.2] font-semibold text-blue-800">
                    {s.value}
                  </dt>
                  <dd className="text-[14px] leading-[1.6] text-gray-700">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-[520px] w-full max-w-[621px] shrink-0">
            <div className="absolute top-0 left-0 z-10 w-[340px] scale-90 opacity-95">
              <CourseCard course={{ ...COURSES[5], thumb: COURSES[0].thumb }} />
            </div>
            <div className="absolute right-0 bottom-0 h-[420px] w-[380px]">
              <Image
                src="/assets/hero/student.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-[150px] right-0 z-20 flex flex-col gap-2 rounded-float bg-white p-4 shadow-lg">
              <span className="text-[14px] leading-[1.2] font-medium text-gray-950">
                Learning Progress
              </span>
              <span className="font-display track-tight text-[36px] leading-[1.2] font-semibold text-gray-950">
                55%
              </span>
              <span className="block h-2 w-[160px] rounded-card bg-track">
                <span className="block h-2 w-[90px] rounded-card bg-lime-400" />
              </span>
            </div>
            <div className="pointer-events-none absolute top-[120px] right-[40px]">
              <Ornament
                src="/assets/ornaments/spiral-b.png"
                mask="/assets/ornaments/spiral-b-mask.png"
                tint="#d4fb20"
                left={0}
                top={0}
                size={120}
              />
            </div>
          </div>
        </div>

        {/* block two - collage left, text right */}
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative h-[480px] w-full max-w-[541px] shrink-0">
            <div className="absolute top-0 left-0 z-20 flex flex-col gap-3">
              <RevenueCard
                title="Total Revenue"
                sub="July 1-28"
                value="$120.29"
                bar
              />
              <RevenueCard
                title="Year to Date"
                sub="2023"
                value="$1,200.38"
                delta="+12$"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[420px] w-[340px]">
              <Image
                src="/assets/hero/student.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute right-0 bottom-4 z-20 flex flex-col gap-2 rounded-float bg-white p-4 shadow-lg">
              <span className="text-[14px] leading-[1.2] font-medium text-gray-950">
                Happy Students
              </span>
              <span className="flex items-center gap-1 text-[12px]">
                <span className="text-gray-950">4.5</span>
                <span className="text-gray-400">(240)</span>
                <Image
                  src="/assets/icons/star.svg"
                  alt=""
                  width={14}
                  height={14}
                />
              </span>
              <span className="flex items-center">
                {HERO_AVATARS.slice(0, 5).map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={30}
                    height={30}
                    className="-mr-3 rounded-full"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
                <span className="ml-4 rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold text-gray-950">
                  2K+
                </span>
              </span>
            </div>
          </div>

          <div className="flex max-w-[580px] flex-col gap-8">
            <h2 className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="text-[16px] leading-[1.6] text-gray-700">
              <span className="font-bold text-gray-950">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="flex flex-col gap-3">
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
        </div>
      </div>
    </section>
  );
}
