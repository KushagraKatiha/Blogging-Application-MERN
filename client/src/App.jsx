import React from 'react'
import Signup from './Components/Signup'
import './App.css'
import Signin from './Components/Signin'
import BlogPage from './Components/BlogPage'
import CreateBlog from './Components/CreateBlog'
import MyProfile from './Components/MyProfile'

function App() {

  return (
    <>
    <div className=' py-10 px-44 bg-gunmetal w-full h-full overflow-auto flex justify-center'>

          {/* left part */}
          <div className='px-5 py-5 w-2/5 text-white h-full flex flex-col shadow-3xl gap-10 justify-between items-start bg-darkcyan'>
            <div>
              <h1 className='text-xl font-extrabold'>
                Read
              </h1>
            </div>

            <div className='flex flex-col gap-5 mt-20'>
              <h1 className='text-4xl font-medium'>
                Share <span className='text-gamboge font-bold'>Your</span> <span className='text-gunmetal font-bold'>Thoughts</span> With The World !!
              </h1>
              <p className='text-sm font-medium text-gunmetal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dignissimos sequi eaque nihil sint dolorem exercitationem corporis harum quod neque?
              </p>
            </div>

            <div className='w-full flex justify-end items-center mt-8'>
              <p>
                Get Started &rArr;
              </p>
            </div>
          </div>

          {/* right part */}
          <div className='w-3/5 h-full flex flex-col justify-end items-end p-5'>
            <div>
              <ul className='text-white font-bold'>
                <li>Blogs</li>
                <li>Write</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <img src="/src/assets/logo.png" alt="logo" />
            </div>
          </div>
    </div>
      <Signup/>
      <Signin/>
      <BlogPage/>
      <CreateBlog/>
      <MyProfile/>
    </>
  )
}

export default App
