import React from 'react'

const Login = () => {
  return (
    <div className='bg-red-100 bg-cover bg-no-repeat bg-opacity-50s mx-auto py-20  justify-center items-center h-[100vh]'>
      <div className='flex flex-col  mx-auto  max-w-sm rounded-lg shadow-lg py-5 bg-white'>
        <h2 className='text-2xl  font-thin mx-auto'>Login</h2>
        <form action='' className='flex flex-col gap-5  p-5'>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
        </form>
        <button className='bg-blue-400 w-40 mx-auto text-white uppercase px-6 py-3'>
          Login
        </button>
        <div className='flex flex-col mx-2 py-4 space-y-3'>
          <a>Forget your password?</a>
          <a>Create Account</a>
        </div>
      </div>
    </div>
  )
}

export default Login
