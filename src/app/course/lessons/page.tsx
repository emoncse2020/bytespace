import type { Metadata } from "next";
import CourseShell from "@/components/sections/CourseShell";
import { VideocamIcon } from "@/components/ui/CourseIcons";

export const metadata: Metadata = {
  title: "Lessons — Build Digital Asset: A Comprehensive Guide",
  description:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons.",
};

/* Module numbering follows the design, which skips module 3. */
const MODULES = [
  [
    "Module 1: Introduction to Digital Assets",
    "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  ],
  [
    "Module 2: Design Principles for Impact",
    "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  ],
  [
    "Module 4: User-Centric Design Strategies",
    "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  ],
  [
    "Module 5: Interactive Media and Engagement",
    "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  ],
  [
    "Module 6: Project Showcase and Critique",
    "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  ],
  [
    "Module 7: Optimizing Digital Assets for Various Platforms",
    "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  ],
];

const H2 =
  "font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950";
const BODY = "text-[16px] leading-[1.75] text-gray-700";

export default function CourseLessonsPage() {
  return (
    <CourseShell tab="Lessons">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className={H2}>Explore the Modules</h2>
          <p className={BODY}>
            Immerse yourself in the course content as we break down each module
            into comprehensive lessons, providing practical insights and
            hands-on experiences.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className={H2}>Lesson List</h2>
          <ul className="flex flex-col gap-6">
            {MODULES.map(([title, body]) => (
              <li key={title} className="flex items-start gap-5">
                <span className="flex size-[56px] shrink-0 items-center justify-center rounded-[12px] bg-lime-400">
                  <VideocamIcon size={28} className="text-gray-950" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[16px] leading-[1.4] font-medium text-gray-950">
                    {title}
                  </span>
                  <span className="text-[15px] leading-[1.7] text-gray-700">
                    {body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className={H2}>Lesson Content</h2>
          <p className={BODY}>
            Engage with each lesson through captivating video content, detailed
            textual explanations, and interactive elements. Download resources,
            complete assignments, and test your understanding with quizzes.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className={H2}>Lesson Progress Tracking</h2>
          <p className={BODY}>
            Witness your growth as you complete lessons, with an intuitive
            progress tracking feature guiding you through your learning journey.
          </p>
          <div className="flex flex-col gap-2 rounded-[16px] border border-gray-200 bg-white p-5">
            <span className="text-[14px] leading-[1.2] font-medium text-gray-950">
              Learning Progress
            </span>
            <span className="font-display track-tight text-[36px] leading-[1.2] font-semibold text-gray-950">
              55%
            </span>
            <span className="block h-2 w-full rounded-card bg-track">
              <span className="block h-2 w-[56%] rounded-card bg-lime-400" />
            </span>
          </div>
        </div>
      </div>
    </CourseShell>
  );
}
