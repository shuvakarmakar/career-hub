import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';
import Error from './components/Error/Error';
import cartJobLoader from './components/loaders/cartJobLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/jobinfo.json')
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/jobinfo.json`)
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/appliedjob",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobinfo.json')
      },
      {
        path: "/viewdetails",
        element: <ViewDetails></ViewDetails>
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
