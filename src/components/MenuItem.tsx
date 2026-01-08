import type { MenuItemProps } from "../data/MenuItemProps";

function MenuItem({
  id,
  img,
  title,
  price,
  subtitle,
  selected,
  category,
  onClick,
}: MenuItemProps) {
  // const selectedBorder = selected ? "border-2 border-(--coolor-blue-med)" : "";
  const selectedStyles = selected
    ? "bg-(--coolor-blue-med) text-(--coolor-white)"
    : "bg-black";

  return (
    <div
      className={`
        menu-item-container flex flex-row justify-start gap-2 w-full border-none
        rounded-lg ${selectedStyles} text-(--coolor-blue-light) 
    
        transition-all duration-300 ease-in-out cursor-pointer
        hover:border-black shadow-sm-(--coolor-blue-light)
    
        /* Lift & Scale Animation */
        hover:-translate-y-1 hover:scale-[1.01] 
        active:scale-[0.98]
          
        hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
          
        focus:shadow-[0_0_14px_rgba(255,255,255,0.6)]"
  `}
      onClick={() => onClick(id, category)}
    >
      {/* Image Container with Zoom effect */}
      <div className="menu-item-img-container shrink-0 rounded-l-lg">
        <img
          src={img}
          alt={title}
          crossOrigin="anonymous"
          className="w-28 h-full md:w-48 object-cover rounded-tl-lg rounded-bl-lg transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      <div className="menu-item-desc-container flex flex-col gap-2 p-1 py-3 px-4">
        <h2 className="text-lg font-bold transition-colors duration-300 group-hover:text-(--coolor-blue-light) uppercase">
          {title}
        </h2>
        <div className="menu-item-desc flex gap-2 flex-col">
          <p
            className={`text-sm italic ${
              selected ? "text-(--coolor-white)" : "text-(--coolor-blue-med)"
            }`}
          >
            {category}
          </p>
          <p className="text-sm text-(--coolor-blue-light) opacity-80">
            {subtitle}
          </p>
          <p
            className={`font-bold mt-1 pb-1 ${
              selected
                ? "text-(--coolor-blue-light)"
                : "text-(--coolor-blue-med)"
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
