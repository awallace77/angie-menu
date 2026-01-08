import type { MenuCategoryType } from "./MenuCategory";

export interface FilterProps {
  activeFilter: MenuCategoryType | null;
  setActiveFilter: (filter: MenuCategoryType | null) => void;
}
