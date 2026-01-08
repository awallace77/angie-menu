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
import Saved from "./Saved";

function AppNavigation() {
  const [activePage, setActivePage] = useState<PageView>("Dishes");
  const [activeFilter, setActiveFilter] = useState<MenuCategoryType | null>(
    null
  );
  const [items, setItems] = useState<Array<MenuItemType>>(myDishes);

  const [searchItems, setSearchItems] = useState(items);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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

  function handleTitleChange(title: string) {
    setTitle(title);
  }

  function handleAuthorChange(author: string) {
    setAuthor(author);
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

  async function handleSave(
    title: string,
    author: string,
    items: Array<MenuItemType | undefined>
  ) {
    console.log("TODO: Handle Save");
    console.log("Title: " + title);
    console.log("Author: " + author);
    items.forEach((item) => {
      console.log(item?.title);
    });
    // Only get the items where selected is true
    const selectedItems = items.filter((i) => i && i.selected);
    const baseUrl = window.location.origin;
    const response = await fetch(`${baseUrl}/api/save-menu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        author: author,
        items: selectedItems,
      }),
    });

    if (response.ok) alert("Menu Saved to SQLite!");
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
        ) : activePage === "Menu" ? (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <Menu
              onItemClick={handleMenuItemClick}
              onAuthorChange={handleAuthorChange}
              onTitleChange={handleTitleChange}
              onClear={handleClear}
              onSave={handleSave}
              items={items}
              title={title}
              author={author}
            />
          </section>
        ) : (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <Saved activePage={activePage} />
          </section>
        )}
      </main>
    </div>
  );
}

export default AppNavigation;
