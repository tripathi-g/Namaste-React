const ResCard = (props) => {
    const { name,avgRating,cuisines,costForTwoString,deliveryTime,cloudinaryImageId } = props.resData.data;
  
    return (
      <div className="res-card">
        <div className="res-poster">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
              cloudinaryImageId
            }
            alt="Biryani Image"
          />
        </div>
        <div className="res-details">
          <h3 className="res-name">{name}</h3>
          <p className="cusine">{cuisines.join(", ")}</p>
          <div className="card-footer">
            {console.log(avgRating)}
            { avgRating >= 4 ? <h4 className="rating rating-green"><i className="fa fa-star"></i> {avgRating}</h4> : <h4 className="rating rating-orange"><i className="fa fa-star"></i> {avgRating}</h4>}
            
            <h4 className="duration">{deliveryTime} MINS</h4>
            <h4 className="cost-for-two">{costForTwoString}</h4>
          </div>
        </div>
      </div>
    );
  };


  export default ResCard;