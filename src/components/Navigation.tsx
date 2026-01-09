import type { NavigationProps } from "../data/NavigationProps";
import type { PageView } from "../data/PageView";

function Navigation({ activePage, setActivePage }: NavigationProps) {
  const pages: PageView[] = ["Dishes", "Menu"];

  return (
    <div className="flex justify-center">
      <div className="inline-flex bg-black p-2 rounded-xl border-none">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`
              px-8 py-2 rounded-lg text-md transition-all duration-300 uppercase
              ${
                activePage === page
                  ? "bg-(--coolor-black) text-(--coolor-blue-light) shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                  : "text-gray-500 hover:text-(--coolor-blue-light) hover:cursor-pointer"
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
