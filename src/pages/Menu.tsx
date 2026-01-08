import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";

function Menu({ title, author, items }: any) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleExport = async () => {
    if (!menuRef.current) return;
    setIsGenerating(true);

    try {
      // 1. Generate the Image
      // We use a slight delay to ensure all images are fully rendered
      const dataUrl = await toPng(menuRef.current, {
        cacheBust: true,
        backgroundColor: "#000000",
        pixelRatio: 2, // Increases quality for retina displays/printing
      });

      // 2. Prepare the File for the iOS Share Sheet
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `${title || "my-menu"}.png`, {
        type: "image/png",
      });

      // 3. Share Sheet (Direct to Photos Gallery)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "My Custom Menu",
        });
      } else {
        // Fallback for desktop/older iOS
        setPreviewImage(dataUrl);
      }
    } catch (error) {
      console.error("Export failed", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {/* EXPORT AREA: This is what gets captured */}
      <div ref={menuRef} className="w-full max-w-md bg-black p-6 rounded-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tighter">
            {title || "Menu"}
          </h1>
          <p className="text-blue-400 text-sm">Curated by {author}</p>
        </div>

        <div className="flex flex-col gap-6">
          {items
            .filter((i: any) => i.selected)
            .map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
              >
                {/* IMAGE: Crucial 'crossOrigin' attribute added here */}
                <div className="w-24 h-24 shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pr-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.subtitle}</p>
                  <p className="text-blue-400 font-bold mt-1">${item.price}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            Generated via MenuApp
          </p>
        </div>
      </div>

      <button
        onClick={handleExport}
        disabled={isGenerating}
        className="bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all hover:bg-blue-500 hover:text-white"
      >
        {isGenerating ? "Processing..." : "Save to Photos"}
      </button>

      {/* Fallback Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-6 backdrop-blur-md">
          <p className="text-white text-center mb-4">
            Hold image to{" "}
            <span className="text-blue-400 font-bold">Save to Photos</span>
          </p>
          <img
            src={previewImage}
            className="max-h-[70vh] rounded-lg shadow-2xl border border-gray-800"
          />
          <button
            onClick={() => setPreviewImage(null)}
            className="mt-8 text-gray-500 underline"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
