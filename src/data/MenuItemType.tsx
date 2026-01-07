// Define the categorie

import type { MenuCategoryType } from "./MenuCategory";

export interface MenuItemType {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  price: number;
  selected: boolean;
  category: MenuCategoryType;
}
