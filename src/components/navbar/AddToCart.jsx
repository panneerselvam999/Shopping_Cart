import { useState, useRef, useEffect } from "react";
import { CartState } from "../../context/Context";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SingleCart from "./SingleCart";
import ConfirmationModal from "../cart/ConfirmationModal";

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
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Navigate hook from react-router-dom
  const navigate = useNavigate();
  const location = useLocation();

  // Handle outside click to close the dropdown
  const domNode = useOutsideClickHandler(() => {
    setIsOpen(false);
  });

  // Get the cart state and dispatch from the context
  const {
    state: { cart },
    dispatch,
  } = CartState();

  // Toggle the dropdown open/closed
  const toggleDropdown = () => {
    if (location.pathname === "/cart") return;
    setIsOpen(!isOpen);
  };

  const handleMainClick = () => {
     if (location.pathname !== "/cart") {
         navigate("/cart");
     }
     setIsOpen(false);
  };

  const openDeleteModal = (product) => {
    setItemToDelete(product);
    setShowModal(true);
  };

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

  return (
    <>
    <div ref={domNode} className="relative inline-block w-fit text-left">
      <div>
        {/* Large screen button */}
        <div className="hidden md:block">
          <div className={`inline-flex items-center rounded-xl border border-gray-100 bg-white shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 ${location.pathname === "/cart" ? "cursor-default opacity-50" : "hover:shadow-md"}`}>
            
            {/* Main Cart Button */}
            <button
              type="button"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-l-xl border-r border-gray-100"
              onClick={handleMainClick}
            >
               <img src="icon/cart.svg" alt="Cart icon" className="mr-2 h-6 w-6" />
               <span className="font-outfit font-semibold">Cart</span>
               {cart.length > 0 && (
                <span className="ml-2 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-bold text-primary-700">
                  {cart.length}
                </span>
              )}
            </button>

             {/* Arrow Toggle Button */}
             {location.pathname !== "/cart" && (
              <button
                 type="button"
                 className="p-2 hover:bg-gray-50 rounded-r-xl text-gray-500"
                 onClick={(e) => {
                     e.stopPropagation();
                     toggleDropdown();
                 }}
                 aria-label="Toggle cart dropdown"
              >
                  <svg
                    className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
              </button>
             )}
          </div>
        </div>
        
        {/* Small screen - Keeping unified button for mobile as touch targets are tricky with split buttons */}
        <div className="block md:hidden">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-xl border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            onClick={() => {
              if (location.pathname === "/cart") {
                navigate(-1);
              } else {
                navigate("/cart");
              }
            }}
          >
            <img src="icon/cart.svg" alt="Cart icon" className="mr-1 h-6 w-6" />
            {cart.length > 0 && (
              <sup className="rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
                {cart.length}
              </sup>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && location.pathname !== "/cart" && (
        <div className="absolute right-0 z-40 mt-3 w-80 origin-top-right transform rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all md:w-96">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
              <h3 className="font-bold text-gray-800">Shopping Cart</h3>
              <span className="text-xs font-medium text-gray-500">{cart.length} Items</span>
            </div>
            
            {cart.length > 0 ? (
              <>
                <ul className="max-h-[60vh] overflow-y-auto pr-1">
                  {cart.map((cartData) => (
                    <SingleCart
                      cartData={cartData}
                      key={cartData.id}
                      dispatch={dispatch}
                      onDelete={() => openDeleteModal(cartData)}
                    />
                  ))}
                </ul>

                <Link 
                  to={"/cart"} 
                  onClick={() => setIsOpen(false)}
                  className="mt-4 block w-full rounded-xl bg-primary-600 py-3 text-center text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-primary-500/40 hover:-translate-y-0.5"
                >
                  View Full Cart
                </Link>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <img src="icon/cart.svg" alt="Empty" className="mb-3 h-12 w-12 opacity-20" />
                <p className="text-sm font-medium text-gray-500">Your cart is empty</p>
              </div>
            )}
          </div>
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
    </>
  );
};
export default AddToCart;
