import React, { useContext, useState } from 'react'
import NavigationBar from './NavigationBar'
import { FaTrash} from "react-icons/fa";
import CreateBlog from './CreateBlog';
import { BlogContext } from '../context/blogContext';
import { useEffect } from 'react';
import axios from 'axios';

function BlogPage() {
    
    const [blogs, setBlogs] = useState()
    const {visiblity} = useContext(BlogContext)

    const [commentVisiblity, setcommentVisiblity] = useState(false)

    const changecommentVisiblity = () => {
        setcommentVisiblity(!commentVisiblity)
    }

    useEffect(() => {
        axios.get('/api/v1/post/get-posts')
        .then(res => {
            console.log(res.data.data)
            console.log('type of data is: ', typeof res.data.data);
            setBlogs(res.data.data)
            console.log('blogs: ', blogs);
        })
        .catch(err => console.error('error: ', err.response.data.message))
    }, [blogs])

    console.log('blog', blogs);

  return (
    <>
    <NavigationBar/>
    <div className={`${visiblity ? 'hidden' : 'flex'} px-44 bg-gunmetal w-full h-full overflow-auto flex flex-col gap-10 items-center justify-center pb-5`}> 
      
          <h1 className='text-white text-xl font-semibold space-x-2'>Things to Read</h1>
          <div className='flex flex-col gap-10'>
              { blogs &&
                  blogs.map((blog, index) => (
                      <div className='shadow-3xl' key={index}>
                        <div key={index} className='bg-darkcyan p-5 rounded-md'>
                          <div className='p-3 bg-gunmetal text-timberwolf rounded shadow-3xl'>
                          <h1 className='text-white text-lg font-semibold'>{blog.title}</h1>
                          <p className='text-sm'>{blog.content}</p>
                          <div className='flex flex-col gap-2 mt-5'>
                              <p className='text-sm'>-{" "}{blog.author.fullname}</p>
                              <p className='text-sm'>-{" "}{blog.category}</p>
                          </div>
                          </div>
                          <div className='flex flex-col gap-2 mt-5'>
                            <button onClick={changecommentVisiblity} className='text-left bg-gunmetal text-white px-2 py-1 rounded-md w-fit'>view comments</button>
                            <div className={`${(commentVisiblity) ? 'flex' : 'hidden'} gap-3`}>
                            <input type="text" className='bg-transparent outline-none border-b-2 py-1 px-2 text-black placeholder-white' placeholder='comment...'/>
                            <button className='bg-timberwolf rounded text-black font-medium text-sm px-2 py-1'>comment</button>
                            </div>
                            <div className={`shadow-3xl bg-timberwolf rounded ${commentVisiblity ? 'flex' : 'hidden'} p-5 flex-col gap-2`}>
                              {
                                  blog.comments.map((comment, index) => (
                                      <div key={index} className={`text-black ${(commentVisiblity) ? 'visible' : 'hidden'}`}>
                                         <div>
                                         <p className='text-sm'>{comment.content}</p>
                                          <div className='flex flex-row'>
                                              <p className='text-xs font-semibold'>{comment.author}</p>
                                          </div>
                                         </div>
                                         <div>
                                            <button className='text-xs bg-transparent text-cornelred rounded-md px-2 py-1 w-fit'><FaTrash/></button>
                                         </div>
                                      </div>
                                  ))
                                }
                            </div>
                          </div>
                      </div>
                      </div>
                  ))
              }
          </div>
        </div>

    <CreateBlog />
    </>
  )
}

export default BlogPage