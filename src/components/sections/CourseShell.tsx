import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chip from "@/components/ui/Chip";
import CourseSidebar from "@/components/sections/CourseSidebar";
import CourseTabs from "@/components/course/CourseTabs";
import {
  PeopleIcon,
  ShareIcon,
  StarFilled,
} from "@/components/ui/CourseIcons";

const GRID =
  "repeating-linear-gradient(to right, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)," +
  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.122) 0 2px, transparent 2px 120px)";

/**
 * Hero, enrolment sidebar and section tabs are identical across the three
 * course screens in the design; only the middle column changes.
 */
export default function CourseShell() {
  return (
    <>
      <Header active="Courses" />
      <main>
        <div className="relative">
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

          <section className="bg-white pt-[62px] pb-24">
            <div className="container-1200">
              <div className="flex max-w-[725px] flex-col">
                <CourseTabs />
              </div>
            </div>
          </section>

          <div
            /* the wrapper spans the full content column, so it must not
               swallow clicks meant for the tabs underneath it */
            className="pointer-events-none absolute left-1/2 hidden w-[1200px] -translate-x-1/2 lg:block"
            style={{ top: 416 }}
          >
            <div className="flex justify-end">
              <CourseSidebar />
            </div>
          </div>
        </div>

        <div className="container-1200 pb-24 lg:hidden">
          <CourseSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
