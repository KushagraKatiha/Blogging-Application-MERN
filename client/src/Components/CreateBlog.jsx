import React from 'react'

function CreateBlog({style}) {
  return (
    <>
        <div className={`py-10 px-44 bg-gunmetal w-full h-full overflow-auto flex flex-col gap-10 items-center justify-center ${style}`}>
                <h1 className='text-4xl font-bold text-white'>
                    Create Blog
                </h1>
            <div className='w-1/2 h-full flex flex-col gap-5 items-center justify-center shadow-3xl p-5 rounded-md'>
                <input type="text" placeholder="Title" className='outline-none placeholder-white bg-darkcyan w-full h-10 px-5 rounded-md' />
                <textarea name="" id="" cols="30" rows="10" placeholder="Content" className='bg-darkcyan placeholder-white w-full h-40 px-5 rounded-md outline-none'></textarea>
                <select name="" id="" className='w-full h-10 px-5 rounded-md bg-darkcyan outline-none'>
                    <option value="news">News</option>
                    <option value="tech">Tech</option>
                    <option value="health">Health</option>
                    <option value="sport">Sport</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                <button className='w-1/4 h-10 bg-darkcyan text-white rounded-md'>
                    Create
                </button>
            </div>
        </div>
    </>
  )
}

export default CreateBlog