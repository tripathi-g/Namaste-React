import { resList } from "/src/utils/mockData";
import ResCard from "/src/components/ResCard/ResCard";
import { useState } from "react";

const Body = () => {
  const [resListLocal, setResListLocal] = useState(resList);
  const [topResFilterStatus, setTopResFilterStatus] = useState(false);

  const filterTopResHandler = () => {
    if (!topResFilterStatus){
      setResListLocal(resListLocal.filter((res) => res.data.avgRating >= 4));
      
      setTopResFilterStatus(true);

    }
    else{ 
      setResListLocal(resList);
      setTopResFilterStatus(false);
    }
  };

  return (
    <div className="body-comp">
      <div className="sub-header">
        <div className="search-wrapper">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>
        <button className={"filter-btn"+ (topResFilterStatus ? " active" : "")} onClick={filterTopResHandler}>
          Top Restaurants
        </button>
      </div>

      <div className="res-card-wrapper">
        {resListLocal.map((restaurant) => {
          return <ResCard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
