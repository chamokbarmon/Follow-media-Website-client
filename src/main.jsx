import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Componend/Home/Home";
import VideoShowCard from "./Componend/VideoShowCard/VideoShowCard";
import ServicesCard from "./Componend/ServiceCard/ServicesCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video",
        element: <VideoShowCard />,
      },
      {
        path:'/media'
     
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
