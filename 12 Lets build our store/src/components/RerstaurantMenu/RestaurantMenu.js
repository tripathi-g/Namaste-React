import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";
import { useEffect, useState } from "react";
import ResMenuInfo from "./ResMenuInfo/ResMenuInfo";
import ResOffers from "./ResOffers/ResOffers";
import ResMenuCategories from "./ResMenuCategories/ResMenuCategories";
const RestaurantMenu = () => {
  const { resID } = useParams();
  const [resMenuCategories, setResMenuCategories] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [resOffers, setResOffers] = useState([]);
  const [resMenuRaw, setResMenuRaw] = useRestaurantMenu(resID);
  const [showCatIndex, setShowCatIndex] = useState(0);

  useEffect(() => {
    if (resMenuRaw) {
      console.log(resMenuRaw);

      let menuIndex = 0;
      let infoIndex = 0;
      let offerIndex = 0;
      if (resMenuRaw?.data?.cards.length === 5) {
        menuIndex = 4;
        infoIndex = 2;
        offerIndex = 3;
      } else {
        menuIndex = 2;
        infoIndex = 0;
        offerIndex = 1;
      }
      console.log(
        "Menu Index",
        menuIndex,
        "Info Index",
        infoIndex,
        "Offer Index",
        offerIndex
      );
      setResInfo(resMenuRaw?.data?.cards[infoIndex]?.card?.card?.info);
      setResOffers(
        resMenuRaw?.data?.cards[offerIndex]?.card?.card?.gridElements
          ?.infoWithStyle?.offers
      );
      let categories =
        resMenuRaw?.data?.cards[menuIndex]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards;

      categories = categories.filter((category) => {
        const { title, itemCards } = category?.card?.card;
        if (
          itemCards !== undefined &&
          title !== undefined &&
          itemCards.length !== 0
        )
          return category;
      });
      setResMenuCategories(categories);
    }
  }, [resMenuRaw]);

  if (
    !resMenuRaw ||
    resOffers.length === 0 ||
    resInfo.length === 0 ||
    resMenuCategories.length === 0
  ) {
    return <ShimmerMenu />;
  }

  // console.log(resMenuRaw, resOffers, resInfo, resMenuCategories);

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
      if (resMenuRaw?.data?.cards.length === 6) {
        i = 5;
      } else {
        i = 2;
      }

      const bothVegNonVegMenu = resMenuRaw?.data?.cards[
        i
      ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
        const { title, itemCards } = category?.card?.card;
        if (
          itemCards !== undefined &&
          title !== undefined &&
          itemCards.length !== 0
        )
          return category;
      });
      setResMenuCategories(bothVegNonVegMenu);
    }
  };
  // console.log("categories: ", resMenuCategories);
  return (
    <div className="mt-8 mx-auto px-4 pb-10 max-w-[700px] res-menu-wrapper">
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

        {resMenuCategories.map((category, index) => {
          const { title } = category?.card?.card;
          return (
            <ResMenuCategories
              key={title}
              category={category}
              showCatItems={index === showCatIndex}
              setShowCatIndex={setShowCatIndex}
              catIndex={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
