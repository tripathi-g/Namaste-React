import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "./constants.js";

const useRestaurant = () => {
  const [resList, setResList] = useState([]);
  const [resListLocal, setResListLocal] = useState([]);

  useEffect(() => {
    if (resList.length === 0 || resListLocal === 0) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    json?.data?.cards.map((card) => {
      if (
        card.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
      ) {
        setResList(card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResListLocal(
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    });
  };

  return [resList, resListLocal, setResListLocal];
};

export default useRestaurant;
