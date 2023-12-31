import ResCard from "/src/components/ResCard/ResCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "/src/utils/constants.js";
import ShimmerBody from "./ShimmerBody";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [resListLocal, setResListLocal] = useState([]);
  const [topResFilterStatus, setTopResFilterStatus] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filterTopResHandler = () => {
    if (!topResFilterStatus) {
      setResListLocal(resList.filter((res) => res.info.avgRating >= 4));
      setTopResFilterStatus(true);
    } else {
      setResListLocal(resList);
      setTopResFilterStatus(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    console.log(json);
    if (
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants != undefined
    ) {
      updateResList(3, json);
    } else {
      updateResList(5, json);
    }
  };

  const updateResList = (i, json) => {
    setResList(
      json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResListLocal(
      json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const searchFilter = () => {
    setResListLocal(
      resList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  return resListLocal.length === 0 ? (
    <ShimmerBody />
  ) : (
    <div className="body-comp">
      <div className="sub-header">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <i
            className="fa fa-search"
            onClick={() => {
              searchFilter();
            }}
          ></i>
        </div>
        <button
          className={"filter-btn" + (topResFilterStatus ? " active" : "")}
          onClick={filterTopResHandler}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-card-wrapper">
        {resListLocal.map((restaurant) => {
          return <ResCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
