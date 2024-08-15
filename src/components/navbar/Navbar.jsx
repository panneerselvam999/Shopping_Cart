import React from "react";
import SearchProduct from "./SearchProduct";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CartState } from "../../context/Context";

const Navbar = () => {
    const {
        productState: { showFilter },
        productDispatch
    } = CartState();

    console.log("showfilters : ", showFilter);

    return (
        <nav className='flex  bg-gray-800 text-white justify-between items-center px-10 py-3 fixed top-0 left-0 z-10 w-full'>

            <div className=" flex flex-row-reverse items-center">
                <Link to={"/"} className="hidden md:block">
                    Shopping Cart
                </Link>
                <Link to={"/"} className="block pr-4 md:hidden" onClick={
                    // () => console.log("show filters")
                    () => productDispatch({
                        type: "SHOW_FILTER",
                        payload: showFilter,
                    })

                }>
                    <HiOutlineMenuAlt1 />
                </Link>
            </div>

            <div className="flex gap-4">
                <SearchProduct />
                <AddToCart />
            </div>
        </nav >
    );
};

export default Navbar;
