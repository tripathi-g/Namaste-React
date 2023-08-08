const ResMenuInfo = (props) => {
  const {
    name,
    cuisines,
    areaName,
    sla: { lastMileTravelString },
    avgRating,
    totalRatings,
  } = props?.resInfo;

  return (
    <div className="res-info-wrapper">
      <div className="res-info-section1">
        <h1 className="res-name">{name}</h1>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <span className="res-area-name"> {areaName} - </span>
        <span className="res-last-mile">{lastMileTravelString} away</span>
      </div>
      <div className="res-info-section2">
        <div className="rating-wrapper">
          <h2>
            <i className="fa fa-star"></i> {avgRating}
          </h2>
          <p>{totalRatings}+ ratings</p>
        </div>
      </div>
    </div>
  );
};

export default ResMenuInfo;
