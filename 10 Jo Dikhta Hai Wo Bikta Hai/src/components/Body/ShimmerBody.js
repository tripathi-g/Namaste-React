import ShimmerCard from "./ShimmerCard";

const ShimmerBody = () => {
  return (
    <div className="my-0 mx-auto py-0 px-8 max-w-[1400px]">
      <div className="flex items-center justify-center sub-header">
        <div className="flex justify-center items-center relative w-1/2 mx-4 my-12 shimmer-search-wrapper">
          <div className="w-full h-12 bg-stone-200 input"></div>
        </div>
        <div className="w-[10%] h-12 bg-stone-200 shimmer-head-btn"></div>
      </div>
      <div className="flex flex-wrap justify-center shimmer-card-wrapper">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default ShimmerBody;
