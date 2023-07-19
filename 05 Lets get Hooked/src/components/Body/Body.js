import { resList } from "/src/utils/mockData";
import ResCard from "/src/components/ResCard/ResCard";

const Body = () => {
    return (
      <div className="body-comp">
        <div className="search-wrapper">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>
        <div className="res-card-wrapper">
         {resList.map(restaurant => {
          return (
            <ResCard key={restaurant.data.id} resData={restaurant}/>
          )
         })}
        </div>
      </div>
    );
  };
  
  export default Body;