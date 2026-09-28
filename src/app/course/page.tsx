import type { Metadata } from "next";
import Image from "next/image";
import CourseShell from "@/components/sections/CourseShell";
import { CheckCircle } from "@/components/ui/CourseIcons";

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide — ByteSpace",
  description: "Unlock the Power of Digital Creation with Expert Guidance.",
};

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

const H2 =
  "font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950";

export default function CourseAboutPage() {
  return (
    <CourseShell tab="About">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className={H2}>Description</h2>
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
          <h2 className={H2}>Sneak Peak</h2>
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
          <h2 className={H2}>Key Points</h2>
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
    </CourseShell>
  );
}
