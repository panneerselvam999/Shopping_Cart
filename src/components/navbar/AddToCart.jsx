// import React, { useState, useRef, useEffect } from "react";
// import { CartState } from "../../context/Context";
// import { MdDeleteForever } from "react-icons/md";

// // Handler hook for when Outside click dropdown close
// let useClickOutside = (handler) => {
//     let domNode = useRef();

//     useEffect(() => {
//         let maybeHandler = (event) => {
//             if (domNode.current && !domNode.current.contains(event.target)) {
//                 handler();
//             }
//         };

//         document.addEventListener("mousedown", maybeHandler);

//         return () => {
//             document.removeEventListener("mousedown", maybeHandler);
//         };
//     }, [handler]);

//     return domNode;
// };
// // Handler hook for when Outside click dropdown close End Code====>>

// const AddToCart = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     // const [selectedOption, setSelectedOption] = useState(null);

//     // const options = ["Option 1", "Option 2", "Option 3"];

//     let domNode = useClickOutside(() => {
//         setIsOpen(false);
//     });

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     const {
//         state: { cart },
//     } = CartState();

//     return (
//         <div ref={domNode} className="relative inline-block w-fit text-left">
//             <div>
//                 <button
//                     type="button"
//                     className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     onClick={toggleDropdown}
//                 >
//                     <img src="icon/cart.svg" alt="" className="mr-2 h-6 w-6" />
//                     <span>Cart</span>
//                     <span className="ml-2">{cart.length}</span>
//                     <svg
//                         className="-mr-1 ml-2 h-5 w-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         aria-hidden="true"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                 </button>
//             </div>

//             {isOpen && (
//                 <div className="absolute right-0 mt-2 w-fit origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5">
//                     <div
//                         className="w-96 rounded-md bg-gray-600 py-1"
//                         role="menu"
//                         aria-orientation="vertical"
//                         aria-labelledby="options-menu"
//                     >
//                         {cart.map((cartData) => (
//                             <div
//                                 key={cartData.id}
//                                 className="my-1 flex w-full justify-between rounded-md bg-yellow-300"
//                             >
//                                 <div>
//                                     <img
//                                         src={cartData.image}
//                                         alt={cartData.name}
//                                         className="m-1 h-14 w-14"
//                                     />
//                                 </div>
//                                 <div className="flex-grow">
//                                     <p>{cartData.name}</p>
//                                     <span>₹{cartData.price.split(".")[0]}</span>
//                                 </div>
//                                 <div className="flex items-center justify-center">
//                                     <button className="mr-6 border-2 p-2">
//                                         <MdDeleteForever />
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                         <div className="px-5">
//                             <button
//                                 type="submit"
//                                 className="inline-flex w-full justify-center rounded border border-transparent bg-green-600 px-4 py-1 text-xl font-medium text-white transition-colors hover:bg-green-700"
//                             >
//                                 Go to Cart
//                             </button>{" "}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddToCart;

import React, { useState, useRef, useEffect } from "react";
import { CartState } from "../../context/Context";
import { MdDeleteForever } from "react-icons/md";

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

    const domNode = useOutsideClickHandler(() => {
        setIsOpen(false);
    });

    const {
        state: { cart },
        dispatch
    } = CartState();

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div ref={domNode} className="relative inline-block w-fit text-left">
            <div>
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

            {isOpen && (
                <div className="absolute right-0 mt-2 w-fit origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                        className="w-96 rounded-md bg-gray-600 py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {cart.length > 0 ? (
                            <div>
                                {cart.map(({ id, image, name, price }) => (
                                    <div
                                        key={id}
                                        className="my-1 flex w-full justify-between rounded-md bg-yellow-300"
                                    >
                                        <div>
                                            <img
                                                src={image}
                                                alt={name}
                                                className="m-1 h-14 w-14"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <p>{name}</p>
                                            <span>₹{price}</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button
                                                className="mr-6 border-2 p-2"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: { id },
                                                    })
                                                }
                                                aria-label={`Remove ${name} from cart`}
                                            >
                                                <MdDeleteForever />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="px-5">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded border border-transparent bg-green-600 px-4 py-1 text-xl font-medium text-white transition-colors hover:bg-green-700"
                                    >
                                        Go to Cart
                                    </button>
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
