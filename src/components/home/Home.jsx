import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "../filter/Filter";
import { useEffect } from "react";

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

    productDispatch,
  } = CartState();

  useEffect(() => {
    if (showFilter) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showFilter]);

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
    <section className="relative mt-16 flex h-[calc(100vh-4rem)] w-full">
      {/* Overlay */}
      {showFilter && (
        <div
          className="fixed inset-0 z-10 bg-black/50 md:hidden"
          onClick={() =>
            productDispatch({
              type: "SHOW_FILTER",
              payload: true,
            })
          }
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-20 h-full w-fit pt-1 md:static md:h-fit md:sticky md:top-20 ${showFilter ? "left-0 duration-700" : "-left-80 duration-700"} md:right-80`}
      >
        <Filter />
      </div>

      <div className="grid flex-grow grid-cols-1 gap-4 overflow-y-auto border-l-2 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {transformProducts().map((data) => (
          <SingleProduct data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;
