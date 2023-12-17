import { useEffect, useState } from "react";
import { SWIGGY_RES_MENU } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resMenuRaw, setResMenuRaw] = useState([]);
  const [resMenuCategories, setResMenuCategories] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [resOffers, setResOffers] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(SWIGGY_RES_MENU + resID);
    const json = await data.json();

    setResMenuRaw(json);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setResOffers(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    let arrCnt = 0;
    if (json?.data?.cards.length === 4) arrCnt = 3;
    else arrCnt = 2;
    setResMenuCategories(
      json?.data?.cards[arrCnt]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  return [
    resMenuRaw,
    resMenuCategories,
    resInfo,
    resOffers,
    setResMenuRaw,
    setResMenuCategories,
  ];
};
export default useRestaurantMenu;
