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


    // return (
    //     <section className="flex border-2 border-red-800 relative mt-16">
    //         <div className=" sticky top-16 ">
    //             <Filter />
    //         </div>
    //         <div className="grid gap-4 border-2 border-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //             {transformProducts().map((data) => (
    //                 <SingleProduct data={data} key={data.id} />
    //             ))}
    //         </div>
    //     </section>
    // );
    return (
        <section className="flex relative mt-16 w-full">
            {/* <div className=" sticky top-16 pt-1 h-full bg-green-300 ">
                <div className="">
                    <Filter />
                </div>
            </div> */}
            <div className="  pt-1 h-full ">
                <Filter />
            </div>
            <div className="grid flex-grow gap-4 border-l-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  overflow-auto p-5">
                {transformProducts().map((data) => (
                    <SingleProduct data={data} key={data.id} />
                ))}
            </div>
        </section>
    );

};

export default Home;
