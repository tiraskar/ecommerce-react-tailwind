import React from 'react'
import { popularProducts } from '../data'
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from 'react-icons/ai'

const Products = () => {
  return (
    <div className=' py-10 bg-slate-300'>
      <div className='flex mx-auto justify-center items-center pb-10'>
        <h1 className='text-5xl uppercase font-bold tracking-widest '>
          Products
        </h1>
      </div>

      <div className='grid grid-cols-4 mx-auto px-20 gap-6  w-full  '>
        {popularProducts.map((item, index) => (
          // Card
          <div
            key={index}
            className='relative p-4 bg-white shadow-2xl rounded-lg  '
          >
            <div className='h-80   rounded-lg overflow-hidden '>
              <img src={item.image} alt='' className='object-contain ' />
            </div>
            <div className=' absolute flex mx-auto  items-center justify-center space-x-10 inset-0 opacity-0 hover:opacity-100  transition-all hover:bg-opacity-50 hover:bg-blue-300'>
              <AiOutlineShoppingCart
                size={48}
                color='white'
                className=' bg-black p-2 rounded-full  cursor-pointer'
              />

              <AiOutlineSearch
                size={48}
                color='white'
                className=' bg-black p-2 rounded-full  cursor-pointer'
              />

              <AiOutlineHeart
                size={48}
                color='white'
                className=' bg-black p-2 rounded-full  cursor-pointer'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
