import CourseCard from "@/components/cards/CourseCard";
import { COURSES } from "@/data/content";

export default function CourseGrid() {
  return (
    <section className="pb-24">
      <div className="container-1200">
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
