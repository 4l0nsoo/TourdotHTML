import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Blog from './components/Tblog.jsx'
import Error from './components/Error.jsx'
import './index.css'

const router = createBrowserRouter([
    {path: "/", element: <App/>, errorElement:<Error/>},
    {path: '/blog', element: <Blog/>, errorElement:<Error/>},
    {errorElement: <div>ERROR 404 / / / NOT FOUND</div>},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
