import Image from "next/image";
import { ChevronDown } from "@/components/ui/SearchIcons";

/** 1440 x 360 blue band: grid, title, then the search row at y=239. */
export default function SearchHero() {
  return (
    <section className="relative overflow-hidden bg-blue-800 pt-[120px] pb-16 lg:h-[360px] lg:pb-0">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)," +
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)",
        }}
        aria-hidden
      />

      <div className="relative z-10 container-1200 flex flex-col items-center gap-8 lg:gap-[32px] lg:pt-[44px]">
        <h1 className="font-display track-tight text-center text-[28px] leading-[1.2] font-semibold text-white sm:text-[36px]">
          Find Your Next Course
        </h1>

        <form
          role="search"
          className="flex w-full max-w-[624px] flex-col items-center gap-4 sm:flex-row"
        >
          <label className="flex h-[48px] w-full items-center gap-2 rounded-pill bg-white px-6 sm:flex-1">
            <Image
              src="/assets/icons/search.svg"
              alt=""
              width={20}
              height={20}
            />
            <input
              type="search"
              placeholder="Search"
              aria-label="Search courses"
              className="h-full flex-1 border-0 bg-transparent text-[16px] text-gray-950 placeholder:text-gray-400 focus:outline-none"
            />
          </label>

          <button
            type="button"
            className="flex h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-pill bg-lime-400 px-6 text-[16px] font-medium text-gray-950 transition-colors hover:bg-lime-500 sm:w-[147px]"
          >
            Courses
            <ChevronDown size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
