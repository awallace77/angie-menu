import { useState } from "react";
import MenuItemList from "./components/MenuItemList";
import { MenuCategory, type MenuCategoryType } from "./data/MenuCategory";
import type { MenuItemType } from "./data/MenuItemType";

function App() {
  const appTitle = "Angie's Dinner Picks";
  const [items, setItems] = useState<Array<MenuItemType>>([
    {
      id: 1,
      img: "/images/bread.jpg",
      price: 10,
      selected: false,
      subtitle: "The best foccacia ever",
      title: "Foccacia",
      category: MenuCategory.Appetizer,
    },
    {
      id: 2,
      img: "/images/burger.jpg",
      price: 15,
      selected: false,
      subtitle: "The best burger ever",
      title: "Burger",
      category: MenuCategory.Main,
    },
    {
      id: 3,
      img: "/images/pancakes.jpg",
      price: 12,
      selected: false,
      subtitle: "The best pancakes ever",
      title: "Pancakes",
      category: MenuCategory.Main,
    },
    {
      id: 4,
      img: "/images/soup.jpg",
      price: 8,
      selected: true,
      subtitle: "The best soup ever",
      title: "Soup",
      category: MenuCategory.Appetizer,
    },
    {
      id: 5,
      img: "/images/sweet-potato.jpg",
      price: 8,
      selected: false,
      subtitle: "The best sweet potato fries ever",
      title: "Sweet Potato Fries",
      category: MenuCategory.Appetizer,
    },
    {
      id: 6,
      img: "/images/yogurt.jpg",
      price: 4,
      selected: false,
      subtitle: "The best yogurt ever",
      title: "Breakfast Yogurt Bowl",
      category: MenuCategory.Dessert,
    },
  ]);

  function handleMenuItemClick(id: number, category: MenuCategoryType) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      } else if (item.category == category) {
        return { ...item, selected: false };
      }

      return item;
    });

    setItems(updatedItems);
  }

  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <div>
          <h1 className="text-2xl">{appTitle}</h1>
        </div>

        <div>Search bar and dropdown</div>

        <div>
          <MenuItemList
            menuItems={items}
            onMenuItemClick={handleMenuItemClick}
          />
        </div>

        <div>Menu (Appetizer, Main, Dessert)</div>
      </div>
    </>
  );
}

export default App;
