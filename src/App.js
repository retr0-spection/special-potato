import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import * as ReactDOM from "react-dom/client";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ProductsPage from "./GetProducts/Products";
import ShowProduct from "./pages/ShowProduct";
import Cart from "./pages/Carting";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Stock from "./pages/Stock";
import Category from "./GetProducts/category";

import Search from "./pages/search";
import Permissions from "./pages/permissions";
import StockEdit from "./pages/Admin/Stock/stockEdit";
import StockAdd from "./pages/Admin/Stock/stockAdd";
import UserEdit from "./pages/Admin/User/userEdit";
import OrderComponent from "./pages/Admin/Order";
import OrderListComponent from "./pages/Order";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductsPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/category/:category",
      element: <Category />,
    },
    {
      path: "/search/:query",
      element: <Search />,
    },
    {
      path: "/product/:id",
      element: <ShowProduct />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/order",
      element: <OrderListComponent />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/admin/checkout",
      element: <Checkout />,
    },
    {
      path: "/cart/checkout",
      element: <Checkout />,
    },
    {
      path: "/admin/management",
      element: <Permissions />,
    },
    {
      path: "/admin/order",
      element: <OrderComponent />,
    },
    {
      path: "/admin/user/edit/:id",
      element: <UserEdit />,
    },

    {
      path: "/admin/stock",
      element: <Stock />,
    },
    {
      path: "/admin/stock/edit/:id",
      element: <StockEdit />,
    },
    {
      path: "/admin/stock/add/",
      element: <StockAdd />,
    },
   
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <>
      <GoogleOAuthProvider clientId="957083239350-vbc4tbirup8oi43nq8pnc2o1gvamqu92.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
