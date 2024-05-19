import React, { useContext } from 'react'
import { BlogContext } from '../context/blogContext'

function CreateBlog() {
    const {visiblity, handleVisiblity} = useContext(BlogContext)
  return (
    <>
        <div className={`py-10 px-44 backdrop-blur-2xl backdrop-brightness-50 w-full h-full overflow-auto flex flex-col gap-10 items-center justify-center absolute top-0 ${visiblity ? '' : 'hidden'}`}>
                <h1 className='text-4xl font-bold text-white'>
                    Create Blog
                </h1>
            <div className='w-1/2 h-full flex flex-col gap-5 bg-gunmetal items-center justify-center shadow-3xl p-5 rounded-md'>
                <input type="text" placeholder="Title" className='outline-none placeholder-white bg-darkcyan w-full h-10 px-5 rounded-md' />
                <textarea name="" id="" cols="30" rows="10" placeholder="Content" className='bg-darkcyan placeholder-white w-full h-40 px-5 rounded-md outline-none'></textarea>
                <select name="" id="" className='w-full h-10 px-5 rounded-md bg-darkcyan outline-none'>
                    <option value="news">News</option>
                    <option value="tech">Tech</option>
                    <option value="health">Health</option>
                    <option value="sport">Sport</option>
                    <option value="entertainment">Entertainment</option>
                </select>
               <div className='w-full flex justify-around'>
               <button className='w-1/4 h-10 bg-darkcyan text-white rounded-md'>
                    Create
                </button>
                <button className='w-1/4 h-10 bg-cornelred text-white rounded-md'
                onClick={handleVisiblity}    
                >
                    Close
                </button>
               </div>
            </div>
        </div>
    </>
  )
}

export default CreateBlog