import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className=' h-[60px]'>
      <div className='flex flex-row items-center justify-between  px-10 py-2.5'>
        <div className='flex flex-1 items-center'>
          <span className='text-3.5 cursor-pointer'>EN</span>
          <div className='flex items-center ml-6 p-1  border-2 border-gray-400'>
            <input type='text' className='border-none' />
            <AiOutlineSearch size={20} style={{ color: 'gray' }} />
          </div>
        </div>
        <div className='flex-1 text-center'>
          <h2 className='text-2xl font-bold uppercase'>Sen E-commerce</h2>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <button className='uppercase border-2 px-3 py-1'>Sign Up</button>
          <button className='uppercase border-2 px-3 py-1'>Sign In</button>
          <div className='relative'>
            <span className='absolute ml-5 -mt-2 w-6 h-6 text-center bg-red-300 z-10 rounded-full'>
              30
            </span>
            <button>
              <AiOutlineShoppingCart size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
