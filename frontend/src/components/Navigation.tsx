import type { NavigationProps } from "../data/NavigationProps";
import type { PageView } from "../data/PageView";

function Navigation({ activePage, setActivePage }: NavigationProps) {
  const pages: PageView[] = ["Dishes", "Menu", "Saved"];

  return (
    <div className="flex justify-center">
      <div className="inline-flex bg-(--coolor-blue) p-1 rounded-xl border border-gray-800">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`
              px-8 py-2 rounded-lg text-md transition-all duration-300
              ${
                activePage === page
                  ? "bg-(--coolor-black) text-(--coolor-white)shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                  : "text-gray-500 hover:text-(--coolor-black) hover:cursor-pointer"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
