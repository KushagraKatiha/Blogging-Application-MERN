import React from 'react'
import { FaUser} from "react-icons/fa";

function NavigationBar() {
  return (
    <> 
        <div className='flex justify-between w-full text-xl text-black shadow-3xl bg-timberwolf'>
            {/* left part */}
            <div className='w-1/3'>
                <ul className='flex justify-around'>
                    <li>Home</li>
                    <li>Write</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* right part */}
            <div>
                <FaUser/>
            </div>
        </div>
    </>
  )
}

export default NavigationBar