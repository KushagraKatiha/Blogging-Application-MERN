import React, { useContext, useState } from 'react'
import { FaUser} from "react-icons/fa";
import { BlogContext } from '../context/blogContext';

function NavigationBar() {

    const {visiblity, handleVisiblity} = useContext(BlogContext)

    const [userVisiblity, setUserVisiblity] = useState(false)
    
    const changeUserVisiblity = () => {
        setUserVisiblity(!userVisiblity)
        console.log(`Clicked !`);
    }

  return (
    <div className='bg-gunmetal py-10 sticky top-0'> 
        <div className='flex justify-between items-center mx-5 w-auto text-lg font-semibold px-14 rounded-md text-black shadow-3xl bg-timberwolf'>
            {/* left part */}
            <div className='w-1/3'>
                <ul className='flex justify-around'>
                    <li className='cursor-pointer'><button>Home</button></li>
                    <li className='cursor-pointer'><button onClick={handleVisiblity}>Write</button></li>
                    <li className='cursor-pointer'><button>Contact</button></li>
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
    </div>
  )
}

export default NavigationBar