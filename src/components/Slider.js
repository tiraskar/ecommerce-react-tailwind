import React, { useState, useEffect } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { sliderItems } from '../data'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlide = (direction) => {
    console.log(direction)
    if (direction === 'left') {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? sliderItems.length - 1 : prevSlide - 1
      )
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === sliderItems.length - 1 ? 0 : prevSlide + 1
      )
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSlide()
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentSlide])

  return (
    <div className='relative flex  justify-center items-center mx-auto w-full min-h-[80vh] overflow-hidden'>
      <div className='absolute z-10 left-0 ml-2 bg-slate-200 rounded-full opacity-40'>
        <button className='p-2  ' onClick={() => handleSlide('left')}>
          <BiLeftArrow size={24} />
        </button>
      </div>
      <div className='flex h-full  overflow-hidden'>
        {sliderItems.map((item, index) => (
          <div
            key={item.id}
            className={`h-full bg-${
              item.bg
            } absolute inset-0 flex items-center  transform transition-transform ${
              index === currentSlide ? 'translate-x-0' : '-translate-x-full'
            }  transition-all duration-1000 `}
          >
            <div className='flex-1 h-full '>
              <img src={item.img} alt='' className='sliderImage' />
            </div>
            <div className='flex-1 p-12'>
              <h2 className='text-8xl uppercase'>{item.title}</h2>
              <p className='my-8 text-2xl tracking-widest uppercase'>
                {item.desc}
              </p>
              <button className='px-3 py-2 bg-transparent border-2 border-black cursor-pointer'>
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute right-0 mr-2 bg-slate-200 rounded-full opacity-40'>
        <button className='p-2' onClick={() => handleSlide('right')}>
          <BiRightArrow size={24} />
        </button>
      </div>
    </div>
  )
}

export default Slider
