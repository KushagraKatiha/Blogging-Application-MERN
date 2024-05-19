import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function Signup() {

  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('user')

  const errorTost = (message) => toast.error(message);
  const successTost = (message) => toast.success(message);
  const navigate = useNavigate()

  const handleSignup = () => {
    try{
      axios.post('/api/v1/user/register',{
        fullname,
        email,
        username,
        password,
        confirmPassword,
        role
      }, {
        withCredentials: true
      })
      .then(res => {
        if(res.status === 201){
          console.log(res);
          successTost(res.data.message)
          navigate('/signin')
        }else{
          console.log(res);
        }
      })
    }catch(err){
      errorTost(err.message)
      console.log(`Error form signin page: ${err}`);
    }
  }

  return (
    <div className=' py-10 px-44 bg-gunmetal w-full h-screen overflow-auto flex items-center justify-center'>
    <div className='w-full flex justify-center items-center'>
        {/* left part */}
        <div className='px-5 py-5 w-2/5 text-white h-full flex flex-col gap-10 justify-center'>
         <div className='flex flex-col justify-center items-center'>
            <p className='text-lg'>Already have an account ?</p>
            <Link to='/signin' className='text-darkcyan text-lg'>Login here</Link>
         </div>
        </div>

        {/* right part */}
        <div className='shadow-3xl w-3/5 h-full flex flex-col gap-5 justify-center items-center p-5 bg-darkcyan'>
          <h1 className='text-white text-xl font-semibold space-x-2'>Create Account</h1>
          <form className='flex flex-col gap-5' action="">
            <input onChange={(e) => setFullName(e.target.value)} className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="text" placeholder='Name here...' />
            <input onChange={(e) => setEmail(e.target.value)} className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="email" placeholder='Email here...' />
            <input onChange={(e) => setUsername(e.target.value)} className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="text" placeholder='Username here...' />
            <input onChange={(e) => setPassword(e.target.value)} className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="password" placeholder='Password here...' />
            <input onChange={(e) => setConfirmPassword(e.target.value)} className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="password" placeholder='Confirm Password here...' />
           <div className='w-full flex justify-between'>
                <select onChange={(e) => setRole(e.target.value)} className='px-2 bg-gunmetal py-2 rounded text-white outline-none font-bold' name="role" id="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <input className='bg-timberwolf px-2 py-1 rounded font-bold cursor-pointer' type="button" value="create account" onClick={handleSignup}/>
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