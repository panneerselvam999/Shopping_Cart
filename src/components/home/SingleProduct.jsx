import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartState } from "../../context/Context";

const SingleProduct = ({ data }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className="flex flex-col justify-between rounded-xl bg-gray-100 p-2">
            <div>
                <img
                    src={data.image}
                    alt={data.name}
                    className="aspect-video w-full rounded-lg"
                />
            </div>
            <div className="mt-2 flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                    <div>
                        <h3 className="text-lg font-bold">{data.name}</h3>
                        <span></span>
                    </div>

                    <span className="text-sm text-gray-600">
                        {data.fastDelivery ? ( 
                            <img src="icon/fast.svg" alt="Fast delivery" className="w-5 text-green-50" />
                        ) : (
                            <img src="icon/slow.svg" alt="Slow delivery" className="w-5 text-red-500" />
                        )}
                    </span>
                </div>

                <div className="flex gap-2">
                    <div className="mt-1 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="cursor-pointer">
                                {data.ratings > i ? <AiFillStar /> : <AiOutlineStar />}
                            </span>
                        ))}
                    </div>
                    <div>({data.inStock} left)</div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-semibold">
                            ₹ {data.price.split(".")[0]}
                        </span>
                    </div>
                    <div >
                        {cart.some((p) => p.id === data.id) ? (
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: data,
                                    })
                                }
                                className="mt-2 rounded-md bg-red-600 px-4 py-1 text-white hover:bg-red-700"
                            >
                                Remove from cart
                            </button>
                        ) : (
                            <button
                                disabled={!data.inStock}
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: data,
                                    })
                                }
                                className={` mt-2 rounded-md px-4 py-1  hover:bg-opacity-75 ${data.inStock ? "bg-green-600 text-white" : "bg-gray-400 text-black"}`}
                            >
                                {data.inStock ? "Add to Cart" : "Out of Stock"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

// import React from 'react'

// const SingleProduct = () => {
//   return (
//     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
//       </a>
//       <div className="px-5 pb-5">
//         <a href="#">
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//             Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
//           </h5>
//         </a>
//         <div className="flex items-center mt-2.5 mb-5">
//           <div className="flex items-center space-x-1 rtl:space-x-reverse">
//             <svg
//               className="w-4 h-4 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-4 h-4 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-4 h-4 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-4 h-4 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-4 h-4 text-gray-200 dark:text-gray-600"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//           </div>
//           <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//             5.0
//           </span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
//           <a
//             href="#"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Add to cart
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SingleProduct
