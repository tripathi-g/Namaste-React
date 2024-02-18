import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";

import ResMenuInfo from "./ResMenuInfo/ResMenuInfo";
import ResOffers from "./ResOffers/ResOffers";
import ResMenuCategories from "./ResMenuCategories/ResMenuCategories";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const [
    resMenuRaw,
    resMenuCategories,
    resInfo,
    resOffers,
    setResMenuRaw,
    setResMenuCategories,
  ] = useRestaurantMenu(resID);

  if (resMenuRaw.length === 0) {
    return <ShimmerMenu />;
  }

  const btnVegHandler = (e) => {
    if (e.target.checked) {
      let filteredCategories = [];
      resMenuCategories.forEach((category) => {
        let { title, itemCards } = category?.card?.card;
        if (itemCards !== undefined) {
          itemCards = itemCards.filter((item) => item?.card?.info?.isVeg);
          filteredCategories.push({
            card: { card: { title: title, itemCards: itemCards } },
          });
        }
      });
      setResMenuCategories(filteredCategories);
    } else {
      let i = 0;
      if (resMenuRaw?.data?.cards.length === 4) i = 3;
      else i = 2;
      const bothVegNonVegMenu =
        resMenuRaw.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards;
      setResMenuCategories(bothVegNonVegMenu);
    }
  };

  return (
    <div className="my-8 mx-auto px-4 py-0 max-w-[700px] res-menu-wrapper">
      <ResMenuInfo resInfo={resInfo} />
      <ResOffers resInfo={resInfo} resOffers={resOffers} />
      <div className="menu-wrapper">
        <div className="veg-wrapper">
          <label htmlFor="veg-only-chkbox">Veg only</label>
          &nbsp;
          <input
            type="checkbox"
            id="veg-only-chkbox"
            onChange={btnVegHandler}
          />
        </div>

        {resMenuCategories.map((category) => {
          const { title, itemCards } = category?.card?.card;
          return itemCards !== undefined &&
            title !== undefined &&
            itemCards.length !== 0 ? (
            <ResMenuCategories key={title} category={category} />
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
