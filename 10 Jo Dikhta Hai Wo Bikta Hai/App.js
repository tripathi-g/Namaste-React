import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Error from "./src/components/Error/Error";

import RestaurantMenu from "./src/components/RerstaurantMenu/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const About = lazy(() => import("./src/components/About/About"));
const Footer = lazy(() => import("./src/components/Footer/Footer"));
const Contact = lazy(() => import("./src/components/Contact/Contact"));

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

const ResLayout = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Outlet />
      <Suspense>
        <Footer />
      </Suspense>
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
        element: (
          <Suspense>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
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
