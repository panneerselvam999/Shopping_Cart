import React from "react";

const SearchProduct = () => {
    return (
        <div>
            <div className="relative">
                <input
                    className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 px-3 py-2 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-purple-600 focus:outline-none focus:ring-purple-600"
                    id="search"
                    type="text"
                    placeholder="Search a product"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 hover:text-gray-500"
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
            </div>
        </div>
    );
};

export default SearchProduct;
