import React from 'react';
import * as ReactDOM from "react-dom/client";
import LoginPage from './pages/login';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignupPage from './pages/signup';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/login",
    element:<LoginPage />,
  },
  {
    path: "/signup",
    element:<SignupPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
}

export default App;
