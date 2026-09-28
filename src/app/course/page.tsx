import type { Metadata } from "next";
import CourseShell from "@/components/sections/CourseShell";

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide — ByteSpace",
  description: "Unlock the Power of Digital Creation with Expert Guidance.",
};

export default function CourseDetailsPage() {
  return <CourseShell />;
}
