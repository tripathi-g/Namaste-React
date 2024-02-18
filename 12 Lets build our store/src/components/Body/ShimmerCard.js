const ShimmerCard = (props) => {
  return (
    <div className="w-[250px] h-auto p-4 flex flex-col bg-stone-200 mt-0 mr-5 pb-12 ml-5 shimmer-card">
      <div className="w-full h-[150px] bg-stone-300 shimmer-card-img"></div>
      <div className="w-full h-8 my-4 mx-0 bg-stone-300 shimmer-card-name"></div>
      <div className="w-[30%] h-4 bg-stone-300 shimmer-card-rating"></div>
      <div className="w-full h-12 mt-4 bg-stone-300 shimmer-card-cusine"></div>
    </div>
  );
};

export default ShimmerCard;
