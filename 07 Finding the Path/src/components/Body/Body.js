import "./Body.css";
import ResCard from "/src/components/ResCard/ResCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "/src/utils/constants.js";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom";

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
    json?.data?.cards.map((card, i) => {
      card.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
        ? updateResList(i, card)
        : "";
    });
  };

  const updateResList = (i, card) => {
    setResList(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResListLocal(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
          return (
            <Link
              className="res-card-link"
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <ResCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
  // return <ShimmerBody />;
};

export default Body;
