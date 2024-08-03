import React, { useState, useRef, useEffect } from "react";
import { CartState } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import SingleCart from "./SingleCart";

// Custom hook to detect outside clicks and close the dropdown
const useOutsideClickHandler = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    }, [handler]);

    return domNode;
};

const AddToCart = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Navigate hook from react-router-dom
    const navigate = useNavigate();

    // Handle outside click to close the dropdown
    const domNode = useOutsideClickHandler(() => {
        setIsOpen(false);
    });

    // Get the cart state and dispatch from the context
    const {
        state: { cart },
        dispatch,
    } = CartState();

    // Toggle the dropdown open/closed
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div ref={domNode} className="relative inline-block w-fit text-left">
            <div>
                {/* Large screen button */}
                <div className="hidden md:block">
                    <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={toggleDropdown}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                    >
                        <img src="icon/cart.svg" alt="Cart icon" className="mr-2 h-6 w-6" />
                        <span>Cart</span>
                        <span className="ml-2">({cart.length})</span>
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {/* Small screen button */}
                <div className="block md:hidden">
                    <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                            navigate("/cart");
                        }}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                    >
                        <img src="icon/cart.svg" alt="Cart icon" className="mr-1 h-6 w-6" />
                        <sup className="text-sm">{cart.length}</sup>
                    </button>
                </div>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-fit origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                        className="w-96 rounded-md bg-gray-600 py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {cart.length > 0 ? (
                            <div
                                className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                                aria-modal="true"
                                role="dialog"
                                tabIndex="-1"
                            >
                                <button
                                    className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="sr-only">Close cart</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                                <div className="mt-4 space-y-6">
                                    <ul className="max-h-56 space-y-4 overflow-y-scroll">
                                        {cart.map((cartData) => (
                                            <SingleCart
                                                cartData={cartData}
                                                key={cartData.id}
                                                dispatch={dispatch}
                                            />
                                        ))}
                                    </ul>

                                    <div className="space-y-4 text-center">
                                        <Link to={"/cart"} onClick={() => setIsOpen(false)}>
                                            <span className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
                                                View my cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="px-4 py-2 text-white">Cart is Empty!</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddToCart;
