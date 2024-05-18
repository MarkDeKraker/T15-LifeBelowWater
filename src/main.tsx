import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./Test.tsx";
import Plastic_1 from "./PlasticContentPage_1.tsx"
import Plastic_2 from "./PlasticContentPage_2.tsx"
import Plastic_3 from "./PlasticContentPage_3.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/plastic/1",
    element: <Plastic_1 />,
  },
  {
    path: "/plastic/2",
    element: <Plastic_2 />,
  },
  {
    path: "/plastic/3",
    element: <Plastic_3/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
