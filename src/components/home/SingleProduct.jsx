import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartState } from "../../context/Context";
import PropTypes from "prop-types";

const SingleProduct = ({ data }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={data.image}
          alt={data.name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {data.fastDelivery && (
          <span className="absolute left-2 top-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 backdrop-blur-sm">
            Fast Delivery
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="line-clamp-1 text-lg font-bold text-gray-800"
            title={data.name}
          >
            {data.name}
          </h3>
          <span className="shrink-0 text-lg font-bold text-primary-600">
            ₹{data.price.toString().split(".")[0]}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {data.ratings > i ? <AiFillStar /> : <AiOutlineStar />}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({data.inStock} left)</span>
        </div>

        <div className="mt-2">
          {cart.some((p) => p.id === data.id) ? (
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: data,
                })
              }
              className="w-full rounded-xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100"
            >
              Remove from Cart
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
              className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                data.inStock
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-primary-500/40"
                  : "cursor-not-allowed bg-gray-100 text-gray-400"
              }`}
            >
              {data.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    inStock: PropTypes.number.isRequired,
    fastDelivery: PropTypes.bool.isRequired,
    ratings: PropTypes.number.isRequired,
  }).isRequired,
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
