import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RestaurantDetails from './Components/RestaurantDetails.jsx';
import ErrorElement from './Components/ErrorElement.jsx';
import Login from './Components/Login.jsx';
import { lazy } from 'react';
import { Suspense } from 'react';
const Cart =lazy(()=> import( './Components/Cart.jsx'));
const Body =lazy(()=> import('./Components/Body.jsx'));
const  Search =lazy(()=> import('./Components/Search.jsx'));
const Help =lazy(()=> import( './Components/Help.jsx'));
const Offers =lazy(()=> import('./Components/Offers.jsx'));
 const approuter = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:'search',
        element:<Suspense fallback ={<h1>Loading....</h1>
        }><Search/></Suspense>
      },
      {
        path:'/',
        element:<Suspense fallback={<h1>Loading...</h1>}><Body/></Suspense>
      },
      {
        path:'Help',
        element:<Suspense fallback ={<h1>Loading...</h1>}><Help/> </Suspense>
      },
      {
        path:'offers',
        element:<Suspense fallback={<h1>Loading...</h1>}><Offers/></Suspense>
      },
      {
       path:"cart",
       element:<Suspense fallback={<h1>Loading...</h1>}><Cart/> </Suspense>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"restaurant/:id",
        element:<RestaurantDetails/>
      }
    ],
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter} />
  </StrictMode>,
)
