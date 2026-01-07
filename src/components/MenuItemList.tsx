import type { MenuCategoryType } from "../data/MenuCategory";
import type { MenuItemType } from "../data/MenuItemType";
import MenuItem from "./MenuItem";

function MenuItemList({
  menuItems,
  onMenuItemClick,
}: {
  menuItems: Array<MenuItemType>;
  onMenuItemClick: (id: number, category: MenuCategoryType) => void;
}) {
  const listItems = menuItems.map((item) => (
    <MenuItem
      key={item.id}
      id={item.id}
      img={item.img}
      title={item.title}
      subtitle={item.subtitle}
      price={item.price}
      selected={item.selected}
      category={item.category}
      onClick={handleMenuItemClick}
    />
  ));

  function handleMenuItemClick(id: number, category: MenuCategoryType) {
    onMenuItemClick(id, category);
  }

  return (
    <>
      <div className="menu-items-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {listItems}
      </div>
    </>
  );
}

export default MenuItemList;
