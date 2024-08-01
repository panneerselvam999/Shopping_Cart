
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartState } from "../../context/Context";

const SingleProduct = ({ data }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="flex flex-col rounded-xl border-2 border-black bg-green-100 p-2  justify-between">
      <div>
        <img
          src={data.image}
          alt={data.name}
          className="aspect-video w-full rounded-lg"
        />
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <h3 className="text-lg font-bold">{data.name}</h3>
        <span className="text-xl font-semibold">
          ₹{data.price.split(".")[0]}
        </span>
        <span className="text-sm text-gray-600">
          {data.fastDelivery ? "Fast Delivery" : "3 Days Delivery"}
        </span>
        <div className="mt-1 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="cursor-pointer">
              {data.ratings > i ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))}
        </div>
        <div>
          {cart.some((p) => p.id === data.id) ? (
            <button
              onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: data
                })
              }
              className="mt-2 rounded-md bg-red-600 px-4 py-1 text-white hover:bg-red-700">
              Remove from cart
            </button>
          ) : (
            <button
              disabled={!data.inStock}
                onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: data
                })
                }
              className={`${data.inStock ? "bg-green-600" : "bg-gray-400"
                } mt-2 rounded-md px-4 py-1 text-white hover:bg-opacity-75`}
            >
              {data.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
