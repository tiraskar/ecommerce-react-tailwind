import React from 'react'
import {
  FaInstagramSquare,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaCcAmazonPay,
  FaCcPaypal,
  FaCcVisa,
  FaCcDiscover,
  FaGooglePay,
} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdCall } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
const Footer = () => {
  return (
    <div className='  grid grid-cols-3 gap-16 px-10 py-10 bg-cyan-100'>
      <div className='space-y-6'>
        <h1 className='text-3xl font-semibold '>SEN E-COMMERCE</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum
          quo nam nihil facere repudiandae fugit quis, cupiditate repellat sint?
        </p>
        <div className='flex space-x-6 items-center'>
          <FaFacebook size={40} color='blue' />
          <FaInstagramSquare size={40} color='red' />
          <FaTwitter size={40} color='skyblue' />
          <FaPinterest size={40} color='red' />
        </div>
      </div>
      <div className=''>
        <h2 className='text-2xl font-semibold pb-4'>Useful Links</h2>
        <div className=''>
          <ul className='grid grid-cols-2 gap-4 cursor-pointer'>
            <li>Home</li>
            <li>Cart</li>
            <li>Man Fashion</li>
            <li>Women Fashion</li>
            <li>Accessories</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className=''>
        <h2 className='text-2xl font-semibold py-2'>Contact</h2>
        <div className='flex space-x-2 items-center py-1'>
          <MdLocationOn />
          <p>Shiva road, Bhaktapur Nepal</p>
        </div>
        <div className='flex space-x-2 items-center py-1'>
          <IoMdCall />
          <p>+977 9800137658</p>
        </div>
        <div className='flex space-x-2 items-center py-1'>
          <AiOutlineMail />
          <p>sentribikram@gmail.com</p>
        </div>
        <div className='flex space-x-4'>
          <FaCcAmazonPay size={36} />
          <FaCcPaypal size={36} />
          <FaCcVisa size={36} />
          <FaCcDiscover size={36} />
          <FaGooglePay size={36} />
        </div>
      </div>
    </div>
  )
}

export default Footer
