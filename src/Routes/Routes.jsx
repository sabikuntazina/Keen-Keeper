import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts/MainLayouts";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
      {
        index: true,
        Component: HomePage
      }
    ]
  },
]);