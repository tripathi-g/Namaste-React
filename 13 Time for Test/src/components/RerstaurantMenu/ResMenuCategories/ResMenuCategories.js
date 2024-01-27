import { useEffect } from "react";
import MenuCategoryItems from "./MenuCategoryItems";
const ResMenuCategories = (props) => {
  const { title, itemCards } = props?.category?.card?.card;
  const { showCatItems, setShowCatIndex, catIndex } = props;

  const showHideMenuCategory = () => {
    showCatItems ? setShowCatIndex(null) : setShowCatIndex(catIndex);
  };

  return (
    <div className="mb-4 p-4 bg-white shadow-md shadow-stone-200 menu-category rounded-md">
      <div
        className="flex justify-between items-center cursor-pointer menu-category-header"
        onClick={showHideMenuCategory}
      >
        <h2 className="m-0 text-sm font-bold w-[80%] menu-category-title">
          {title + " (" + itemCards.length + ")"}
        </h2>
        <button className="btn-show-hide">
          <i
            className={showCatItems ? "fa fa-sort-asc" : "fa fa-sort-desc"}
          ></i>
        </button>
      </div>
      {showCatItems && (
        <MenuCategoryItems buttonToShow="add" itemCards={itemCards} />
      )}
    </div>
  );
};

export default ResMenuCategories;
