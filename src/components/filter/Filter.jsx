import React from "react";
import Rating from "./Ratting";
import { CartState } from "../../context/Context";

const Filter = () => {
    const {
        productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
        productDispatch,
    } = CartState();

    // console.log(byStock, byFastDelivery, byRating, searchQuery, sort);

    const clearFilters = () => {
        productDispatch({ type: "CLEAR_FILTERS" });
    };

    return (
        <section className="px-6 py-2">
            <div>
                <h4>Filter Products</h4>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                    <input
                        type="radio"
                        id="ascending"
                        name="sort"
                        onChange={() =>
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh",
                            })
                        }
                        checked={sort === "lowToHigh"}
                    />
                    <label htmlFor="ascending">Ascending</label>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="radio"
                        id="descending"
                        name="sort"
                        onChange={() =>
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow",
                            })
                        }
                        checked={sort === "highToLow"}
                    />
                    <label htmlFor="descending">Descending</label>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="checkbox"
                        id="oos"
                        onChange={() =>
                            productDispatch({
                                type: "FILTER_BY_STOCK",
                            })
                        }
                        checked={byStock}
                    />
                    <label htmlFor="oos">Include Out of Stock</label>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="checkbox"
                        id="fast"
                        onChange={() =>
                            productDispatch({
                                type: "FILTER_BY_DELIVERY",
                            })
                        }
                        checked={byFastDelivery}
                    />
                    <label htmlFor="fast">Fast Delivery Only</label>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <span>Rating:</span>
                </div>
                <div>
                    <Rating
                        rating={byRating}
                        onClick={(i) =>
                            productDispatch({
                                type: "FILTER_BY_RATING",
                                payload: i,
                            })
                        }
                    />
                </div>
            </div>
            <div>
                <button
                    className="mx-3 bg-slate-400 px-5 py-2"
                    onClick={clearFilters}
                    aria-label="Clear filter"
                >
                    Clear filter
                </button>
            </div>
        </section>
    );
};

export default Filter;
