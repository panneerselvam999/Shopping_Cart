import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Ratting = ({ rating, onClick, style }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="cursor-pointer"
          onClick={() => onClick(i)}
          style={style}
        >
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
};

Ratting.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Ratting;
