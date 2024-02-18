import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Error from "./src/components/Error/Error";
import RestaurantMenu from "./src/components/RerstaurantMenu/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import userContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart/Cart";

const About = lazy(() => import("./src/components/About/About"));
const Footer = lazy(() => import("./src/components/Footer/Footer"));
const Contact = lazy(() => import("./src/components/Contact/Contact"));

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

const ResLayout = () => {
  const [userName, setUserName] = useState("Default Name");

  useEffect(() => {
    setUserName("Shantanu");
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{ userName: userName, setUserName: setUserName }}
      >
        <div className="min-h-screen relative">
          <Header />
          <Outlet />
          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </userContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

rootElement.render(<RouterProvider router={appRouter} />);
