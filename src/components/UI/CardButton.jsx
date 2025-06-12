import React from "react";

const CardButton = ({ color, cartStatus }) => {
  return (
    <div>
      <button className={`${color} rounded-md px-4 py-1`}>
        {cartStatus ? "Add" : "Remove"}
      </button>
    </div>
  );
};

export default CardButton;
