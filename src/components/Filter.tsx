import type { FilterProps } from "../data/FilterProps";
import { MenuCategory, type MenuCategoryType } from "../data/MenuCategory";

function Filter({ activeFilter, setActiveFilter }: FilterProps) {
  const filters: MenuCategoryType[] = [
    MenuCategory.Appetizer,
    MenuCategory.Main,
    MenuCategory.Dessert,
  ];

  function handleFilterClick(filter: MenuCategoryType) {
    if (filter == activeFilter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  }

  return (
    <div className="flex justify-evenly w-full my-8 px-2 py-4 bg-black rounded-2xl">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`
              px-4 py-2 rounded-lg text-md transition-all duration-300 uppercase
              ${
                activeFilter === filter
                  ? "bg-(--coolor-black) text-(--coolor-blue-light) shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                  : "text-gray-500 hover:text-(--coolor-blue-light) hover:cursor-pointer"
              }
            `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filter;
