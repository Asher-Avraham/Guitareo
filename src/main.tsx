import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Acoustic, AcousticGuitar, Electric, Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/acoustic",
    element: <Acoustic />,
  },
  {
    path: "/acoustic/:guitarId",
    element: <AcousticGuitar />,
  },
  {
    path: "/electric",
    element: <Electric />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="page">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
