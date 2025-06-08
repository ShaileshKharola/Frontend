import React, { useState } from 'react'

const Login = () => {

  const[currentState,setCurrentState] = useState('Login');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90] sm:max-w-96 m-auto mt-14 gap-4 bg-white-100'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3x1'>{currentState}</p>
        <hr className='border-none h-[1.5px] bg-gray-800' />
      </div>
      {currentState ==='Login'?'':<input type="text" placeholder='Name' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500' required/>}
      <input type="email" placeholder='Email' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500' required/>
      <input type="password" placeholder='Password' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget your password?</p>{
          currentState === 'Login' ?
          <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-gray-800 text-white px-4 py-2 rounded'>{currentState === 'Login' ? 'Sign Up' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
