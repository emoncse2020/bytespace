"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <form
      className="flex w-full max-w-[600px] flex-col items-center gap-4 sm:flex-row sm:justify-center"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const q = query.trim();
        router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
      }}
    >
      <label className="flex h-[52px] w-full items-center gap-2 rounded-card bg-white px-6 py-3 sm:w-[461px]">
        <Image src="/assets/icons/search.svg" alt="" width={24} height={24} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          aria-label="Search courses"
          className="h-full flex-1 border-0 bg-transparent text-[18px] leading-[1.6] text-gray-950 placeholder:text-gray-400 focus:outline-none"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}
