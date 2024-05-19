import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BlogContextProvider } from './context/blogContext'
import NavigationBar from './Components/NavigationBar'

function MainPage() {
  const [visiblity, setVisiblity] = useState(false)

  const handleVisiblity = () => {
    setVisiblity(!visiblity)
  }

  return (
    <BlogContextProvider value={{visiblity, handleVisiblity}}>
      <Outlet />
    </BlogContextProvider>
  )
}

export default MainPage