import React from 'react'
import Image from 'next/image'
import burger from '../components/public/burgchr-removebg-preview.png'

export default function Banner() {
  return (
    <div className='h-96 flex bg-lime-50'>
      <div className="p-9 w-1/2">
        <h1 className=' text-5xl font-bold p-4 pr-0 font-serif text-lime-800 '>Buy best Burger's In World.</h1>
        <p className='text-2xl p-4 text-lime-800'>we have the worlds best chef we are also providing  pizza's on discounted rates</p>
        <button className=' hover:bg-lime-100 bg-lime-800 px-7 py-2 font-bold text-white hover:text-lime-800'>Buy Now</button>
      </div>
      <div className=' p-3 w-96'>
        
<Image
src={burger}
alt='pizza'
width={700} 
height={700}
className='w-96 h-72 '
/>
      </div>

    </div>
  )
}
