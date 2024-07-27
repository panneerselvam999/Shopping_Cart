import React, { createContext } from "react";
import { faker } from '@faker-js/faker';

export const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]), // Corrected method
        fastDelivery: faker.datatype.boolean(), // Corrected property name
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]) // Corrected method
    }));

    console.log(products);

    return (
        <Cart.Provider value={{ products }}>
            {children}
        </Cart.Provider>
    );
};

export default Context;
