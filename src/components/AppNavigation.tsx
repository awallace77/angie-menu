import { useState } from "react";
import type { PageView } from "../data/PageView";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import MenuItemList from "./MenuItemList";
import type { MenuItemType } from "../data/MenuItemType";
import { MenuCategory, type MenuCategoryType } from "../data/MenuCategory";
import Menu from "./Menu";
import { myDishes } from "../sources/MyDishes";
import Filter from "./Filter";

const allItems = [
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
];

function AppNavigation() {
  const [activePage, setActivePage] = useState<PageView>("Menu");
  const [activeFilter, setActiveFilter] = useState<MenuCategoryType | null>(
    null
  );
  const [items, setItems] = useState<Array<MenuItemType>>(myDishes);

  const [searchItems, setSearchItems] = useState(items);
  const [query, setQuery] = useState("");

  // 1. DERIVED STATE: Calculate the list to show every time the component renders
  // This automatically updates when query, items, or activeFilter changes!
  const visibleItems = items.filter((item) => {
    const matchesFilter =
      activeFilter !== null ? item.category === activeFilter : true;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(query.toLowerCase().trim());
    return matchesFilter && matchesSearch;
  });

  function handleMenuItemClick(id: number, category: MenuCategoryType) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      } else if (item.category == category) {
        return { ...item, selected: false };
      }

      return item;
    });

    const updatedSearchItems = searchItems.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      } else if (item.category == category) {
        return { ...item, selected: false };
      }

      return item;
    });

    setItems(updatedItems);
    setSearchItems(updatedSearchItems);
  }

  function handleSearch(query: string) {
    const updatedItems = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase().trim())
    );
    setSearchItems(updatedItems);
    setQuery(query);
  }

  return (
    <div className="min-h-screen">
      {/* 1. The Tab Toggle */}
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {/* 2. Conditional Page Rendering */}
      <main className="mt-8">
        {activePage === "Dishes" ? (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col gap-5">
              <SearchBar
                label="Search"
                onSearch={handleSearch}
                query={query}
                placeholder="Search"
              />
              <Filter
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <MenuItemList
                menuItems={visibleItems}
                onMenuItemClick={handleMenuItemClick}
              />
            </div>
          </section>
        ) : (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <Menu onItemClick={handleMenuItemClick} items={items} />
          </section>
        )}
      </main>
    </div>
  );
}

export default AppNavigation;
