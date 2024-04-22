import React from "react";
import * as ReactDOM from "react-dom/client";
import LoginPage from "./pages/login";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupPage from "./pages/signup";
import MenuPage from "./pages/Features";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "Menu",
      element: <MenuPage />,
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
