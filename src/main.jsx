import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./component/AppliedJobs/AppliedJobs";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Home from "./component/Home/Home";
import JobDetails from "./component/JobDetails/JobDetails";
import Root from "./component/Root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/job/:id",
        loader: () => fetch("../jobs.json"), //do not load all data. load only what you need
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
