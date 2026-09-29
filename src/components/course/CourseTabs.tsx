"use client";

import { useState } from "react";
import AboutPanel from "@/components/course/AboutPanel";
import LessonsPanel from "@/components/course/LessonsPanel";
import CourseReviews from "@/components/sections/CourseReviews";

export type CourseTab = "About" | "Lessons" | "Reviews";

const TABS: CourseTab[] = ["About", "Lessons", "Reviews"];

/**
 * Only this block changes between the three course screens, so the tabs
 * swap the panel in place rather than navigating.
 */
export default function CourseTabs({
  initialTab = "About",
}: {
  initialTab?: CourseTab;
}) {
  const [tab, setTab] = useState<CourseTab>(initialTab);

  return (
    <div className="flex flex-col">
      <div className="flex gap-3" role="tablist" aria-label="Course sections">
        {TABS.map((t) => {
          const isActive = t === tab;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="course-panel"
              onClick={() => setTab(t)}
              className={`flex h-[43px] cursor-pointer items-center rounded-card px-4 text-[16px] font-medium transition-colors ${
                isActive
                  ? "bg-lime-400 text-gray-950"
                  : "bg-gray-50 text-gray-950 hover:bg-gray-100"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div id="course-panel" role="tabpanel" className="mt-[83px]">
        {tab === "About" ? <AboutPanel /> : null}
        {tab === "Lessons" ? <LessonsPanel /> : null}
        {tab === "Reviews" ? <CourseReviews /> : null}
      </div>
    </div>
  );
}
