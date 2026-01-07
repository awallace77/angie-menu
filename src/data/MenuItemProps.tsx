import type { MenuCategoryType } from "./MenuCategory";

export interface MenuItemProps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  price: number;
  selected: boolean;
  category: MenuCategoryType;
  onClick: (id: number, category: MenuCategoryType) => void;
}
