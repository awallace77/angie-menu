import type { ChangeEvent } from "react";

function SearchBar({
  label,
  query,
  placeholder,
  onSearch,
}: {
  label: string;
  query: string;
  placeholder: string;
  onSearch: (query: string) => void;
}) {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    onSearch(value);
  }

  return (
    <>
      <div className="search-bar-container relative w-full group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-500 group-hover:text-(--coolor-black) group-focus-within:text-(--coolor-black) transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          aria-label={label}
          id="search"
          className="w-full pl-11 pr-4 py-2 rounded-lg bg-(--coolor-blue) text-(--coolor-black) outline-none border-none transition-all duration-300
          /* Hover: Subtle white glow */
          hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]
          /* Focus: Intense white glow */
          focus:shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          type="text"
          value={query}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default SearchBar;
