import "./RestaurantMenu.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RES_MENU } from "../../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import ResMenuInfo from "./ResMenuInfo/ResMenuInfo";
import ResOffers from "./ResOffers/ResOffers";
import ResMenuCategories from "./ResMenuCategories/ResMenuCategories";

const RestaurantMenu = () => {
  const [resMenuRaw, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const { resID } = useParams();

  const fetchMenuData = async () => {
    const data = await fetch(SWIGGY_RES_MENU + resID);
    setResMenu(await data.json());
  };

  console.log(resMenuRaw);

  if (resMenuRaw.length === 0) {
    return <ShimmerMenu />;
  }

  let arrCnt = 0;

  if (resMenuRaw?.data?.cards.length === 4) arrCnt = 3;
  else arrCnt = 2;

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
      [arrCnt]: {
        groupedCard: {
          cardGroupMap: {
            REGULAR: { cards: resMenuCategories },
          },
        },
      },
    },
  } = resMenuRaw?.data;

  // console.log(resInfo);
  // console.log(resOffers);
  // console.log(resMenuCategories);

  return (
    <div className="res-menu-wrapper">
      <ResMenuInfo resInfo={resInfo} />
      <ResOffers resInfo={resInfo} resOffers={resOffers} />
      <div className="menu-wrapper">
        {resMenuCategories.map((category) => {
          const { title, itemCards } = category?.card?.card;
          return itemCards !== undefined && title !== undefined ? (
            <ResMenuCategories key={title} category={category} />
          ) : (
            console.log("not called")
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
