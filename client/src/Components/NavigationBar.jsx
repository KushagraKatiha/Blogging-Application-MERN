import React, { useState } from 'react'
import { FaUser} from "react-icons/fa";

function NavigationBar() {
    const [visiblity, setVisiblity] = useState(false)
    
    const changeVisiblity = () => {
        setVisiblity(!visiblity)
    }
  return (
    <> 
        <div className='flex justify-between items-center mx-5 w-auto text-lg font-semibold px-14 rounded-md text-black shadow-3xl bg-timberwolf'>
            {/* left part */}
            <div className='w-1/3'>
                <ul className='flex justify-around'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Write</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div>
                <FaUser onClick={changeVisiblity} className='cursor-pointer'/>
            </div>
        </div>
            <div className={`rounded-md p-2 cursor-pointer ${visiblity ? 'flex' : 'hidden'} flex-col gap-2 text-black bg-timberwolf w-fit absolute right-5 mt-3`}>
                    <ul className='text-sm font-semibold'>
                        <li>My Profile</li>
                        <li>signin</li>
                        <li>signout</li>
                    </ul>
                </div>
    </>
  )
}

export default NavigationBar