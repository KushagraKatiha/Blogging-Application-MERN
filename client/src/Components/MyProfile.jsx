import React from 'react'
import NavigationBar from './NavigationBar'

function MyProfile() {
    const dummyBlog = [
        {
            title: "Title2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspern"
        },
        {
            title: "Title1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspern"
        },
        {
            title: "Title2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspern"
        },
        {
            title: "Title1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspern"
        },
        {
            title: "Title2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspern"
        },
        {
            title: "Title1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspern"
        },
        {
            title: "Title2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo cupiditate. Ex quis quo nobis deserunt porro at. Repellat similique animi maiores! Velit qui aspern"
        },
        {
            title: "Title1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque eius temporibus deleniti officia voluptates! Nostrum, quo"
        },

    ]

    return (
        <>
        <NavigationBar/>
        <div className='bg-gunmetal flex gap-5 justify-around px-5 h-fit py-5'>
            {/* Left Part */}
            <div className='flex flex-col bg-timberwolf rounded-md p-5 gap-5 w-auto shadow-3xl'>
                <button className='text-xs font-bold block text-left w-fit'>Go Back</button>
                <h1 className='text-black text-center mb-3 text-2xl font-bold '>My Blogs</h1>
                <div className='overflow-y-scroll h-64 flex flex-col p-5 gap-5'>
                    {dummyBlog.map((blog, index) => {
                        return (
                            <div className='bg-darkcyan text-white p-2 rounded-md flex flex-col gap-3 shadow-3xl' key={index}>
                                <h1 className='text-black text-center text-lg font-semibold'>{blog.title}</h1>
                                <p>{blog.content}</p>
                                <button className='bg-cornelred text-timberwolf px-2 py-2 rounded font-semibold text-xs w-fit'>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Right Part for profile settings */}
            <div className='bg-gunmetal p-5 shadow-3xl flex flex-col gap-5 rounded-md h-fit'>
                <h1 className='text-white text-center font-bold text-2xl'>Profile Settings</h1>
                <div className='flex flex-col gap-2'>
                    <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="text" placeholder='Name here...' />
                    <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="email" placeholder='Email here...' />
                    <button className='text-white text-xs px-2 py-2 bg-darkcyan font-bold rounded shadow-3xl'>Update Profile</button>
                </div>

                <div className='flex flex-col gap-2'>
                    <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="password" placeholder='New Password here...' />
                    <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="password" placeholder='Confirm Password here...' />
                    <button className='text-white text-xs px-2 py-2 bg-darkcyan font-bold rounded shadow-3xl'>Change Password</button>
                </div>
                <button className='text-white text-xs px-2 py-2 bg-cornelred font-bold rounded shadow-3xl'>Delete Profile</button>
                <button className='text-white text-xs px-2 py-2 bg-transparent font-bold rounded w-fit'>Sign Out</button>
            </div>
        </div>
        </>
    )
}

export default MyProfile