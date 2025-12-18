import Rating from "./Ratting";
import { CartState } from "../../context/Context";
import { AiOutlineClose } from "react-icons/ai";

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating },
    productDispatch,
  } = CartState();

  const clearFilters = () => {
    productDispatch({ type: "CLEAR_FILTERS" });
  };

  return (

    <section className="mt-5 h-full w-64 rounded-xl bg-white p-5 shadow-lg ring-1 ring-black/5">
      <div className="flex flex-col h-full">
        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
          <h4 className="text-xl font-bold text-gray-800">Filters</h4>
          <AiOutlineClose
            className="cursor-pointer text-xl text-gray-500 hover:text-red-500 transition-colors md:hidden"
            onClick={() =>
              productDispatch({
                type: "SHOW_FILTER",
                payload: true,
              })
            }
          />
        </div>
        
        <div className="flex flex-col gap-6 overflow-y-auto pr-2">
          {/* Sort */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-700">Sort by Price</h5>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="ascending"
                name="sort"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
                checked={sort === "lowToHigh"}
              />
              <label htmlFor="ascending" className="text-gray-600 cursor-pointer select-none">Low to High</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="descending"
                name="sort"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  })
                }
                checked={sort === "highToLow"}
              />
              <label htmlFor="descending" className="text-gray-600 cursor-pointer select-none">High to Low</label>
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-700">Preferences</h5>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="oos"
                className="h-4 w-4 rounded text-primary-600 focus:ring-primary-500"
                onChange={() =>
                  productDispatch({
                    type: "FILTER_BY_STOCK",
                  })
                }
                checked={byStock}
              />
              <label htmlFor="oos" className="text-gray-600 cursor-pointer select-none">Include Out of Stock</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="fast"
                className="h-4 w-4 rounded text-primary-600 focus:ring-primary-500"
                onChange={() =>
                  productDispatch({
                    type: "FILTER_BY_DELIVERY",
                  })
                }
                checked={byFastDelivery}
              />
              <label htmlFor="fast" className="text-gray-600 cursor-pointer select-none">Fast Delivery Only</label>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-700">Minimum Rating</h5>
            <div className="pl-1">
              <Rating
                rating={byRating}
                onClick={(i) =>
                  productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i + 1 === byRating ? 0 : i + 1,
                  })
                }
                style={{ color: "#fbbf24" }} // Amber-400
              />
            </div>
          </div>

          <button
            className="mt-4 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900"
            onClick={clearFilters}
            aria-label="Clear filter"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
