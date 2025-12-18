import PropTypes from "prop-types";
// import { CartState } from '../../context/Context';

// const SingleCart = ({ id, image, name, price }) => {
//         // console.log({ id, image, name, price });

const SingleCart = ({ cartData, dispatch, onDelete }) => {
  const { id, image, name, price } = cartData;

  const handleDelete = () => {
    if (onDelete) {
      onDelete(cartData);
    } else {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { id },
      });
    }
  };

  return (
    <li className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-gray-50">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="truncate text-sm font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm font-bold text-primary-600">₹{price}</p>
      </div>

      <button
        type="button"
        className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
        onClick={handleDelete}
        aria-label="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
};

SingleCart.propTypes = {
  cartData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default SingleCart;
