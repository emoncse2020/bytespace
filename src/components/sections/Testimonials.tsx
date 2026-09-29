import TestimonialCard from "@/components/cards/TestimonialCard";
import { TESTIMONIALS } from "@/data/content";

/**
 * Mesh background sampled from the design. Three blooms over a #FAFAFA base:
 * a lime one in the upper middle (~x735,y215), a second lime one hugging the
 * right edge (~y300), and a periwinkle one in the bottom-left corner. The
 * pale gap between the two lime blooms is part of the design.
 *
 * Stops fade to a zero-alpha copy of their own colour so the ramp does not
 * darken through transparent black.
 */
const MESH =
  "radial-gradient(24% 43% at 51% 25%, rgba(203,252,1,0.55) 0%, rgba(203,252,1,0) 75%)," +
  "radial-gradient(43% 70% at 100% 42%, rgba(203,252,1,0.39) 0%, rgba(203,252,1,0) 75%)," +
  "radial-gradient(55% 83% at 0% 100%, rgba(159,180,240,0.68) 0%, rgba(159,180,240,0) 75%)," +
  "#fafafa";

export default function Testimonials() {
  return (
    <section className="py-[74px]" style={{ background: MESH }}>
      <div className="container-1200 flex flex-col gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="font-display track-tight max-w-[577px] text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-[16px] leading-[1.6] text-ink-700">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* cards keep their natural heights and align to the top */}
        <div className="grid items-start justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
