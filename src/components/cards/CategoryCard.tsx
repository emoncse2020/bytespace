import Image from "next/image";
import Link from "next/link";

export type Category = { label: string; icon: string };

/**
 * White card, 1px border, radius 24, with the Material glyph sitting in a
 * lime circle. `brightness-0` forces the glyph to solid black to match.
 */
export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href="#"
      className="flex size-[167px] shrink-0 flex-col items-center justify-center gap-3 rounded-card border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-md"
    >
      <span className="flex size-[60px] items-center justify-center rounded-full bg-lime-400">
        <Image
          src={category.icon}
          alt=""
          width={36}
          height={36}
          className="brightness-0"
        />
      </span>
      <span className="px-2 text-center text-[18px] leading-[28px] text-gray-950">
        {category.label}
      </span>
    </Link>
  );
}
