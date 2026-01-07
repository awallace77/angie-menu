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
    <div className="flex justify-center my-8">
      <div className="inline-flex bg-(--coolor-blue) p-1 rounded-xl border border-gray-800">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`
              px-8 py-2 rounded-lg text-md transition-all duration-300 
              ${
                activeFilter === filter
                  ? "bg-(--coolor-black) text-(--coolor-white)shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                  : "text-gray-500 hover:text-(--coolor-black) hover:cursor-pointer"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
