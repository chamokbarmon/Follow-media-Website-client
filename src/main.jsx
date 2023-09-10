import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Componend/Home/Home';
import VideoShowCard from './Componend/VideoShowCard/VideoShowCard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/video',
        element:<VideoShowCard/>
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
  
  </RouterProvider>

)
