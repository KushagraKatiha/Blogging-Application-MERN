import React, { useState } from 'react'
import { FaUser} from "react-icons/fa";
import CreateBlog from './CreateBlog';

function NavigationBar() {
    const [userVisiblity, setUserVisiblity] = useState(false)
    const [createBlogVisiblity, setCreateBlogVisiblity] = useState(false)
    
    const changeUserVisiblity = () => {
        setUserVisiblity(!userVisiblity)
        console.log(`Clicked !`);
    }

    const changeCreateBlogVisiblity = () => {
        setCreateBlogVisiblity(!createBlogVisiblity)
        console.log(`Clicked !`);
    }
  return (
    <div className='backdrop-blur-xl py-10 sticky top-0'> 
        <div className='flex justify-between items-center mx-5 w-auto text-lg font-semibold px-14 rounded-md text-black shadow-3xl bg-timberwolf'>
            {/* left part */}
            <div className='w-1/3'>
                <ul className='flex justify-around'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer' onClick={changeCreateBlogVisiblity}>Write</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div>
                <FaUser onClick={changeUserVisiblity} className='cursor-pointer'/>
            </div>
        </div>
            <div className={`rounded-md p-2 cursor-pointer ${userVisiblity ? 'flex' : 'hidden'} flex-col gap-2 text-black bg-timberwolf w-fit absolute right-5 mt-3`}>
                    <ul className='text-sm font-semibold'>
                        <li>My Profile</li>
                        <li>signin</li>
                        <li>signout</li>
                    </ul>
            </div>

            <CreateBlog style={createBlogVisiblity ? 'visible' : 'hidden'}/>
    </div>
  )
}

export default NavigationBar