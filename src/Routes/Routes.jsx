import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts/MainLayouts";
import HomePage from "../Pages/HomePage/HomePage";
import TImeLine from "../Pages/TimeLine/TImeLine";
import States from "../Pages/States/States";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path:'timeline',
        Component: TImeLine,
      },
      {
        path:'/states',
        Component:States,
      }
    ]
  },
]);