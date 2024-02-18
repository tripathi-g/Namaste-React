import { useState } from "react";

const Info = (props) => {
  const { name, location, github } = props.details;
  const [count] = useState(0);
  return (
    <div className="aboutus-info-wrapper">
      <h2>Info - (Functional Component)</h2>
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Github: {github}</h4>
      <h5>Count : {count}</h5>
    </div>
  );
};

export default Info;
