import React from "react";
import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "../filter/Filter";

const Home = () => {
    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price,
            );
        }
        if (byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating,
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery),
            );
        }

        return sortedProducts;
    };


    return (
        <div className="flex">
            <div>
                <Filter />
            </div>
            <div className="grid gap-4 border-2 border-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {transformProducts().map((data) => (
                    <SingleProduct data={data} key={data.id} />
                ))}
            </div>
        </div>
    );
};

export default Home;
