import { MenuCategory, type MenuCategoryType } from "../data/MenuCategory";
import type { MenuItemType } from "../data/MenuItemType";
import MenuItem from "./MenuItem";

function Menu({
  items,
  onItemClick,
}: {
  items: Array<MenuItemType>;
  onItemClick: (id: number, category: MenuCategoryType) => void;
}) {
  const appetizer = items.find(
    (item) => item.category == MenuCategory.Appetizer && item.selected
  );

  const main = items.find(
    (item) => item.category == MenuCategory.Main && item.selected
  );

  const dessert = items.find(
    (item) => item.category == MenuCategory.Dessert && item.selected
  );

  const courses = ["Appetizer", "Main", "Dessert"];

  const output = [appetizer, main, dessert].map((item, i) => {
    return (
      <div className="flex flex-col gap-5" key={i}>
        <h2 className="text-2xl">{courses[i]}</h2>
        {item ? (
          <MenuItem
            id={item.id}
            category={item.category}
            img={item.img}
            onClick={() => onItemClick(item.id, item.category)}
            price={item.price}
            selected={item.selected}
            subtitle={item.subtitle}
            title={item.title}
          />
        ) : (
          "None"
        )}
        <hr className="text-gray-600 border-0.5" />
      </div>
    );
  });

  return (
    <>
      <div className="menu-container flex flex-col gap-5">{output}</div>
    </>
  );
}

export default Menu;
