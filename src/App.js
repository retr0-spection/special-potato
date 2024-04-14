import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import * as ReactDOM from "react-dom/client";
import LoginPage from './pages/login';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element:<div />
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
