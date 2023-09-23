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
import AllDetailsPost from "./Componend/Posts/AllDetailsPost";
import Signup from "./Componend/Signup/Signup";
import AuthContext from "./Contexts/AuthContext";
import Login from "./Componend/Login/Login";

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
        path: "/media",
        element: <AllDetailsPost />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={router}></RouterProvider>
  </AuthContext>
);
