import CategoryCard from "@/components/cards/CategoryCard";
import { CATEGORIES } from "@/data/content";

export default function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="container-1200 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display track-tight max-w-[917px] text-[32px] leading-[1.2] font-semibold text-ink-950 sm:text-[44px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[760px] text-[16px] leading-[1.6] text-gray-400">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.label} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
