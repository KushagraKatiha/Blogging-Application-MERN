import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import CreateBlog from './Components/CreateBlog'
import { BlogContext } from './context/blogContext'

function App() {

  const {handleVisiblity} = useContext(BlogContext)

  const navigate = useNavigate()

  const handleGetStarted = (e) => {
    e.preventDefault()
    navigate('/signin')
  }

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
              <button onClick={handleGetStarted}>
                Get Started &rArr;
              </button>
            </div>
          </div>

          {/* right part */}
          <div className='w-3/5 h-full flex flex-col justify-end items-end p-5'>
            <div>
              <ul className='text-white font-bold'>
                <li><button>Blogs</button></li>
                <li><button onClick={handleVisiblity}>Write</button></li>
                <li><button>Contact</button></li>
              </ul>
            </div>

            <div>
              <img src="/src/assets/logo.png" alt="logo" />
            </div>
          </div>
    </div>
    <CreateBlog />
    </>
  )
}

export default App
