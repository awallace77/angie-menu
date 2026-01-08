import { useState } from "react";
import type { PageView } from "../data/PageView";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import MenuItemList from "../components/MenuItemList";
import type { MenuItemType } from "../data/MenuItemType";
import type { MenuCategoryType } from "../data/MenuCategory";
import Menu from "./Menu";
import { myDishes } from "../sources/MyDishes";
import Filter from "../components/Filter";

function AppNavigation() {
  const [activePage, setActivePage] = useState<PageView>("Dishes");
  const [activeFilter, setActiveFilter] = useState<MenuCategoryType | null>(
    null
  );
  const [items, setItems] = useState<Array<MenuItemType>>(myDishes);
  const [searchItems, setSearchItems] = useState(items);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");

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

  function handleTitleChange(title: string) {
    setTitle(title);
  }

  function handleClear() {
    const updatedItems = items.map((item) => {
      return { ...item, selected: false };
    });

    const updatedSearchItems = searchItems.map((item) => {
      return { ...item, selected: false };
    });

    setItems(updatedItems);
    setSearchItems(updatedSearchItems);
  }

  return (
    <div className="min-h-screen">
      {/* 1. The Tab Toggle */}
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {/* 2. Conditional Page Rendering */}
      <main className="mt-8">
        {activePage === "Dishes" ? (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 pb-10">
                <Filter
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
                <SearchBar
                  label="Search"
                  onSearch={handleSearch}
                  query={query}
                  placeholder="Search"
                />
              </div>
              <MenuItemList
                menuItems={visibleItems}
                onMenuItemClick={handleMenuItemClick}
              />
            </div>
          </section>
        ) : (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <Menu
              onItemClick={handleMenuItemClick}
              onTitleChange={handleTitleChange}
              onClear={handleClear}
              items={items}
              title={title}
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default AppNavigation;
