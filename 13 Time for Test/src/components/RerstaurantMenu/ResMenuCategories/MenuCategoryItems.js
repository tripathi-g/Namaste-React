import { MENU_ITEM_IMAGE_URL } from "../../../utils/constants";
import vegIcon from "../../../../img/veg.png";
import nonVegIcon from "../../../../img/nonVeg.png";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../utils/cartSlice";
const MenuCategoryItems = ({ itemCards, buttonToShow }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveFromCart = (cartItemIndex) => {
    dispatch(removeItem(cartItemIndex));
  };

  return (
    <div className="menu-category-body">
      {itemCards.map((menuItem, index) => {
        const { name, defaultPrice, price, isVeg, description, imageId, id } =
          menuItem?.card?.info;
        return (
          <div
            key={id}
            className="px-2 py-4 flex justify-between items-center border-b border-stone-300 menu-item"
          >
            <div className="w-[70%] menu-info">
              {isVeg ? <img src={vegIcon}></img> : <img src={nonVegIcon}></img>}
              <h3 className="text-sm font-medium menu-item-name">{name}</h3>
              <h4 className="mt-[0.4rem] text-[0.8rem] font-normal menu-item-price">
                <i className="fa fa-inr"></i>&nbsp;
                {price / 100 || defaultPrice / 100}
              </h4>
              <p className="m-0 w-[80%] max-h-8 text-[0.7rem] font-light overflow-hidden menu-item-desc">
                {description}
              </p>
            </div>
            {imageId ? (
              <div className="relative">
                <img
                  className="w-full min-h-[100px] min-w-[100px] max-w-[100px] max-h-[100px] rounded-lg object-cover block menu-item-image"
                  src={MENU_ITEM_IMAGE_URL + imageId}
                ></img>
                {buttonToShow === "add" ? (
                  <button
                    onClick={() => {
                      handleAddToCart(menuItem);
                    }}
                    className="absolute bottom-1 left-[5%] w-[90%] rounded-lg p-2 text-xs font-semibold border border-zinc-300 text-green-600 bg-white block hover:border-green-600"
                  >
                    Add
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleRemoveFromCart(index);
                    }}
                    className="absolute bottom-1 left-[5%] w-[90%] rounded-lg p-2 text-xs font-semibold border border-zinc-300 text-red-600 bg-white block hover:border-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export const MenuItemWithAddToCart = (MenuCategoryItems) => {
  return;
};
export default MenuCategoryItems;
