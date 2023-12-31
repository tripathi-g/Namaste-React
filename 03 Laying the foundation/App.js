import React from "react";
import ReactDOM from "react-dom/client";

//react element

//JSX (transpiled before it reached the JS) - Parcel - Babel

//JSX code =>  React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
  <div>
    <h1 className="heading" tabIndex="5">
      Namaste React in JSX !
    </h1>
    <p>Testing</p>
  </div>
);

const HeadingComponent = () => {
  return (
    <>
      <h1 className="heading" tabIndex="5">
        Namaste React Functional Component !
      </h1>
      <p>Testing</p>
      {console.log(jsxHeading)}
    </>
  );
};



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent/>);
