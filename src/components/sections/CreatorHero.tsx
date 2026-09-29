import Image from "next/image";
import Button from "@/components/ui/Button";

const GRID =
  "repeating-linear-gradient(to right, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)," +
  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)";

const STATS = [
  ["3", "Products"],
  ["12", "Followers"],
];

/** 1440 x 592 blue band; the profile block sits at (120,172), 1198 wide. */
export default function CreatorHero() {
  return (
    <section className="relative overflow-hidden bg-blue-800 pt-[120px] pb-14 lg:h-[592px] lg:pb-0">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: GRID }}
        aria-hidden
      />

      <div className="relative z-10 container-1200 flex flex-col gap-10 lg:pt-[52px]">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6">
            <Image
              src="/assets/course/creator-profile.jpg"
              alt=""
              width={96}
              height={96}
              className="size-[96px] shrink-0 rounded-card object-cover"
              priority
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display track-tight text-[28px] leading-[1.2] font-semibold text-gray-50 sm:text-[36px]">
                  PurePearl Studio
                </h1>
                <span className="inline-flex items-center justify-center rounded-card bg-lime-400 px-6 py-2 text-[16px] leading-[1.2] font-medium text-gray-950 backdrop-blur-[20px]">
                  Creator
                </span>
              </div>
              <p className="text-[18px] leading-[1.6] text-gray-50">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          <div className="max-w-[1197px] text-[18px] leading-[1.6] text-gray-50">
            <p>
              Welcome to the creative world of [Creator&apos;s Name]. Here,
              you&apos;ll discover the passion, expertise, and inspiration that
              drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              ive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            {STATS.map(([value, label]) => (
              <span
                key={label}
                className="inline-flex items-center justify-center gap-2 rounded-card bg-white px-6 py-3 text-[18px] leading-[1.2] font-medium backdrop-blur-[20px]"
              >
                <span className="text-blue-800">{value}</span>
                <span className="text-gray-950">{label}</span>
              </span>
            ))}
          </div>
          <Button>Follow</Button>
        </div>
      </div>
    </section>
  );
}
