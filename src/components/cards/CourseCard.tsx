import Image from "next/image";
import Link from "next/link";
import Chip from "@/components/ui/Chip";

export type Course = {
  id: string;
  title: string;
  author: string;
  thumb: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  rating: string;
  enrolled: string;
};

const AVATARS = [
  "/assets/courses/av-1.png",
  "/assets/courses/av-2.png",
  "/assets/courses/av-3.png",
  "/assets/courses/av-4.png",
];

export default function CourseCard({
  course,
  badges = true,
}: {
  course: Course;
  /** false when the thumbnail already has the meta chips baked in */
  badges?: boolean;
}) {
  return (
    <article className="group w-full max-w-[373px] overflow-hidden rounded-card border border-gray-200 bg-white p-[15px] transition-shadow duration-300 hover:shadow-lg">
      {/* thumbnail with translucent meta badges */}
      <div className="relative h-[195px] w-full overflow-hidden rounded-thumb bg-thumb-fallback">
        <Image
          src={course.thumb}
          alt={course.title}
          fill
          sizes="341px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badges ? (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-3">
            <Chip variant="veil">{course.lessons}</Chip>
            <Chip variant="veil">{course.duration}</Chip>
            <Chip variant="veil">{course.comments}</Chip>
          </div>
        ) : null}
      </div>

      <div className="flex items-start justify-between gap-2 pt-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Link
              href="#"
              className="font-display track-tight block w-[235px] truncate text-[20px] leading-[28px] font-semibold text-ink-950 transition-colors hover:text-blue-800"
            >
              {course.title}
            </Link>
            <p className="text-[12px] leading-[20px] text-ink-700">
              by <span className="text-blue-800">{course.author}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Chip variant="muted">
              <Image
                src="/assets/icons/signal-cellular-alt.svg"
                alt=""
                width={20}
                height={20}
              />
              {course.level}
            </Chip>

            {/* overlapping enrolled-student avatars */}
            <div className="flex items-center">
              {AVATARS.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="-mr-2 rounded-full"
                  style={{ zIndex: AVATARS.length - i }}
                />
              ))}
              <span className="relative ml-2 inline-flex h-8 w-8 items-center justify-center">
                <Image
                  src="/assets/icons/badge-26.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="absolute inset-0"
                />
                <span className="relative text-[12px] leading-[20px] font-medium text-gray-950">
                  {course.enrolled}
                </span>
              </span>
            </div>
          </div>

          <p className="flex items-end">
            <span className="font-display track-tight text-[20px] leading-[28px] font-semibold text-blue-800">
              {course.price}
            </span>
            <span className="text-[12px] leading-[20px] text-ink-700">/lifetime</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <span className="text-[18px] leading-[28px] font-medium text-ink-700">
            {course.rating}
          </span>
          <Image src="/assets/icons/star-rate.svg" alt="rating" width={24} height={24} />
        </div>
      </div>
    </article>
  );
}
