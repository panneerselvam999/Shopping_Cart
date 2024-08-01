import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Ratting = ({ rating, onClick }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="cursor-pointer"
          onClick={() => onClick(i + 1)}
        >
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default Ratting;
