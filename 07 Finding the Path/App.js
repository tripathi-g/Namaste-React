import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import Error from "./src/components/Error/Error";
import RestaurantMenu from "./src/components/RerstaurantMenu/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

const ResLayout = () => {
  return (
    <div className="res-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ResLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

rootElement.render(<RouterProvider router={appRouter} />);
