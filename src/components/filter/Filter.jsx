import React, { useState } from 'react';
import Rating from './Ratting';


const Filter = () => {
    const [rate, setRate] = useState(0);

    const clearFilters = () => {
        // Reset filters to default values
        setRate(0);
        // Add logic to reset other filters if needed
    };

    return (
        <section className="px-6 py-2">
            <div>
                <h4>Filter Products</h4>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                    <input type="radio" id="ascending" name="sort" />
                    <label htmlFor="ascending">Ascending</label>
                </div>
                <div className="flex items-center gap-4">
                    <input type="radio" id="descending" name="sort" />
                    <label htmlFor="descending">Descending</label>
                </div>
                <div className="flex items-center gap-4">
                    <input type="checkbox" id="oos" />
                    <label htmlFor="oos">Include Out of Stock</label>
                </div>
                <div className="flex items-center gap-4">
                    <input type="checkbox" id="fast" />
                    <label htmlFor="fast">Fast Delivery Only</label>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <span>Rating:</span>
                </div>
                <div>
                    <Rating rating={rate} onClick={setRate} />
                </div>
            </div>
            <div>
                <button
                    className="px-5 py-2 bg-slate-400 mx-3"
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
