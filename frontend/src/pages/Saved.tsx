import { useEffect, useState } from "react";
import type { PageView } from "../data/PageView";
import type { MenuItemType } from "../data/MenuItemType";

// Define the shape of a Saved Menu based on your SQLite table
interface SavedMenu {
  id: number;
  title: string;
  author: string;
  items: Array<MenuItemType>;
  created_at: string;
}

function Saved({ activePage }: { activePage: PageView }) {
  const [savedMenus, setSavedMenus] = useState<SavedMenu[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = window.location.origin;

  useEffect(() => {
    if (activePage === "Saved") {
      fetch(`${baseUrl}/api/saved-menus`)
        .then((res) => res.json())
        .then((data) => {
          const formattedData = data.map((m: SavedMenu) => ({
            ...m,
            // Only parse if it's a string; some libraries do it for you
            items: typeof m.items === "string" ? JSON.parse(m.items) : m.items,
          }));
          setSavedMenus(formattedData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setLoading(false);
        });
    }
  }, [activePage]);

  if (loading)
    return (
      <div className="text-center mt-10 text-gray-400">
        Loading saved menus...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Saved Collections</h1>

      {savedMenus.length === 0 ? (
        <p className="text-center text-gray-500">No saved menus yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedMenus.map((menu) => (
            <div
              key={menu.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">
                  {menu.title || "Untitled Menu"}
                </h3>
                <p className="text-sm text-gray-400">
                  By {menu.author || "Anonymous"}
                </p>
              </div>

              <div className="space-y-2 border-t border-gray-800 pt-4">
                {menu.items.map((item: MenuItemType, idx: number) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.title}</span>
                    <span className="text-blue-400">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
                <span>{new Date(menu.created_at).toLocaleDateString()}</span>
                <button className="text-red-500 hover:text-red-400 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;
