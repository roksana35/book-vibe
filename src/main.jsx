import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Errorpage from './Components/Errorpage/Errorpage.jsx';
import Listbook from './Components/Listbook/Listbook.jsx';
import Readpage from './Components/Readpage/Readpage.jsx';
import Bookdeatils from './Components/Bookdetails/Bookdeatils.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/public/cards.json')

      },
      {
        path:"/listedbooks",
        element:<Listbook></Listbook>
      },
      {
        path:"/pagesread",
        element:<Readpage></Readpage>
      },
      {
        path:"/card/:bookId",
        element:<Bookdeatils></Bookdeatils>,
        loader:()=>fetch('../public/cards.json')
      }

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
