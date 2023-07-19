import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";


const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

const ResLayout = () => {
  return (
    <div className="res-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

rootElement.render(<ResLayout />);
