export const MenuCategory = {
  Appetizer: "Appetizer",
  Main: "Main",
  Dessert: "Dessert",
} as const;

// 2. Create a type from that object
export type MenuCategoryType = (typeof MenuCategory)[keyof typeof MenuCategory];
