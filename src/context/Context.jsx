import React, { createContext } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
    return <Cart.Provider>{children}</Cart.Provider>;
};

export default Context;
