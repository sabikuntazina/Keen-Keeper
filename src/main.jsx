import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Routes.jsx";
import FriendDataProviderContext from "./Context/FriendDataProviderContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendDataProviderContext>
      <RouterProvider router={router} />,
    </FriendDataProviderContext>
      <ToastContainer />
  </StrictMode>,
);
