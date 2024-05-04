import React from 'react'

function BlogPage() {

    const dummyBlog = [
        {
            title: "Title1", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspernatur inventore voluptatem eum quos dolores voluptas, est beatae sequi laboriosam delectus laudantium, excepturi repellendus odit, rem maxime dolorem hic deleniti soluta repellat aliquam cumque sapiente tenetur? Dolorem saepe voluptatum doloremque eos cum accusantium neque praesentium repellat nostrum quas.",
            category: "news",
            comments: [{
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            },
            {
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            }],
            author: "author1"
        }, 

        {
            title: "Title2", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspernatur inventore voluptatem eum quos dolores voluptas, est beatae sequi laboriosam delectus laudantium, excepturi repellendus odit, rem maxime dolorem hic deleniti soluta repellat aliquam cumque sapiente tenetur? Dolorem saepe voluptatum doloremque eos cum accusantium neque praesentium repellat nostrum quas.",
            category: "tech",
            comments: [{
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            },
            {
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            }],

            author: "author2"
        },
        {
            title: "Title1", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspernatur inventore voluptatem eum quos dolores voluptas, est beatae sequi laboriosam delectus laudantium, excepturi repellendus odit, rem maxime dolorem hic deleniti soluta repellat aliquam cumque sapiente tenetur? Dolorem saepe voluptatum doloremque eos cum accusantium neque praesentium repellat nostrum quas.",
            category: "news",
            comments: [{
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            },
            {
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            }],
            author: "author1"
        }, 

        {
            title: "Title2", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspernatur inventore voluptatem eum quos dolores voluptas, est beatae sequi laboriosam delectus laudantium, excepturi repellendus odit, rem maxime dolorem hic deleniti soluta repellat aliquam cumque sapiente tenetur? Dolorem saepe voluptatum doloremque eos cum accusantium neque praesentium repellat nostrum quas.",
            category: "tech",
            comments: [{
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            },
            {
                content: "Lorem ipsum dolor sit amet.",
                post: "postID",
                author: "authorID"
            }],

            author: "author2"
        }
    ]

  return (
    <>
    <div className='py-10 px-44 bg-gunmetal w-full h-full overflow-auto flex flex-col gap-10 items-center justify-center'> 
      
          <h1 className='text-white text-xl font-semibold space-x-2'>Things to Read</h1>
          <div className='flex flex-col gap-10'>
              {
                  dummyBlog.map((blog, index) => (
                      <div className='shadow-3xl'>
                        <div key={index} className='bg-darkcyan p-5 rounded-md'>
                          <div className='p-3 bg-gunmetal text-timberwolf rounded shadow-3xl'>
                          <h1 className='text-white text-lg font-semibold'>{blog.title}</h1>
                          <p className='text-sm'>{blog.content}</p>
                          <div className='flex flex-col gap-2 mt-5'>
                              <p className='text-sm'>-{" "}{blog.author}</p>
                              <p className='text-sm'>-{" "}{blog.category}</p>
                          </div>
                          </div>
                          <div className='flex flex-col gap-2 mt-5'>
                            <h1 className='text-gunmetal font-bold'>Comments</h1>
                              {
                                  blog.comments.map((comment, index) => (
                                      <div key={index} className='text-black'>
                                          <p className='text-sm'>{comment.content}</p>
                                          <div className='flex flex-row'>
                                              <p className='text-sm'>{comment.author}</p>
                                          </div>
                                      </div>
                                  ))
                              }
                          </div>
                      </div>
                      </div>
                  ))
              }
          </div>
        </div>
    </>
  )
}

export default BlogPage