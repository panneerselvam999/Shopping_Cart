import React from "react";
import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "../filter/Filter";

const Home = () => {
  const {
    state: { products },
    productState: {
      sort,
      byStock,
      byFastDelivery,
      byRating,
      searchQuery,
      showFilter,
    },
  } = CartState();

  console.log("show filter home : ", showFilter);

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
    <section className="relative mt-16 w-full sm:flex">
      {/* <div className={`absolute -left-80 md:static md:right-80  w-fit bg-gray-300 pt-1 sm:h-full ${showFilter ? "right-80" : "-left-80"}`}>
                <Filter />
            </div> */}
      <div
              className={`absolute w-fit pt-1 sm:h-full ${showFilter ? "left-0 duration-700" : "-left-80 duration-700"} md:right-80 `}
      >
        <Filter />
      </div>

      <div className="grid flex-grow grid-cols-1 gap-4 overflow-auto border-l-2 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {transformProducts().map((data) => (
          <SingleProduct data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;
