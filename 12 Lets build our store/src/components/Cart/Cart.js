import React from "react";
import { removeItem, clearCart } from "../../utils/cartSlice.js";
import MenuCategoryItems from "../RerstaurantMenu/ResMenuCategories/MenuCategoryItems.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const totalCartPrice = useSelector((store) => store.cart.totalCartPrice);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="mt-4 mx-auto px-4 pb-32 max-w-[700px] res-menu-wrapper h-[70vh] overflow-auto">
        <h2 className="tex-bold text-lg p-4 font-bold">Your Cart:</h2>
        <div className="mt-8 p-4 flex flex-col justify-center items-center">
          <h3>Opps... Your cart is empty. Please add itmes to your cart.</h3>
          <Link to="/" className="mt-4 text-stone-800 underline font-bold">
            <i className="fa fa-chevron-left text-sm" aria-hidden="true"></i> Go
            Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-4 mx-auto px-4 pb-32 max-w-[700px] res-menu-wrapper h-[70vh] overflow-auto">
        <h2 className="tex-bold text-lg p-4 font-bold">Your Cart:</h2>
        <MenuCategoryItems
          buttonToShow="remove"
          removeItem={removeItem}
          itemCards={items}
        />
      </div>
      <div className="bg-white fixed bottom-6 py-6 w-full flex px-6 md:px-8 justify-between items-center">
        <button
          onClick={() => handleClearCart()}
          className="relative px-4 font-semibold py-2 text-xs md:text-sm border border-stone-400 rounded-lg"
        >
          Clear Cart
        </button>
        <span className="font-bold">
          Total Cart Amount : {totalCartPrice} ₹
        </span>
      </div>
    </>
  );
};

export default Cart;
