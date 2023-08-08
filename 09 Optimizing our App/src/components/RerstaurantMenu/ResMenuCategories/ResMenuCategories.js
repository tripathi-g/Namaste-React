import { MENU_ITEM_IMAGE_URL } from "../../../utils/constants";
import vegIcon from "../../../../img/veg.png";
import nonVegIcon from "../../../../img/nonVeg.png";
const ResMenuCategories = (props) => {
  const { title, itemCards } = props?.category?.card?.card;

  const showHideMenuCategory = (e) => {
    if (e.target.parentNode.nodeName === "BUTTON") {
      const categoryHeader = e.target.parentNode.parentNode;
      const categoryBody = categoryHeader.nextElementSibling;
      showHideElement(categoryBody, e.target);
    } else {
      const categoryHeader = e.target.parentNode;
      const categoryBody = categoryHeader.nextElementSibling;
      showHideElement(categoryBody, e.target.children[0]);
    }
  };

  const showHideElement = (element, icon) => {
    if (element.classList.contains("hide")) {
      element.classList.remove("hide"); //display the menu items
      icon.classList.remove("fa-sort-desc");
      icon.classList.add("fa-sort-asc");
    } else {
      element.classList.add("hide");
      icon.classList.remove("fa-sort-asc");
      icon.classList.add("fa-sort-desc");
    }
  };
  return (
    <div className="menu-category">
      <div className="menu-category-header">
        <h2 className="menu-category-title">
          {title + " (" + itemCards.length + ")"}
        </h2>
        <button className="btn-show-hide" onClick={showHideMenuCategory}>
          <i
            className={
              title === "Recommended" ? "fa fa-sort-asc" : "fa fa-sort-desc"
            }
          ></i>
        </button>
      </div>
      <div
        className={
          title === "Recommended"
            ? "menu-category-body"
            : "menu-category-body hide"
        }
      >
        {itemCards.map((menuItem) => {
          const { name, defaultPrice, price, isVeg, description, imageId, id } =
            menuItem?.card?.info;
          return (
            <div key={id} className="menu-item">
              <div className="menu-info">
                {isVeg ? (
                  <img src={vegIcon}></img>
                ) : (
                  <img src={nonVegIcon}></img>
                )}
                <h3 className="menu-item-name">{name}</h3>
                <h4 className="menu-item-price">
                  <i className="fa fa-inr"></i>&nbsp;
                  {price / 100 || defaultPrice / 100}
                </h4>
                <p className="menu-item-desc">{description}</p>
              </div>
              {imageId ? (
                <div>
                  <img
                    className="menu-item-image"
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
    </div>
  );
  return <h1>Menu</h1>;
};

export default ResMenuCategories;
