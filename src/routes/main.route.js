import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/main.layout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: "About Page",
      },
      {
        path: "/contact",
        element: "Contact Page",
      },
    ],
  },
  {
    path: "*",
    element: "Error Page",
  },
]);
