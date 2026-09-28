import TestimonialCard from "@/components/cards/TestimonialCard";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-[#fafafa] py-[74px]">
      <div className="container-1200 flex flex-col gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="font-display track-tight max-w-[577px] text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-[16px] leading-[1.6] text-gray-400">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
