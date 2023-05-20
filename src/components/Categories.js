import React from 'react'

import { categories } from '../data'

const Categories = () => {
  return (
    <div className=' flex relative  bg-white mx-auto justify-center  space-x-10 px-20 py-10 '>
      {categories.map((item, index) => (
        <div key={index} className='relative'>
          <div className='h-full flex-1'>
            <img
              src={item.img}
              alt=''
              className='rounded-lg  hover:opacity-60'
            />
          </div>
          <div className='absolute inset-0 flex flex-col mx-auto justify-center items-center text-white opacity-60 hover:opacity-100'>
            <h2 className='text-3xl py-4 uppercase  tracking-widest font-semibold '>
              {item.title}
            </h2>
            <button className='border-2 py-2 px-4 border-red-500 uppercase'>
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
