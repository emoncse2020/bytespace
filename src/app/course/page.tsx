import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chip from "@/components/ui/Chip";
import CourseSidebar from "@/components/sections/CourseSidebar";
import {
  CheckCircle,
  PeopleIcon,
  ShareIcon,
  StarFilled,
} from "@/components/ui/CourseIcons";

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide — ByteSpace",
  description: "Unlock the Power of Digital Creation with Expert Guidance.",
};

const GRID =
  "repeating-linear-gradient(to right, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)," +
  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)";

const TABS = ["About", "Lessons", "Reviews"];

const PARAGRAPHS = [
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const PEEKS = [1, 2, 3, 4];

export default function CourseDetailsPage() {
  return (
    <>
      <Header active="Courses" />
      <main>
        <div className="relative">
          {/* blue hero — 1440 x 957 */}
          <section className="relative overflow-hidden bg-blue-800 pt-[120px] pb-12 lg:h-[957px] lg:pb-0">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: GRID }}
              aria-hidden
            />
            <div className="relative z-10 container-1200 lg:pt-[52px]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex max-w-[880px] flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-display track-tight text-[28px] leading-[1.2] font-semibold text-gray-50 sm:text-[36px]">
                      Build Digital Asset: A Comprehensive Guide
                    </h1>
                    <p className="font-display track-tight text-[18px] leading-[1.2] font-semibold text-gray-50 sm:text-[20px]">
                      Unlock the Power of Digital Creation with Expert Guidance
                    </p>
                  </div>
                  <p className="text-[18px] leading-[1.2] font-medium text-[#f1f4fe]">
                    by <span className="text-lime-400">purepearl studio</span>
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Chip variant="glass">
                      <Image
                        src="/assets/icons/signal-cellular-alt.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                      Intermediate
                    </Chip>
                    <Chip variant="glass">
                      <StarFilled size={24} className="text-gray-950" />
                      4.8 (172 reviews)
                    </Chip>
                    <Chip variant="glass">
                      <PeopleIcon size={24} className="text-gray-950" />
                      199 Students
                    </Chip>
                  </div>
                </div>

                <button className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-card bg-lime-400 px-6 text-[16px] leading-[24px] font-medium text-gray-950 backdrop-blur-[20px] transition-colors hover:bg-lime-500">
                  <ShareIcon size={24} />
                  Share
                </button>
              </div>

              {/* course video — 720 x 479 at y=416 */}
              <div className="relative mt-10 h-[260px] w-full overflow-hidden rounded-card sm:h-[400px] lg:mt-[54px] lg:h-[479px] lg:w-[720px]">
                <Image
                  src="/assets/course/video.jpg"
                  alt="Course preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* body */}
          <section className="bg-white pt-[62px] pb-24">
            <div className="container-1200">
              <div className="flex max-w-[725px] flex-col gap-[83px] lg:gap-0">
                <div
                  className="flex gap-3"
                  role="tablist"
                  aria-label="Course sections"
                >
                  {TABS.map((tab, i) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={i === 0}
                      className={`h-[43px] cursor-pointer rounded-card px-4 text-[16px] font-medium transition-colors ${
                        i === 0
                          ? "bg-lime-400 text-gray-950"
                          : "bg-gray-50 text-gray-950 hover:bg-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="mt-[83px] flex flex-col gap-12">
                  <div className="flex flex-col gap-6">
                    <h2 className="font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950">
                      Description
                    </h2>
                    {PARAGRAPHS.map((p) => (
                      <p
                        key={p.slice(0, 24)}
                        className="text-[16px] leading-[1.75] text-gray-700"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-col gap-6">
                    <h2 className="font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950">
                      Sneak Peak
                    </h2>
                    <div className="flex flex-wrap gap-[19px]">
                      {PEEKS.map((n) => (
                        <Image
                          key={n}
                          src={`/assets/course/peek-${n}.jpg`}
                          alt=""
                          width={167}
                          height={125}
                          className="rounded-[12px] object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <h2 className="font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950">
                      Key Points
                    </h2>
                    <ul className="flex flex-col gap-3">
                      {KEY_POINTS.map((k) => (
                        <li
                          key={k}
                          className="flex items-center gap-3 text-[16px] leading-[1.6] text-gray-700"
                        >
                          <CheckCircle />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* sidebar — overlaps the hero from y=416 on the 1440 canvas */}
          <div className="absolute left-1/2 hidden w-[1200px] -translate-x-1/2 lg:block" style={{ top: 416 }}>
            <div className="flex justify-end">
              <CourseSidebar />
            </div>
          </div>
        </div>

        {/* sidebar in flow on narrow viewports */}
        <div className="container-1200 pb-24 lg:hidden">
          <CourseSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
