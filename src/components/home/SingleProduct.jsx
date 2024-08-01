// import React from "react";
// import CardButton from "../UI/CardButton";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// const SingleProduct = ({ data }) => {
//   return (
//     <div className="flex flex-col rounded-xl border-2 border-black bg-green-100 p-2">
//       <div>
//         <img src={data.image} alt={data.name} className="aspect-video" />
//       </div>
//       <div className="flex flex-col gap-2">
//         <h3>{data.name}</h3>
//         <span>₹{data.price.split(".")[0]}</span>
//         <span>{data.fastDelivery ? "Fast Delivery" : "3 Days Delivery"}</span>
//         <div>
//           <div className="flex gap-1">
//             {[...Array(5)].map((_, i) => (
//               <span key={i} className="cursor-pointer">
//                 {data.ratings > i ? <AiFillStar /> : <AiOutlineStar />}
//               </span>
//             ))}
//           </div>{" "}
//         </div>
//         <button className="rounded-md bg-red-600 px-4 py-1">
//           Remove from cart
//         </button>
//         <button
//           disabled={!data.inStock}
//           className={`${!data.inStock ? "bg-green-600" : "bg-slate-600"} rounded-md px-4 py-1`}
//         >
//           {!data.inStock ? "Add to Cart" : "Out of Stack"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;


import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProduct = ({ data }) => {
  return (
    <div className="flex flex-col rounded-xl border-2 border-black bg-green-100 p-2">
      <div>
        <img src={data.image} alt={data.name} className="aspect-video w-full rounded-lg" />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="text-lg font-bold">{data.name}</h3>
        <span className="text-xl font-semibold">₹{data.price.split(".")[0]}</span>
        <span className="text-sm text-gray-600">
          {data.fastDelivery ? "Fast Delivery" : "3 Days Delivery"}
        </span>
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="cursor-pointer">
              {data.ratings > i ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))}
        </div>
        <button className="rounded-md bg-red-600 px-4 py-1 text-white mt-2 hover:bg-red-700">
          Remove from cart
        </button>
        <button
          disabled={!data.inStock}
          className={`${data.inStock ? "bg-green-600" : "bg-gray-400"
            } rounded-md px-4 py-1 text-white mt-2 hover:bg-opacity-75`}
        >
          {data.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
