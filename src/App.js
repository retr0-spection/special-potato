import React from 'react';
import * as ReactDOM from "react-dom/client";
import LoginPage from './pages/login';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
}

export default App;
