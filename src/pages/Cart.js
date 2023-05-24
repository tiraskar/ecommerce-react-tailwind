import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
const Cart = () => {
  return (
    <div className=''>
      <Navbar />
      <Announcement />
      <div className='mx-20 items-center py-10 '>
        <div className='flex flex-row mx-auto'>
          <h2 className='text-3xl items-center py-5 mx-auto uppercase'>
            Your Bag
          </h2>
        </div>
        <div className='flex mx-auto justify-between items-center py-2'>
          <button className='px-4 py-2 border-2 border-black text-black uppercase'>
            Continue Shopping
          </button>
          <div className='flex space-x-4'>
            <p className='cursor-pointer'>Shopping Bag (2)</p>
            <p className='cursor-pointer'>Your Wishlist (0)</p>
          </div>
          <button className='px-4 py-2 border-2 bg-black text-white uppercase'>
            Checkout Now
          </button>
        </div>
        <div className='flex justify-between py-4'>
          <div className='flex '>
            <div className='flex'>
              <div className='w-60 h-60'>
                <img
                  src='https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png'
                  alt=''
                  className=' object-contain'
                />
              </div>
              <div className='flex '>
                <div className='pl-6 space-y-6'>
                  <p>
                    <b>Product</b>: JESSIE THUNDER SHOES
                  </p>
                  <p>Id: 01152056</p>
                  <div className='w-6 h-6 text-center bg-black rounded-full'></div>
                  <p>
                    <b>Size</b>: L
                  </p>
                </div>
                <div className=' px-60 space-y-10 py-10'>
                  <div className='flex'>
                    <span className='text-4xl'>+</span>
                    <span className='text-4xl'>2</span>
                    <span className='text-4xl'>-</span>
                  </div>
                  <p className='text-4xl'>$20</p>
                </div>
              </div>
            </div>
          </div>
          <div className='border-2  rounded-lg p-5 '>
            <h2 className='uppercase text-3xl'>Order Summary</h2>
            <div className='flex justify-between py-4 text-xl'>
              <div className='space-y-4'>
                <p>Subtotal</p>
                <p>Estimated Total</p>
                <p>Shipping Discount </p>
                <h2 className='font-semibold text-2xl'>Total</h2>
              </div>
              <div className='space-y-4'>
                <p>$80</p>
                <p>$5.90</p>
                <p>$-5.90 </p>
                <h2 className='font-semibold text-2xl'>$80</h2>
              </div>
            </div>
            <button className='uppercase bg-black text-white px-5 py-2 rounded-lg items-center'>
              Checkout Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
