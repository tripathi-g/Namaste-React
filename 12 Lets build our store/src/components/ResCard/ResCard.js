import "./ResCard.css";
const ResCard = (props) => {
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    sla: { deliveryTime },
  } = props?.resData?.info;
  return (
    <div className="mt-0 mr-5 mb-10 ml-5 p-4 w-[250px] flex flex-col border border-stone-50 cursor-pointer rounded-lg hover:shadow-lg res-card">
      <div className="res-poster">
        <img
          className="w-full h-[150px] object-cover rounded-md"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            cloudinaryImageId
          }
          alt="Biryani Image"
        />
      </div>
      <div className="res-details">
        <h3 className="mt-4 mr-0 mb-0 ml-0 font-semibold res-name">{name}</h3>
        <div className="flex justify-between items-center mb-1 card-footer">
          {avgRating >= 4 ? (
            <h4 className="m-0 font-normal inline-block text-[0.7rem] text-left px-1 py-[1px] text-white bg-green-500 rating rating-green">
              <i className="fa fa-star"></i> {avgRating}
            </h4>
          ) : (
            <h4 className="m-0 font-normal inline-block text-[0.7rem] text-left px-1 py-[1px] text-white bg-orange-500 rating rating-orange">
              <i className="fa fa-star"></i> {avgRating}
            </h4>
          )}
          <h4 className="m-0 font-normal inline-block text-stone-700 text-[0.7rem] duration">
            {costForTwo}{" "}
          </h4>
          <h4 className="m-0 font-normal inline-block text-stone-700 text-[0.7rem] duration">
            {deliveryTime} MINS
          </h4>
        </div>
        <p className="m-0 text-stone-700 text-[0.7rem] cusine">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export const withPromoted = (ResCard) => {
  return (props) => {
    return (
      <div className="relative res-card-promoted">
        <label className="absolute left-7 top-4 p-2 rounded-sm bg-black text-white text-[0.6rem]">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
