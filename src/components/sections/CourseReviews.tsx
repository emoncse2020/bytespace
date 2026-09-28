"use client";

import Image from "next/image";
import { useState } from "react";
import { StarFilled } from "@/components/ui/CourseIcons";

const H2 =
  "font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950";

/** Bar width, star count and tally per row, top to bottom. */
const BREAKDOWN = [
  [100, 5, "720"],
  [42, 5, "120"],
  [14, 5, "21"],
  [9, 5, "12"],
  [11, 5, "16"],
] as const;

const FILTERS = ["All rating", "5", "4", "3", "2", "1"];

const REVIEWS = [
  {
    name: "PurePearl Studio",
    avatar: "/assets/course/creator.jpg",
    quote:
      "“The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!”",
  },
  {
    name: "Albert Flores",
    avatar: "/assets/hero/avatar-2.png",
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    avatar: "/assets/hero/avatar-3.png",
    quote:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    avatar: "/assets/hero/avatar-5.png",
    quote:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

function Stars({ n = 5, size = 16 }: { n?: number; size?: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={`${n} out of 5`}>
      {Array.from({ length: n }).map((_, i) => (
        <StarFilled key={i} size={size} className="text-gray-950" />
      ))}
    </span>
  );
}

export default function CourseReviews() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <h2 className={H2}>What Learners Are Saying</h2>
        <p className="text-[16px] leading-[1.75] text-gray-700">
          Discover what our learners have to say about their experience with
          &lsquo;Build Digital Assets: A Comprehensive Guide.&rsquo; Read reviews
          and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>
      </div>

      {/* ratings summary */}
      <div className="flex flex-col items-center gap-6 rounded-card border border-gray-200 bg-white p-5 sm:flex-row">
        <div
          className="flex shrink-0 flex-col items-center justify-center rounded-[12px] bg-lime-400"
          style={{ width: 129, height: 140 }}
        >
          <span className="text-[14px] leading-[1.2] text-gray-950">
            Ratings
          </span>
          <span className="font-display track-tight text-[32px] leading-[1.2] font-semibold text-gray-950">
            4.7
          </span>
        </div>

        <ul className="flex w-full flex-1 flex-col gap-[7px]">
          {BREAKDOWN.map(([pct, stars, count], i) => (
            <li key={i} className="flex items-center gap-4">
              <span
                className="flex-1 overflow-hidden rounded-full bg-gray-100"
                style={{ height: 8 }}
              >
                <span
                  className="block rounded-full bg-lime-400"
                  style={{ width: `${pct}%`, height: 8 }}
                />
              </span>
              <Stars n={stars} size={16} />
              <span
                className="text-right text-[14px] text-gray-700"
                style={{ width: 32 }}
              >
                {count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className={H2}>Individual Reviews:</h2>

        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => {
            const isActive = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={isActive}
                className={`flex h-[38px] cursor-pointer items-center gap-1 rounded-pill px-4 text-[14px] font-medium transition-colors ${
                  isActive
                    ? "bg-lime-400 text-gray-950"
                    : "bg-gray-50 text-gray-950 hover:bg-gray-100"
                }`}
              >
                {f !== "All rating" ? (
                  <StarFilled size={14} className="text-gray-950" />
                ) : null}
                {f}
              </button>
            );
          })}
        </div>

        <ul className="flex flex-col gap-6">
          {REVIEWS.map((r) => (
            <li
              key={r.name}
              className="flex flex-col gap-4 rounded-card border border-gray-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={r.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="flex flex-col">
                    <span className="text-[16px] leading-[1.3] font-medium text-gray-950">
                      {r.name}
                    </span>
                    <span className="text-[14px] leading-[1.4] text-gray-700">
                      UI/UX Designer
                    </span>
                  </span>
                </div>
                <span className="text-[14px] text-gray-700">a year ago</span>
              </div>
              <Stars />
              <p className="text-[15px] leading-[1.7] text-gray-700">
                {r.quote}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
