import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <div className=''>
      <Navbar />
      <Announcement />
      <div className='flex  justify-between mx-10'>
        <span className='flex p-2 space-x-4'>
          <p>Filter Product:</p>
          <select name='' id='' className='border-2 px-2'>
            <option value='' disabled selected>
              Color
            </option>
            <option value=''>White</option>
            <option value=''>Black</option>
            <option value=''>Red</option>
            <option value=''>Yellow</option>
            <option value=''>Green</option>
          </select>
          <select name='' id='' className='border-2 px-2'>
            <option value='' disabled selected>
              Size
            </option>
            <option value=''>XS</option>
            <option value=''>S</option>
            <option value=''>M</option>
            <option value=''>L</option>
            <option value=''>XL</option>
          </select>
        </span>
        <span className='flex space-x-4 p-2 '>
          <p>Sort by:</p>
          <select name='' id='' className='border-2 '>
            <option value='' selected>
              Newest
            </option>
            <option value=''>Price (asc)</option>
            <option value=''>Price (des)</option>
          </select>
        </span>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList
