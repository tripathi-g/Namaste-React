import "./Body.css";
import ResCard, { withPromoted } from "/src/components/ResCard/ResCard";
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
  const ResCardPromoted = withPromoted(ResCard);

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
    <div className="max-w-7xl my-0 mx-auto body-comp">
      <div className="flex justify-center items-center flex-wrap sub-header">
        <div className="flex justify-center items-center relative flex-wrap w-1/2 my-12 mx-4 search-wrapper">
          <input
            className="w-full p-3 rounded-md border border-solid border-stone-300 text-xs"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <i
            className="fa fa-search absolute right-8 z-10 text-stone-600 cursor-pointer"
            onClick={() => {
              searchFilter();
            }}
          ></i>
        </div>
        <button
          className={
            "h-auto p-3 cursor-pointer font-bold text-xs border border-stone-700 filter-btn" +
            (topResFilterStatus ? " active" : "")
          }
          onClick={filterTopResHandler}
        >
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center res-card-wrapper">
        {resListLocal.map((restaurant) => {
          return (
            <Link
              className="text-black cursor-pointer no-underline res-card-link"
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <ResCardPromoted resData={restaurant} />
              ) : (
                <ResCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
  // return <ShimmerBody />;
};

export default Body;
