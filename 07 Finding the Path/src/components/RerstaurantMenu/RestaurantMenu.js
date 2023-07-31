import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RES_MENU } from "../../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenuData();
  }, []);

  const { resID } = useParams();

  const fetchMenuData = async () => {
    const data = await fetch(SWIGGY_RES_MENU + resID);
    console.log(await data.json());
  };

  return (
    <div className="res-menu_wrapper">
      <h1>Restaurant Menu</h1>
    </div>
  );
};

export default RestaurantMenu;
