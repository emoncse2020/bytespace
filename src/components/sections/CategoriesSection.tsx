import CategoryCard from "@/components/cards/CategoryCard";
import { CATEGORIES } from "@/data/content";

export default function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="container-1200 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          {/* Display XS — Poppins Medium 36/44; sits on one line in the design */}
          <h2 className="font-display track-tight text-[28px] leading-[1.2] font-medium text-ink-950 sm:text-[36px] sm:leading-[44px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[1130px] text-[16px] leading-[1.6] text-gray-400">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/*
          Six 167px cards with 40px gaps measure 1202px - two more than the
          content column - so at xl the row is distributed instead of gapped,
          which keeps it on a single line. Narrower viewports wrap.
        */}
        <div className="flex w-full flex-wrap justify-center gap-10 xl:flex-nowrap xl:justify-between xl:gap-0">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.label} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
