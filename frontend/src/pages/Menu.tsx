import { MenuCategory, type MenuCategoryType } from "../data/MenuCategory";
import type { MenuItemType } from "../data/MenuItemType";
import MenuItem from "../components/MenuItem";
import type { ChangeEvent } from "react";

function Menu({
  items,
  title,
  author,
  onItemClick,
  onSave,
  onClear,
  onTitleChange,
  onAuthorChange,
}: {
  items: Array<MenuItemType>;
  title: string;
  author: string;
  onItemClick: (id: number, category: MenuCategoryType) => void;
  onSave: (
    title: string,
    author: string,
    items: Array<MenuItemType | undefined>
  ) => void;
  onClear: () => void;
  onTitleChange: (title: string) => void;
  onAuthorChange: (author: string) => void;
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
      </div>
    );
  });

  function handleOnChange(
    event: ChangeEvent<HTMLInputElement>,
    callback: (text: string) => void
  ) {
    const value = event.target.value;
    callback(value);
  }

  return (
    <>
      <div className="menu-container flex flex-col justify-center gap-10 pt-5">
        <div className="flex flex-col gap-2 items-center">
          <input
            id="title"
            className="w-100 px-4 py-2 
            rounded-lg outline-none border-none
            text-(--coolor-white) text-center text-2xl
            transition-all duration-300
            hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]
            focus:shadow-[0_0_14px_rgba(255,255,255,0.6)]"
            type="text"
            value={title}
            onChange={(event) => handleOnChange(event, onTitleChange)}
            placeholder="Enter the title"
          />

          <input
            id="author"
            className="w-100 px-4 py-2 
            rounded-lg outline-none border-none 
            bg-transparent 
            text-(--coolor-white) text-center text-2xl
            transition-all duration-300
            hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]
            focus:shadow-[0_0_14px_rgba(255,255,255,0.6)]"
            type="text"
            value={author}
            onChange={(event) => handleOnChange(event, onAuthorChange)}
            placeholder="Enter your name"
          />
        </div>
        <hr className="text-gray-600 border-0.5" />
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {output}
        </div>
        <hr className="text-gray-600 border-0.5" />
        <div className="flex flex-row gap-5 p-10 justify-center">
          <input
            onClick={() => onSave(title, author, [appetizer, main, dessert])}
            type="button"
            className="px-8 py-2 cursor-pointer 
            outline-none rounded-lg  
            text-(--coolor-black) 
            bg-(--coolor-blue-light) hover:bg-(--coolor-blue)
            transition-all duration-300 
            hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]
            focus:shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            value="Save Menu"
          />
          <input
            onClick={onClear}
            type="button"
            className="px-8 py-2 cursor-pointer 
            outline-none rounded-lg  
            text-(--coolor-black) 
            bg-(--coolor-blue-light) hover:bg-(--coolor-blue)
            transition-all duration-300 
            hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]
            focus:shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            value="Clear"
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
