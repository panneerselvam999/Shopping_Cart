import React, { useState, useEffect } from "react";
import SearchProduct from "./SearchProduct";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    // const [isVisible, setIsVisible] = useState(true);
    // const [lastScrollY, setLastScrollY] = useState(0);

    // // Handle scroll event
    // const handleScroll = () => {
    //     const currentScrollY = window.scrollY;

    //     // Hide the navbar if scrolling down and show if scrolling up
    //     if (currentScrollY > lastScrollY && currentScrollY > 50) {
    //         setIsVisible(false);
    //     } else {
    //         setIsVisible(true);
    //     }

    //     setLastScrollY(currentScrollY);
    // };

    // useEffect(() => {
    //     // Add scroll event listener
    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         // Clean up event listener on unmount
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [lastScrollY]);

    return (
        <nav className='flex  bg-gray-800 text-white justify-between items-center px-10 py-3 fixed top-0 left-0 z-10 w-full'>
        {/* <nav
            className={`fixed left-0 top-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} flex items-center justify-between bg-gray-800 px-3 py-3 text-white shadow-md sm:px-10 z-20`}
        > */}
            <div>
                <Link to={"/"} className="hidden sm:block">
                    Shopping Cart
                </Link>
                <Link to={"/"} className="block pr-4 sm:hidden">
                    <HiOutlineMenuAlt1 />
                </Link>
            </div>
            {/* <div>
            </div> */}
            <div className="flex gap-4">
                <SearchProduct />
                <AddToCart />
            </div>
        </nav>
    );
};

export default Navbar;
