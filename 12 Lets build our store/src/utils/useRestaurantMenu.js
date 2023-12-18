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
    let menuIndex = 0;
    let infoIndex = 0;
    let offerIndex = 0;
    if (json?.data?.cards.length === 6) {
      menuIndex = 5;
      infoIndex = 2;
      offerIndex = 3;
    } else {
      menuIndex = 2;
      infoIndex = 0;
      offerIndex = 1;
    }
    console.log("Restaurant data: ", json);
    setResMenuRaw(json);
    setResInfo(json?.data?.cards[infoIndex]?.card?.card?.info);
    setResOffers(
      json?.data?.cards[offerIndex]?.card?.card?.gridElements?.infoWithStyle
        ?.offers
    );

    setResMenuCategories(
      json?.data?.cards[menuIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards
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
