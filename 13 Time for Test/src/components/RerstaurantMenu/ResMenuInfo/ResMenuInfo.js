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
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md shadow-stone-200 res-info-wrapper">
      <div className="p-4 w-2/3 res-info-section1">
        <h1 className="font-bold text-lg res-name">{name}</h1>
        <p className="mb-0 mt-4 font-medium text-stone-700 text-xs res-cuisines">
          {cuisines.join(", ")}
        </p>
        <span className="font-medium text-stone-700 text-xs res-area-name">
          {" "}
          {areaName} -{" "}
        </span>
        <span className="font-medium text-stone-700 text-xs res-last-mile">
          {lastMileTravelString} away
        </span>
      </div>
      <div className="w-1/3 res-info-section2">
        <div className="p-4 flex flex-col justify-center items-center border border-stone-300 rounded-lg rating-wrapper">
          <h2 className="text-green-600 text-sm font-bold border-b border-green-600 m-0 text-center pb-2 w-full">
            <i className="fa fa-star"></i> {avgRating}
          </h2>
          <p className="m-0 pt-2 text-stone-500 font-bold text-[0.6rem]">
            {totalRatings}+ ratings
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResMenuInfo;
