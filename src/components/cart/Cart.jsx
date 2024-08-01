// import React from 'react'
// import { CartState } from '../../context/Context'
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { MdDeleteForever } from "react-icons/md";


// const Cart = () => {

//   const { state: { cart }, dispatch } = CartState()


//   return (
//     <div>
//       <div className='flex flex-col'>
//         {
//           cart.map(cartData => (
//             <div className='border-2 my-2 '>
//               <div>
//                 <img src={cartData.image} alt={cartData.name} className='aspect-video	 h-24' />
//               </div>
//               <div>
//                 <span>
//                   {cartData.name}
//                 </span>
//               </div>
//               <div>
//                 <span>
//                   ₹{cartData.price}
//                 </span>
//               </div>
//               <div>
//                 <div className='flex gap-2'>
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="cursor-pointer">
//                       {cartData.ratings > i ? <AiFillStar /> : <AiOutlineStar />}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <button
//                   className="mr-6 border-2 p-2"
//                   onClick={() =>
//                     dispatch({
//                       type: "REMOVE_FROM_CART",
//                       payload: { cartData.id },
//                     })
//                   }
//                   aria-label={`Remove ${cartData.name} from cart`}
//                 >
//                   <MdDeleteForever />
//                 </button>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Cart

import React from 'react';
import { CartState } from '../../context/Context';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const { state: { cart }, dispatch } = CartState();

  return (
    <div>
      <div className='flex flex-col'>
        {cart.map(({ image, name, price, id, ratings }) => (
          <div key={id} className='border-2 my-2 flex justify-between items-center'>
            <div>
              <img src={image} alt={name} className='aspect-video h-24' />
            </div>
            <div>
              <span>
                {name}
              </span>
            </div>
            <div>
              <span>
                ₹{price}
              </span>
            </div>
            <div>
              <div className='flex gap-2'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="cursor-pointer">
                    {ratings > i ? <AiFillStar /> : <AiOutlineStar />}
                  </span>
                ))}
              </div>
            </div>
            <div>
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
    </div>
  );
}

export default Cart;
