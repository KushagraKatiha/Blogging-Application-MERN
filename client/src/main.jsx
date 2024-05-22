import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Signin from './Components/Signin.jsx'
import BlogPage from './Components/BlogPage.jsx'
import MyProfile from './Components/MyProfile.jsx'
import MainPage from './MainPage.jsx'
import CreateBlog from './Components/CreateBlog.jsx'
import ViewBlog from './Components/ViewBlog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/blogs' element={<BlogPage/>} />
      <Route path='/blog/:id' element={<ViewBlog/>} />
      <Route path='/profile' element={<MyProfile />} />
      <Route path='/create' element={<CreateBlog/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
