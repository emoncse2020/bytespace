import type { Metadata } from "next";
import CourseReviews from "@/components/sections/CourseReviews";
import CourseShell from "@/components/sections/CourseShell";

export const metadata: Metadata = {
  title: "Reviews — Build Digital Asset: A Comprehensive Guide",
  description:
    "Read reviews and ratings from learners who have taken Build Digital Assets: A Comprehensive Guide.",
};

export default function CourseReviewsPage() {
  return (
    <CourseShell tab="Reviews">
      <CourseReviews />
    </CourseShell>
  );
}
