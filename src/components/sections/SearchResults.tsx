"use client";

import { useState } from "react";
import CourseCard from "@/components/cards/CourseCard";
import { COURSES, SEARCH_TABS } from "@/data/content";
import { ChevronLeft, ChevronRight } from "@/components/ui/SearchIcons";
import CourseFilterBar from "@/components/ui/CourseFilterBar";

/* The design repeats the six courses across three pages of results. */
const RESULTS = [...COURSES, ...COURSES, ...COURSES];

const PAGES = [1, 2, 3, 4, 5];

export default function SearchResults({ query = "" }: { query?: string }) {
  const [active, setActive] = useState(SEARCH_TABS[0]);
  const [page, setPage] = useState(1);

  const term = query.trim().toLowerCase();
  const results = term
    ? RESULTS.filter(
        (c) =>
          c.title.toLowerCase().includes(term) ||
          c.author.toLowerCase().includes(term),
      )
    : RESULTS;

  return (
    <section className="bg-white py-[72px]">
      <div className="container-1200 flex flex-col gap-10">
        <CourseFilterBar />

        {/* topic chips */}
        <div
          className="flex flex-wrap items-center gap-3"
          role="tablist"
          aria-label="Course topics"
        >
          {SEARCH_TABS.map((tab) => {
            const isActive = tab === active;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab)}
                className={`h-[43px] cursor-pointer rounded-card px-4 text-[16px] font-medium transition-colors ${
                  isActive
                    ? "bg-lime-400 text-gray-950"
                    : "bg-gray-50 text-gray-950 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* results grid — three columns, 40px gutters */}
        {results.length > 0 ? (
          <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((course, i) => (
              <CourseCard key={`${course.id}-${i}`} course={course} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-[18px] leading-[1.6] text-gray-400">
            No courses match &ldquo;{query.trim()}&rdquo;.
          </p>
        )}

        {/* pagination */}
        <nav
          className="flex items-center justify-center gap-4 pt-6"
          aria-label="Pagination"
        >
          <button
            aria-label="Previous page"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="flex h-[48px] w-[56px] cursor-pointer items-center justify-center rounded-pill border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ChevronLeft size={20} />
          </button>

          {PAGES.map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              aria-current={n === page ? "page" : undefined}
              className={`cursor-pointer px-2 text-[18px] leading-[28px] transition-colors ${
                n === page
                  ? "font-medium text-gray-400"
                  : "text-gray-950 hover:text-blue-800"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            aria-label="Next page"
            onClick={() => setPage((p) => Math.min(PAGES.length, p + 1))}
            className="flex h-[48px] w-[56px] cursor-pointer items-center justify-center rounded-pill border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ChevronRight size={20} />
          </button>
        </nav>
      </div>
    </section>
  );
}
