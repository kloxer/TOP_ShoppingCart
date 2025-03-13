import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Nav from './components/Nav'
import WholePage from './components/WholePage';
import ShoppingView from './components/Shopping';
import { element } from 'prop-types';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<WholePage/>,
      
    },
    { 
      path:"/:name",
      element:<WholePage />
    }

  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
