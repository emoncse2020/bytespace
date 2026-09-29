import {
  CategoryIcon,
  FilterIcon,
  LevelIcon,
  SortIcon,
} from "@/components/ui/SearchIcons";

const PILL =
  "flex h-[48px] cursor-pointer items-center justify-center gap-2 rounded-pill " +
  "border border-gray-200 bg-white px-4 text-[16px] text-gray-700 " +
  "transition-colors hover:bg-gray-50";

/** Filter / Level / Category with the sort control, as drawn on both the
 *  search results and creator profile screens. */
export default function CourseFilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <button className={`${PILL} w-[96px]`}>
          <FilterIcon size={20} />
          Filter
        </button>
        <button className={`${PILL} w-[97px]`}>
          <LevelIcon size={20} />
          Level
        </button>
        <button className={`${PILL} w-[127px]`}>
          <CategoryIcon size={20} />
          Category
        </button>
      </div>
      <button className={`${PILL} w-[157px]`}>
        <SortIcon size={20} />
        Most relevant
      </button>
    </div>
  );
}
