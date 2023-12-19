import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "./constants.js";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurants } from "./restaurantSlice";

const useRestaurant = () => {
  const restaurants = useSelector((store) => store.restaurants.items);
  const dispatch = useDispatch();
  console.log(restaurants);
  const [resList, setResList] = useState(restaurants);
  const [resListLocal, setResListLocal] = useState(restaurants);

  useEffect(() => {
    if (resList.length === 0 || resListLocal === 0) {
      console.log("Fetching Data: ....");
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    json?.data?.cards.map((card) => {
      const restaurants =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants != undefined) {
        console.log("Data fetch complete: ", restaurants);
        console.log("Set Data");
        dispatch(setRestaurants(restaurants));
        setResList(restaurants);
        setResListLocal(restaurants);
      }
    });
  };

  return [resList, resListLocal, setResListLocal];
};

export default useRestaurant;
