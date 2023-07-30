import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";
import About from "./src/components/About/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ResLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

rootElement.render(<RouterProvider router={appRouter} />);
