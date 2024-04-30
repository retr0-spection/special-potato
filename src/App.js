import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import * as ReactDOM from "react-dom/client";
import LoginPage from "./pages/login";
import Home from "./pages/Home";
import SignupPage from "./pages/signup";
import ProductsPage from "./pages/Products";
import MenPage from "./pages/Men";
import WomanPage from "./pages/Woman";
import KidsPage from "./pages/Kids";
import ShowProduct from "./pages/ShowProduct"; 
import Cart from "./pages/Cart";

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
      path: "/Men",
      element: <MenPage />,
    },
    {
      path: "/Woman",
      element: <WomanPage />,
    },
    {
      path: "/Kids",
      element: <KidsPage />,
    },
    {
      path: "/:id", 
      element: <ShowProduct />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },

  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId="957083239350-vbc4tbirup8oi43nq8pnc2o1gvamqu92.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}

export default App;
