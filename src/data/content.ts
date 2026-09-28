import type { Course } from "@/components/cards/CourseCard";
import type { Category } from "@/components/cards/CategoryCard";
import type { Testimonial } from "@/components/cards/TestimonialCard";

/* Copy and values below are taken verbatim from the Figma file. */

export const CATEGORIES: Category[] = [
  { label: "Design", icon: "/assets/categories/design.svg" },
  { label: "Development", icon: "/assets/categories/development.svg" },
  { label: "IT & Software", icon: "/assets/categories/it-software.svg" },
  { label: "Business", icon: "/assets/categories/business.svg" },
  { label: "Marketing", icon: "/assets/categories/marketing.svg" },
  { label: "Photography", icon: "/assets/categories/photography.svg" },
];

export const TOPIC_TABS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Animation",
  "Social Media",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Productivity",
  "UI/UX Design",
  "Cooking",
];

/* Card order and artwork follow the design's grid, left to right. */
const CATALOGUE: Array<[string, string]> = [
  ["Learn Figma from Basic", "/assets/courses/thumb-figma.jpg"],
  ["Build Digital Asset", "/assets/courses/thumb-sample.png"],
  ["the Power of Big Data", "/assets/courses/thumb-data.jpg"],
  ["Balancing Productivity and Self-Care", "/assets/courses/thumb-balance.jpg"],
  ["Mastering Money Management", "/assets/courses/thumb-money.jpg"],
  ["From Idea to Startup Success", "/assets/courses/thumb-startup.jpg"],
];

export const COURSES: Course[] = CATALOGUE.map(([title, thumb], i) => ({
  id: `course-${i + 1}`,
  title,
  author: "purepearl studio",
  thumb,
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  level: "Beginner",
  price: "$25",
  rating: "4.5",
  enrolled: "26+",
}));

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/testimonials/sarah.png",
    quote:
      "“ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.”",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/testimonials/james.png",
    quote:
      "“I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.”",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/testimonials/alex.png",
    quote:
      "“As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.”",
  },
];

export const HERO_AVATARS = [1, 2, 3, 4, 5, 6, 7].map(
  (n) => `/assets/hero/avatar-${n}.png`,
);
