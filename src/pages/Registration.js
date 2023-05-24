import React from 'react'

const Registration = () => {
  return (
    <div className=' bg-registration-pattern bg-cover bg-no-repeat bg-opacity-50s mx-auto py-20  justify-center items-center h-[100vh]'>
      <div className='flex flex-col  mx-auto  max-w-lg rounded-lg shadow-lg py-5 bg-white '>
        <h2 className='text-2xl  font-thin mx-auto'>Create Your Account</h2>

        <form action='' className='flex flex-wrap gap-5  p-5'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='text' placeholder='User Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
          <input type='text' placeholder='Confirm Password' />
          <p className='text-sm'>
            By creating account. I concent to the processing of my personal data
            in accordance with the <b>Privacy Policy.</b>
          </p>
          <button className='py-3 px-6 border-2  border-black bg-green-700 text-white uppercase '>
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default Registration
