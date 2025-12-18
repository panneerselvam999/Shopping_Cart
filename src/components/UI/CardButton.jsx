import PropTypes from "prop-types";

const CardButton = ({ color, cartStatus }) => {
  return (
    <div>
      <button className={`${color} rounded-md px-4 py-1`}>
        {cartStatus ? "Add" : "Remove"}
      </button>
    </div>
  );
};

CardButton.propTypes = {
  color: PropTypes.string.isRequired,
  cartStatus: PropTypes.bool.isRequired,
};

export default CardButton;
