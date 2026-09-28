import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  BadgeIcon,
  ConsultIcon,
  SourceIcon,
  VideocamIcon,
} from "@/components/ui/CourseIcons";

const LESSONS = [
  ["01", "Introduction to Digital Assets", "12 mins"],
  ["02", "Design Principles for Impacts", "21 mins"],
  ["03", "Advanced Techniques in Digital Creation", "16 mins"],
];

const INCLUDES = [
  [SourceIcon, "Learning Resources"],
  [VideocamIcon, "Quality Lesson Videos"],
  [BadgeIcon, "Certificate of Completion"],
  [ConsultIcon, "Private Consultation"],
] as const;

/** 412 x 959 card, overlapping the hero from y=416 in the design. */
export default function CourseSidebar() {
  return (
    <aside className="pointer-events-auto flex w-full max-w-[412px] flex-col gap-6 rounded-card border border-gray-200 bg-white p-10">
      <div className="flex flex-col gap-6">
        <p className="font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950">
          112 Lessons (24 hours)
        </p>
        <ul className="flex flex-col gap-3 text-[16px]">
          {LESSONS.map(([n, title, mins]) => (
            <li key={n} className="flex items-start justify-between gap-6">
              <span className="flex gap-2 font-medium text-gray-950">
                <span className="w-6">{n}</span>
                <span className="w-[194px] leading-[1.2]">{title}</span>
              </span>
              <span className="whitespace-nowrap text-blue-800">{mins}</span>
            </li>
          ))}
          <li className="text-gray-700">99 more videos</li>
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[16px] leading-[1.6] text-gray-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <p className="flex items-end">
          <span className="font-display track-tight text-[36px] leading-[1.2] font-semibold text-blue-800">
            $25
          </span>
          <span className="text-[16px] leading-[1.6] text-gray-700">
            /lifetime
          </span>
        </p>
        <Button fullWidth>Enroll Now</Button>
      </div>

      <p className="font-display track-tight text-[20px] leading-[1.2] font-semibold text-gray-950">
        This course include
      </p>
      <ul className="flex flex-col gap-3">
        {INCLUDES.map(([Icon, label]) => (
          <li
            key={label}
            className="flex items-center gap-2 text-[16px] leading-[1.6] text-gray-700"
          >
            <Icon className="text-blue-800" size={24} />
            {label}
          </li>
        ))}
      </ul>

      <hr className="border-gray-200" />

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <Image
            src="/assets/course/creator.jpg"
            alt=""
            width={52}
            height={52}
            className="rounded-full"
          />
          <span className="flex flex-col">
            <span className="text-[18px] leading-[1.2] font-medium text-gray-950">
              PurePearl Studio
            </span>
            <span className="text-[16px] leading-[1.6] text-gray-700">
              Professional Creator
            </span>
          </span>
        </div>
        <p className="text-[16px] leading-[1.6] text-gray-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <Button variant="outline" className="w-max">
          See Full Profile
        </Button>
      </div>
    </aside>
  );
}
