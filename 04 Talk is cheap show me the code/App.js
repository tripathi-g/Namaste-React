import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/khana.png";

// import React from "react";
// import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Categories</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

const ResCard = () => {
  return (
    <div className="res-card">
      <div className="res-poster">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ohddcm29gcijztfdpjme"
          alt="Biryani Image"
        />
      </div>
      <div className="res-details">
        <h3 className="res-name">The Biryani House</h3>
        <p className="cusine">Beverage, Ice Cream</p>
        <h4 className="rating">Rating 3.5</h4>
        <h4 className="duration">32 MINS</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-comp">
      <div className="search-wrapper">
        <input type="text" placeholder="Search" />
        <i class="fa fa-search"></i>
      </div>
      <div className="res-card-wrapper">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const Footer = () => {
  return <h1>This is Footer</h1>;
};

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
