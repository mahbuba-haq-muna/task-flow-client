import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home';
import Pending from './Pages/Pending/Pending';
import Ongoing from './Pages/OnGoing/OnGoing';
import Main from './Components/Layout/Main';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Complete from './Pages/Complete/Complete';

const router = createBrowserRouter([
  {
    path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/dashboard',
            element: <Pending></Pending>
        },
        {
            path: '/dashboard/ongoing',
            element: <Ongoing></Ongoing>
        },
        {
            path: '/dashboard/complete',
            element: <Complete></Complete>
        },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
