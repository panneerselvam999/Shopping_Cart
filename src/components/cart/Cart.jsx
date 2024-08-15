import React, { useState, useEffect } from "react";
import { CartState } from "../../context/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const total = cart.reduce(
            (acc, curr) => acc + Number(curr.price) * curr.qty,
            0,
        );
        setTotalAmount(total);
    }, [cart]);

    return (
        <div className="mt-20 flex flex-col-reverse gap-5 p-5 md:flex-row md:gap-0">
            <div className="mr-5 flex w-full flex-col border-2 p-5 md:w-3/4">
                {cart.length === 0 ? (
                    <div>
                        <p>Cart is empty!</p>
                        <Link to={"/"} className="text-blue-500 underline">
                            Go to Shop
                        </Link>
                    </div>
                ) : (
                    <ul className="flex flex-col divide-y dark:divide-gray-300">
                        {cart.map(({ image, name, price, id, ratings, qty, inStock }) => (
                            <li
                                key={id}
                                className="flex flex-col py-6 sm:flex-row sm:justify-between"
                            >
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                    <img
                                        className="h-20 w-20 flex-shrink-0 rounded object-cover outline-none sm:h-32 sm:w-32 dark:bg-gray-500"
                                        src={image}
                                        alt={name}
                                    />
                                    <div className="flex w-full flex-col justify-between pb-4">
                                        <div className="flex w-full justify-between space-x-2 pb-2">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                    {name}
                                                </h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold">₹{price}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="cursor-pointer">
                                                    {ratings > i ? <AiFillStar /> : <AiOutlineStar />}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex divide-x text-sm">
                                            <button
                                                type="button"
                                                className="flex items-center space-x-1 px-2 py-1 pl-0"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: { id },
                                                    })
                                                }
                                                aria-label={`Remove ${name} from cart`}
                                            >
                                                <MdDeleteForever className="h-4 w-4 fill-current" />
                                                <span>Remove</span>
                                            </button>
                                            <select
                                                value={qty}
                                                onChange={(e) =>
                                                    dispatch({
                                                        type: "CHANGE_CART_QTY",
                                                        payload: {
                                                            id,
                                                            qty: Number(e.target.value),
                                                        },
                                                    })
                                                }
                                                className="border-2 min-w-20 px-5 py-1"
                                            >
                                                {[...Array(inStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="w-full border-2 p-5 md:w-1/3">
                <div className="sticky top-20 bg-slate-400 p-5 text-black">
                    <h2 className="text-2xl">Total Products: {cart.length}</h2>
                    <span className="text-2xl">Total Amount: ₹{totalAmount}</span>
                    <div>
                        <button className="mt-2 rounded-md bg-blue-600 px-4 py-2">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
