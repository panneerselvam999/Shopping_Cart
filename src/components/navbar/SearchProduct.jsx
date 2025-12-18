import { CartState } from "../../context/Context";

const SearchProduct = () => {
  const { productState, productDispatch } = CartState();
  const clearSearchBar = () => {
    productDispatch({
      type: "CLEAR_SEARCH_BAR",
    });
  };

  return (
    <div className="md:w-[250px] lg:w-[400px]">
      <div className="relative">
        <input
          className="w-full rounded-2xl border-0 bg-gray-100 px-4 py-2.5 pl-11 text-sm font-medium text-gray-900 transition-all placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-primary-500"
          id="search"
          type="text"
          placeholder="Search products..."
          value={productState.searchQuery || ""}
          onChange={(e) =>
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            })
          }
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {productState.searchQuery && (
          <div
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            onClick={clearSearchBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
