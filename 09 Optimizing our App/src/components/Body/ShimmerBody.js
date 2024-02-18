import ShimmerCard from "./ShimmerCard";

const ShimmerBody = () => {
  return (
    <div className="shimmer-comp">
      <div className="sub-header">
        <div className="shimmer-search-wrapper">
          <div className="input"></div>
        </div>
        <div className="shimmer-head-btn"></div>
      </div>
      <div className="shimmer-card-wrapper">
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
