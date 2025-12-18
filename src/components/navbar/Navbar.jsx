import SearchProduct from "./SearchProduct";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CartState } from "../../context/Context";

const Navbar = () => {
  const {
    productState: { showFilter },
    productDispatch,
  } = CartState();

  console.log("showfilters : ", showFilter);

  return (
    <nav className="fixed left-0 top-0 z-30 flex w-full items-center justify-between border-b border-white/20 bg-white/80 px-6 py-4 backdrop-blur-md md:px-10">
      <div className="flex flex-row-reverse items-center gap-4">
        <Link to={"/"} className="hidden text-2xl font-bold tracking-tight text-gray-900 md:block">
          Shopping Cart
        </Link>
        <Link
          to={"/"}
          className="block text-2xl text-gray-700 md:hidden"
          onClick={() =>
            productDispatch({
              type: "SHOW_FILTER",
              payload: showFilter,
            })
          }
        >
          <HiOutlineMenuAlt1 />
        </Link>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <SearchProduct />
        <AddToCart />
      </div>
    </nav>
  );
};

export default Navbar;
