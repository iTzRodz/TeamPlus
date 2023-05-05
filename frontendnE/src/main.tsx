import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoginPage from './pages/LoginPage.tsx';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <RouterProvider router={router} />

    {/* <App /> */}
  </React.StrictMode>,
)
