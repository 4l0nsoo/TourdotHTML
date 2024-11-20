import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createHashRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Blog from './components/Tblog.jsx'
import Error from './components/Error.jsx'
import Login from './components/loginForm.jsx'
import SignUp from './components/SignUpForm.jsx'
import CreatePost from './components/CreatePost.jsx';
import {AuthProvider} from './components/hooks/UserContext'
import './index.css'

const router = createHashRouter([
    {path: "/", element: <App/>, errorElement:<Error/>},
    {path: '/blog', element: <Blog/>, errorElement:<Error/>},
    {path: '/login', element: <Login/>, errorElement: <Error/>},
    {path: '/signup', element: <SignUp/>, errorElement: <Error/>},
    {path: '/create-post', element: <CreatePost/>, errorElement: <Error/>},
]);


createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    
      <RouterProvider router={router}/>

  </StrictMode>
      </AuthProvider>
)
