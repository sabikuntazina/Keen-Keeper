import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts/MainLayouts";
import HomePage from "../Pages/HomePage/HomePage";
import States from "../Pages/States/States";
import Friends from "../Components/Friends/Friends";
import FriendDetail from "../Components/Friends/FriendDetail/FriendDetail";
import TimeLine from "../Pages/TimeLine/TimeLine";


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
        Component: TimeLine ,
      },
      {
        path:'/states',
        Component:States,
      },
      {
        path: 'friends',
        Component: Friends,
        loader:()=> fetch('/data.json'),
      },
      {
        path: 'friends/:id',
        Component: FriendDetail,
        loader: ()=>fetch('/data.json')
      }
    ]
  },
]);