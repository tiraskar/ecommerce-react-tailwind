import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className='flex flex-col mx-auto justify-center items-center space-y-7 bg-orange-50 py-36'>
      <h1 className='text-8xl font-bold tracking-wider '>Newsletter</h1>
      <p className='text-3xl'>
        Get timely updates from your favorite products.
      </p>
      <div className='flex border-2 border-black '>
        <input
          type='text'
          className='w-[800px] text-2xl p-1'
          placeholder='Your email'
        />
        <AiOutlineSend className='bg-green-500' size={48} />
      </div>
    </div>
  )
}

export default Newsletter
