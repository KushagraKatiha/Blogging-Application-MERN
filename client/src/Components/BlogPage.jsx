import React, { useContext, useState } from 'react'
import NavigationBar from './NavigationBar'
import CreateBlog from './CreateBlog';
import { BlogContext } from '../context/blogContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function BlogPage() {
  
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);
    const { visiblity } = useContext(BlogContext);

    const handleReadMore = (index) => {
      console.log(index);
      navigate(`/blog/${blogs[index]._id}`)
    }

    useEffect(() => {
        axios.get('/api/v1/post/get-posts')
        .then(res => {
            console.log(res.data.data);
            setBlogs(res.data.data);
        })
        .catch(err => console.error('error: ', err.response.data.message));
    }, [blogs]);

    console.log('blog', blogs);

  return (
    <>
    <NavigationBar />
    <div className={`${visiblity ? 'hidden' : 'flex'} px-44 bg-gunmetal w-full overflow-auto flex flex-col gap-10 items-center justify-center pb-5`}> 
      
          <h1 className='text-white text-xl font-semibold space-x-2'>Things to Read</h1>
          <div className='grid gap-5 grid-cols-3'>
              { blogs &&
                  blogs.map((blog, index) => (
                     
                        <div className='shadow-3xl bg-darkcyan p-5 rounded-md' key={index}>
                          <div className='h-40 overflow-hidden p-3 bg-gunmetal text-timberwolf rounded shadow-3xl'>
                            <h1 className='text-white text-lg font-semibold'>{blog.title}</h1>
                            <p className='text-sm'>{blog.content}</p>
                          </div>
                            <div className='rounded shadow-3xl p-3 bg-gunmetal text-white mt-5'>
                              <p className='text-sm'>-{" "}{blog.author.fullname}</p>
                              <p className='text-sm'>-{" "}{blog.category}</p>
                            </div>
                          <div className='flex flex-col justify-center items-center gap-2 mt-5'>
                            <button onClick={() => {
                              handleReadMore(index)
                            }} className=' bg-gunmetal text-white px-2 py-1 rounded-md w-fit'>Read More...</button>                           
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

export default BlogPage;
