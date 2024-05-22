import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import { BlogContext } from '../context/blogContext';
import CreateBlog from './CreateBlog';

function ViewBlog() {

    const { visiblity } = useContext(BlogContext);

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentVisiblity, setcommentVisiblity] = useState(false)
    const [comment, setComment] = useState('')

    const navigate = useNavigate();

    const changecommentVisiblity = () => {
        setcommentVisiblity(!commentVisiblity)
    }

    const handleAddComment = () => {
        console.log(comment);
        axios.post(`/api/v1/comment/create/${id}`, {
            content: comment
        })
        .then(res => {
            if(res.data.statusCode === 200){
                setComment('')
                fetchComments()
            }
            console.log(res);
        })
        .catch(err => {console.error('error: ', err)
            if(err.response.data.message === 'Unauthorized'){
                alert('Sessaion Expired, Please Login Again')
                navigate('/signin')
            }
        });
    }

    const fetchComments = () => {
        axios.get(`/api/v1/comment/post/get/${id}`)
            .then(res => {
                setComments(res.data.data);
            })
            .catch(err => console.error('error: ', err));
    }

    useEffect(() => {
        axios.get(`/api/v1/post/${id}`)
            .then(res => {
                setBlog(res.data.data);
                fetchComments()
            })
            .catch(err => console.error('error: ', err));
    }, [id]);
    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavigationBar />
            <div className={`${visiblity ? 'hidden' : ''} px-44 bg-gunmetal w-full h-auto min-h-screen overflow-auto flex flex-col gap-10 items-center justify-center pb-5`}>
                <h1 className='text-white text-xl font-semibold space-x-2'>{blog.title}</h1>
                <div className='shadow-3xl bg-darkcyan p-5 rounded-md'>
                    <div className='p-3 bg-gunmetal text-timberwolf rounded shadow-3xl'>
                        <h1 className='text-white text-lg font-semibold'>{blog.title}</h1>
                        <p className='text-sm'>{blog.content}</p>
                        <div className='flex flex-col gap-2 mt-5'>
                            <p className='text-sm'>- {blog.author.fullname}</p>
                            <p className='text-sm'>- {blog.category}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-5'>
                            <button onClick={changecommentVisiblity} className='text-left bg-gunmetal text-white px-2 py-1 rounded-md w-fit'>view comments</button>
                            <div className={`${(commentVisiblity) ? 'flex' : 'hidden'} gap-3`}>
                            <input
                             value={comment} 
                             onChange={e => setComment(e.target.value)} type="text" className='bg-transparent outline-none border-b-2 py-1 px-2 text-black placeholder-white' placeholder='comment...'/>
                            <button onClick={handleAddComment} className='bg-timberwolf rounded text-black font-medium text-sm px-2 py-1'>comment</button>
                            </div>
                            <div className={`shadow-3xl bg-timberwolf rounded ${commentVisiblity ? 'flex' : 'hidden'} p-5 flex-col gap-2`}>
                              {
                                  comments.map((comment, index) => (
                                      <div key={index} className={`text-black ${(commentVisiblity) ? 'visible' : 'hidden'}`}>
                                         <div>
                                         <p className='text-sm'>{comment.content}</p>
                                          <div className='flex flex-row'>
                                              <p className='text-xs font-semibold'>{comment.author.fullname}</p>
                                          </div>
                                         </div>
                                         <div>
                                            {/* <button className='text-xs bg-transparent text-cornelred rounded-md px-2 py-1 w-fit'><FaTrash/></button> */}
                                         </div>
                                      </div>
                                  ))
                                }
                            </div>
                          </div>
                </div>

            </div>
            <CreateBlog />
        </>
    );
}

export default ViewBlog;
