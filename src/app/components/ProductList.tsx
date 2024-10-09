import React from 'react'
import Image from 'next/image'
import fries from '../components/public/fries.jpg'
import burger from '../components/public/images.jpeg'
import burgerfries from '../components/public/burgffricold.jpg'


export default function ProductList() {
  return (
    <div className=' font-bold text-center p-4'>
      <h1 className='text-4xl text-center p-4 '>Our special Items</h1>
      <div className='flex h-80 justify-around'>
      <div className=' w-1/4  '>
      <Image
      src={fries}
      alt='fries'
      width={700}
      height={700}
      className='shadow shadow-slate-500 rounded-lg h-64'
      />
      <h2>Crunchy Fries</h2>
      </div>
      <div className=' w-1/4'>      
      <Image
      src={burger}
      alt='fries'
      width={700}
      height={700}
      className='shadow shadow-slate-500 rounded-lg'
      />
      <h2>Double beef Burger</h2></div>
      <div className=' w-1/4 '>
      <Image
      src={burgerfries}
      alt='fries'
      width={700}
      height={700}
      className='shadow shadow-slate-500 rounded-lg'
      />
      <h2>Full Combo Pack</h2></div>
      </div>
    </div>
  )
}
