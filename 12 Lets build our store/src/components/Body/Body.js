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

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  useEffect(() => {
    setResListLocal(
      resList.filter(
        (res) =>
          res.info.name
            .toLowerCase()
            .includes(searchText.toLowerCase().trim()) ||
          res.info.cuisines
            .join(",")
            .toLowerCase()
            .includes(searchText.toLowerCase().trim())
      )
    );
  }, [searchText]);

  return resList.length === 0 ? (
    <ShimmerBody />
  ) : (
    <div className="max-w-7xl my-0 mx-auto body-comp">
      <div className="flex justify-center items-center gap-2 mt-8 mb-4 md:my-12">
        <div className="flex justify-center items-center relative flex-wrap w-1/2">
          <input
            className="w-full p-3 rounded-md border border-solid border-stone-300 text-xs placeholder:text-[0.6rem] md:placeholder:text-xs"
            type="text"
            placeholder="Search Restaurants or Dishes"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <i className="fa fa-search absolute right-4 md:right-8 z-10 text-stone-400 cursor-pointer"></i>
        </div>
        <button
          className={
            "p-3 cursor-pointer font-medium text-xs border border-stone-700 rounded-md filter-btn" +
            (topResFilterStatus ? " active" : "")
          }
          onClick={filterTopResHandler}
        >
          Top Rated
        </button>
      </div>
      <div className="flex flex-wrap justify-center res-card-wrapper pb-16">
        {resListLocal.length !== 0 ? (
          resListLocal.map((restaurant) => {
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
          })
        ) : (
          <p className="p-8">
            No restaurant was found with name '{searchText}'
          </p>
        )}
      </div>
    </div>
  );
  // return <ShimmerBody />;
};

export default Body;
