import "./RestaurantMenu.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RES_MENU } from "../../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import ResMenuInfo from "./ResMenuInfo/ResMenuInfo";
import ResOffers from "./ResOffers/ResOffers";
import ResMenuCategories from "./ResMenuCategories/ResMenuCategories";

const RestaurantMenu = () => {
  const [resMenuRaw, setResMenuRaw] = useState([]);
  const [resMenuCategories, setResMenuCategories] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const { resID } = useParams();

  const fetchMenuData = async () => {
    const data = await fetch(SWIGGY_RES_MENU + resID);
    const json = await data.json();
    setResMenuRaw(json);
    let arrCnt = 0;
    if (json?.data?.cards.length === 4) arrCnt = 3;
    else arrCnt = 2;
    setResMenuCategories(
      json?.data?.cards[arrCnt]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  if (resMenuRaw.length === 0) {
    return <ShimmerMenu />;
  }

  const {
    cards: {
      [0]: {
        card: {
          card: { info: resInfo },
        },
      },
      [1]: {
        card: {
          card: {
            gridElements: {
              infoWithStyle: { offers: resOffers },
            },
          },
        },
      },
    },
  } = resMenuRaw?.data;

  // console.log(resInfo);
  // console.log(resOffers);
  // console.log(resMenuRaw);
  // console.log(resMenuCategories);

  const btnVegHandler = (e) => {
    console.log("resmenu cat before filter", resMenuCategories);
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
      console.log("inside else");
      let i = 0;
      if (resMenuRaw?.data?.cards.length === 4) i = 3;
      else i = 2;
      const bothVegNonVegMenu =
        resMenuRaw.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards;
      setResMenuCategories(bothVegNonVegMenu);
    }
  };

  return (
    <div className="res-menu-wrapper">
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
          return itemCards !== undefined && title !== undefined ? (
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
