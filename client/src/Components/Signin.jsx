import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = () => {
    
      axios.post('/api/v1/user/login', {
        email, 
        password
      })
      .then(res => {
        console.log(res);
        if(res.status === 201){
          navigate('/blogs')
      }})
      .catch(err => console.error('error: ', err.response.data.message))
    
  }

  const handleCreateHere = (e) => {
    e.preventDefault()
    navigate('/signup')
  }

  return (
    <div className=' py-10 px-44 bg-gunmetal w-full h-screen overflow-auto flex items-center justify-center'>
    <div className='w-full flex flex-row-reverse justify-center items-center'>
        {/* left part */}
        <div className='px-5 py-5 w-2/5 text-white h-full flex flex-col gap-10 justify-center'>
         <div className='flex flex-col justify-center items-center'>
            <p className='text-lg'>Don't have an account ?</p>
            <button className='text-darkcyan text-lg' onClick={handleCreateHere}>Create Here</button>
         </div>
        </div>

        {/* right part */}
        <div className='shadow-3xl w-3/5 h-full flex flex-col gap-5 justify-center items-center p-5 bg-darkcyan'>
          <h1 className='text-white text-xl font-semibold space-x-2'>Login Here</h1>
          <form className='flex flex-col gap-5' action="">
            <input onChange={(e) => setEmail(e.target.value)} className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="text" placeholder='Username or email...' />
            <input onChange={(e) => setPassword(e.target.value)} className='bg-transparent text-white px-3 py-1 border-2 outline-none placeholder-white rounded-md' type="password" placeholder='Password here...' />
           <div className='w-full flex justify-between'>
           <input onClick={handleLogin} className='bg-timberwolf px-2 py-1 rounded font-bold cursor-pointer' type="button" value="login" />
           </div>
          </form>
        </div>
    </div>
  </div>
  )
}

export default Signin