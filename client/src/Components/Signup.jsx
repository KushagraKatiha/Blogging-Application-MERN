import React from 'react'

function Signup() {
  return (
    <div className=' py-10 px-44 bg-gunmetal w-full h-full overflow-auto flex items-center justify-center'>
    <div className='w-full flex justify-center items-center'>
        {/* left part */}
        <div className='px-5 py-5 w-2/5 text-white h-full flex flex-col gap-10 justify-center'>
         <div className='flex flex-col justify-center items-center'>
            <p className='text-lg'>Already have an account ?</p>
            <button className='text-darkcyan text-lg'>Login Here</button>
         </div>
        </div>

        {/* right part */}
        <div className='shadow-3xl w-3/5 h-full flex flex-col gap-5 justify-center items-center p-5 bg-darkcyan'>
          <h1 className='text-white text-xl font-semibold space-x-2'>Create Account</h1>
          <form className='flex flex-col gap-5' action="">
            <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="text" placeholder='Name here...' />
            <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="email" placeholder='Email here...' />
            <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="text" placeholder='Username here...' />
            <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="password" placeholder='Password here...' />
            <input className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="password" placeholder='Confirm Password here...' />
           <div className='w-full flex justify-between'>
                <select className='px-2 bg-gunmetal py-2 rounded text-white outline-none font-bold' name="role" id="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <input className='bg-timberwolf px-2 py-1 rounded font-bold cursor-pointer' type="button" value="create account" />
           </div>
          </form>
        </div>
    </div>
  </div>
  )
}

export default Signup


/**
 * Kushagra
 * Amit
 * Sanju
 * Nayan
 * Alok
 * Dixit
 * Sandeep
 * Aditya
 * Amitesh
 */