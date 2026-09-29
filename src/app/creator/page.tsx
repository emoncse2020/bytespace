import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/cards/CourseCard";
import CourseFilterBar from "@/components/ui/CourseFilterBar";
import CreatorHero from "@/components/sections/CreatorHero";
import { COURSES } from "@/data/content";

export const metadata: Metadata = {
  title: "PurePearl Studio — ByteSpace",
  description: "Passionate UI/UX, Web designer.",
};

export default function CreatorProfilePage() {
  return (
    <>
      <Header active="Creators" />
      <main>
        <CreatorHero />

        <section className="bg-white pt-[62px] pb-24">
          <div className="container-1200 flex flex-col gap-[40px]">
            <CourseFilterBar />
            <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
