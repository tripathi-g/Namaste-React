import { MENU_ITEM_IMAGE_URL } from "../../../utils/constants";
import vegIcon from "../../../../img/veg.png";
import nonVegIcon from "../../../../img/nonVeg.png";
const MenuCategoryItems = (props) => {
  const { itemCards } = props;
  return (
    <div className="menu-category-body">
      {itemCards.map((menuItem) => {
        const { name, defaultPrice, price, isVeg, description, imageId, id } =
          menuItem?.card?.info;
        return (
          <div
            key={id}
            className="px-2 py-4 flex justify-between items-cnter border-b border-stone-300 menu-item"
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
              <div>
                <img
                  className="w-full min-h-[100px] min-w-[100px] max-w-[100px] max-h-[100px] rounded-lg object-cover block menu-item-image"
                  src={MENU_ITEM_IMAGE_URL + imageId}
                ></img>
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

export default MenuCategoryItems;
