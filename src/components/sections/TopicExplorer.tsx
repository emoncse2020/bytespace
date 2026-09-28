"use client";

import { useState } from "react";
import { TOPIC_TABS } from "@/data/content";

/**
 * Centred heading, then the three rows of topic chips. The active chip is
 * lime; the rest are grey. The design's last row ends with a "+ More" link.
 */
export default function TopicExplorer() {
  const [active, setActive] = useState(TOPIC_TABS[0]);

  return (
    <section id="courses" className="pt-20 pb-10">
      <div className="container-1200 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display track-tight max-w-[917px] text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="max-w-[760px] text-[16px] leading-[1.6] text-gray-400">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Course topics"
        >
          {TOPIC_TABS.map((tab) => {
            const isActive = tab === active;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab)}
                className={`cursor-pointer rounded-card px-4 py-3 text-[16px] leading-[19px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-lime-400 text-gray-950"
                    : "bg-gray-50 text-gray-950 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
          <button className="cursor-pointer px-2 text-[16px] font-medium text-blue-800 hover:underline">
            + More
          </button>
        </div>
      </div>
    </section>
  );
}
