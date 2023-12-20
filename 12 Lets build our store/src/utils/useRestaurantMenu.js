import { useEffect, useState } from "react";
import { SWIGGY_RES_MENU } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { addNewRestaurantMenu } from "./restaurantSlice";

const useRestaurantMenu = (resID) => {
  const menu = useSelector((store) => store.restaurants.menus[resID]);
  const dispatch = useDispatch();
  const [resMenuRaw, setResMenuRaw] = useState(menu);

  useEffect(() => {
    if (!resMenuRaw) fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(SWIGGY_RES_MENU + resID);
    const json = await data.json();
    dispatch(addNewRestaurantMenu({ id: resID, data: json }));
    setResMenuRaw(json);
  };

  return [resMenuRaw, setResMenuRaw];
};
export default useRestaurantMenu;
