import "./Body.css";
import ResCard from "/src/components/ResCard/ResCard";
import { useState, useEffect } from "react";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom";
import useRestaurant from "../../utils/useRestaurants";
import { useOnlineStatus, OfflineComponent } from "../../utils/useOnlineStatus";

const Body = () => {
  const [resList, resListLocal, setResListLocal] = useRestaurant();
  const [topResFilterStatus, setTopResFilterStatus] = useState(false);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const filterTopResHandler = () => {
    if (!topResFilterStatus) {
      setResListLocal(resList.filter((res) => res.info.avgRating >= 4));
      setTopResFilterStatus(true);
    } else {
      setResListLocal(resList);
      setTopResFilterStatus(false);
    }
  };

  const searchFilter = () => {
    setResListLocal(
      resList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

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
