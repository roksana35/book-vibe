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
import Read from './Components/Read/Read.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Contact from './Components/Contact/Contact.jsx';
import Category from './Components/Category/Category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('./cards.json')

      },
      {
        path:"/listedbooks",
        element:<Listbook></Listbook>,
        children:[
          {
            index:true,
            element:<Read></Read>
          },
          {
            path:"wishlist",
            element:<Wishlist></Wishlist>
          }
        ]
      },
      {
        path:"/pagesread",
        element:<Readpage></Readpage>
      },
      {
        path:"/category",
        element:<Category></Category>,
        
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },

      {
        path:"/card/:bookId",
        element:<Bookdeatils></Bookdeatils>,
        loader:()=>fetch('./cards.json')
      }

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer></ToastContainer>
     
  </React.StrictMode>,
)
