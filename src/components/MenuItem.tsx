import type { MenuItemProps } from "../data/MenuItemProps";

function MenuItem({
  id,
  img,
  title,
  subtitle,
  price,
  selected,
  category,
  onClick,
}: MenuItemProps) {
  // const selectedBorder = selected ? "border-2 border-(--coolor-blue-med)" : "";
  const selectedStyles = selected
    ? "bg-(--coolor-blue-med) shadow-lg-(--coolor-blue-light) text-(--coolor-white)"
    : "border-transparent bg-(--coolor-blue-light)";

  return (
    <div
      className={`
    menu-item-container flex flex-row justify-start gap-2 w-full 
    bg-(--coolor-blue-light) rounded-lg ${selectedStyles} text-(--coolor-black) 
    
    /* Transitions & Basic Hover */
    transition-all duration-300 ease-in-out cursor-pointer
    hover:border-black shadow-sm-(--coolor-blue-light) hover:shadow-xl
    
    /* Lift & Scale Animation */
    hover:-translate-y-1 hover:scale-[1.01] 
    active:scale-[0.98]
  `}
      onClick={() => onClick(id, category)}
    >
      {/* Image Container with Zoom effect */}
      <div className="menu-item-img-container shrink-0 rounded-l-lg">
        <img
          src={img}
          alt={title}
          crossOrigin="anonymous"
          className="w-24 h-full md:w-48 object-cover rounded-tl-lg rounded-bl-lg transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      <div className="menu-item-desc-container flex flex-col gap-2 p-1 py-3 px-4">
        <h2 className="text-lg font-bold transition-colors duration-300 group-hover:text-black">
          {title}
        </h2>
        <div className="menu-item-desc">
          <p className="text-sm opacity-80">{category}</p>
          <p className="text-sm opacity-80">{subtitle}</p>
          <p
            className={`text-sm font-semibold mt-2 ${
              selected ? "text-(--coolor-white)" : "text-(--coolor-blue-med)"
            }`}
          >
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
