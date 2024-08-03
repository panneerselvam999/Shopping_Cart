// import React, { useState, useEffect } from "react";
// import { CartState } from "../../context/Context";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { MdDeleteForever } from "react-icons/md";

// const Cart = () => {
//   const {
//     state: { cart },
//     dispatch,
//   } = CartState();

//   const [totalAmount, setTotalAmount] = useState(0);

//   // Calculate total amount whenever the cart changes
//   useEffect(() => {
//     // const calculateTotal = () => {
//     const total = cart.reduce(
//       (acc, curr) => acc + Number(curr.price) * curr.qty,
//       0,
//     );
//     setTotalAmount(total);
//     // };
//     // calculateTotal();
//   }, [cart]);

//   return (
//     <div className="flex mt-20 p-5">
//       <div className="flex w-3/4 flex-col  border-2 p-5 m-5">
//         {cart.map(({ image, name, price, id, ratings, qty, inStock }) => (
//           <div
//             key={id}
//             className="my-2 items-center justify-between border-2 lg:flex"
//           >
//             <div>
//               <img src={image} alt={name} className="aspect-video h-24" />
//             </div>
//             <div>
//               <span>{name}</span>
//             </div>
//             <div>
//               <span>₹{price}</span>
//             </div>
//             <div>
//               <div className="flex gap-2">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="cursor-pointer">
//                     {ratings > i ? <AiFillStar /> : <AiOutlineStar />}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <select
//                 value={qty}
//                 onChange={(e) =>
//                   dispatch({
//                     type: "CHANGE_CART_QTY",
//                     payload: {
//                       id,
//                       qty: e.target.value,
//                     },
//                   })
//                 }
//                 className="w-60 border-2 px-6 py-1"
//               >
//                 {[...Array(inStock).keys()].map((x) => (
//                   <option key={x + 1}>{x + 1}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <button
//                 className="mr-6 border-2 p-2"
//                 onClick={() =>
//                   dispatch({
//                     type: "REMOVE_FROM_CART",
//                     payload: { id },
//                   })
//                 }
//                 aria-label={`Remove ${name} from cart`}
//               >
//                 <MdDeleteForever />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="w-1/3 border-2 relative">
//         <div className=" bg-slate-400 p-5 m-5 h-fit text-black  fixed w-full">
//           <h2 className="text-2xl">Total Products: {cart.length}</h2>
//           <span className="text-2xl">Total Amount: ₹{totalAmount}</span>
//           <div>
//             <button className="rounded-md bg-blue-600 px-4 py-2">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from "react";
import { CartState } from "../../context/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

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
    <div className="flex mt-20 p-5">
      <div className="flex-grow flex flex-col border-2 p-5 mr-5">
        {cart.map(({ image, name, price, id, ratings, qty, inStock }) => (
          <div
            key={id}
            className="flex flex-wrap items-center justify-between border-2 my-2"
          >
            <div className="flex-shrink-0">
              <img src={image} alt={name} className="aspect-video h-24" />
            </div>
            <div className="flex-grow">
              <span>{name}</span>
            </div>
            <div className="flex-grow">
              <span>₹{price}</span>
            </div>
            <div className="flex-grow">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="cursor-pointer">
                    {ratings > i ? <AiFillStar /> : <AiOutlineStar />}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-grow">
              <select
                value={qty}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: {
                      id,
                      qty: e.target.value,
                    },
                  })
                }
                className="w-full border-2 px-6 py-1"
              >
                {[...Array(inStock).keys()].map((x) => (
                  <option key={x + 1}>{x + 1}</option>
                ))}
              </select>
            </div>
            <div className="flex-shrink-0 ml-5">
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
      </div>

      <div className="w-1/3 border-2 p-5">
        <div className="bg-slate-400 p-5 text-black sticky top-20">
          <h2 className="text-2xl">Total Products: {cart.length}</h2>
          <span className="text-2xl">Total Amount: ₹{totalAmount}</span>
          <div>
            <button className="rounded-md bg-blue-600 px-4 py-2 mt-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

