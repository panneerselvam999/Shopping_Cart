import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, product }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <AiOutlineClose className="h-5 w-5" />
          </button>
        </div>

        <p className="mb-4 text-sm text-gray-500">{message}</p>

        {product && (
          <div className="mb-6 flex items-center gap-4 rounded-lg border border-gray-100 bg-gray-50 p-3">
            <img
              src={product.image}
              alt={product.name}
              className="h-12 w-12 rounded-md object-cover"
            />
            <div>
              <h4 className="font-medium text-gray-900 line-clamp-1">
                {product.name}
              </h4>
              <p className="text-xs text-gray-500">Qty: {product.qty}</p>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    qty: PropTypes.number,
  }),
};

export default ConfirmationModal;
