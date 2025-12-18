import { useState, useEffect } from "react";
import { CartState } from "../../context/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

const Cart = () => {
  const {
    state: { cart },
    productState: { searchQuery },
    dispatch,
  } = CartState();

  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Filter cart items based on search query
  const filteredCart = cart.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = () => {
    if (itemToDelete) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { id: itemToDelete.id },
      });
      setShowModal(false);
      setItemToDelete(null);
    }
  };

  const openDeleteModal = (product) => {
    setItemToDelete(product);
    setShowModal(true);
  };

  useEffect(() => {
    const total = cart.reduce(
      (acc, curr) => acc + Number(curr.price) * curr.qty,
      0,
    );
    setTotalAmount(total);
  }, [cart]);

  return (
    <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:px-8">
      {/* Cart Items */}
      <div className="flex w-full flex-col md:w-2/3 lg:w-3/4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 text-center shadow-sm">
            <img src="icon/cart.svg" alt="Empty Cart" className="mb-4 h-16 w-16 opacity-20" />
            <p className="text-xl font-medium text-gray-500">Your cart is empty</p>
            <Link to={"/"} className="mt-4 rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
              <span className="text-sm font-medium text-gray-500">{filteredCart.length} Items</span>
            </div>
            
            {filteredCart.length === 0 ? (
               <div className="p-8 text-center text-gray-500">
                 No items match your search.
               </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {filteredCart.map(({ image, name, price, id, ratings, qty, inStock }) => (
                  <li key={id} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-gray-100">
                      <img
                        className="h-full w-full object-cover"
                        src={image}
                        alt={name}
                      />
                    </div>
                    
                    <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {ratings > i ? <AiFillStar /> : <AiOutlineStar />}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-6 sm:justify-end">
                        <div className="flex items-center gap-4">
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
                            className="rounded-lg border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 focus:border-primary-500 focus:ring-primary-500"
                          >
                            {[...Array(inStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                          <div className="flex flex-col items-end">
                            <p className="text-lg font-bold text-gray-800">₹{price * qty}</p>
                            <p className="text-xs text-gray-500">₹{price} each</p>
                          </div>
                        </div>
                        
                        <button
                          type="button"
                          className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                          onClick={() => openDeleteModal({ id, name, image, qty })}
                          aria-label={`Remove ${name} from cart`}
                        >
                          <MdDeleteForever className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title="Remove Item"
        message="Are you sure you want to remove this item from your cart? This action cannot be undone."
        product={itemToDelete}
      />

      {/* Summary */}
      <div className="w-full md:w-1/3 lg:w-1/4">
        <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-bold text-gray-800">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({cart.length} items)</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-primary-600 py-3 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-primary-500/40 hover:-translate-y-0.5">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
