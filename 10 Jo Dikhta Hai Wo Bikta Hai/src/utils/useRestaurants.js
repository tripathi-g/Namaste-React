import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "./constants.js";

const useRestaurant = () => {
  const [resList, setResList] = useState([]);
  const [resListLocal, setResListLocal] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("iside useeffect");
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    console.log(json);
    json?.data?.cards.map((card) => {
      if (
        card.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
      ) {
        setResList(card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResListLocal(
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        console.log(resList, resListLocal);
      }
    });
  };

  return [resList, resListLocal, setResListLocal];
};

export default useRestaurant;
