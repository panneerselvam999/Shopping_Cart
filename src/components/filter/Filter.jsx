import React from "react";
import Rating from "./Ratting";
import { CartState } from "../../context/Context";

const Filter = () => {
    const {
        productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
        productDispatch,
    } = CartState();

    const clearFilters = () => {
        productDispatch({ type: "CLEAR_FILTERS" });
    };

    return (
        <section className="px-3 py-2  w-60 ">
            <div className="border-2 rounded-md p-3">
                <div>
                    <h4 className="text-xl mb-6">Filters:</h4>
                </div>
                <div className="flex flex-col gap-5 ">
                    <div className="flex items-center gap-4 border-b">
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
                    <div className="flex items-center gap-4 border-b">
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
                    <div className="flex items-center gap-4 border-b">
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
                        <label htmlFor="oos">Without Out of Stock</label>
                    </div>
                    <div className="flex items-center gap-4 border-b">
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
                    <div className="flex items-center gap-2 border-b">
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
                            className="mx-3 bg-slate-400 px-5 py-2 rounded-md "
                            onClick={clearFilters}
                            aria-label="Clear filter"
                        >
                            Clear filter
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Filter;
