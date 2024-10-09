import React from 'react'
import Navbar  from "../app/components/Navbar";
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import Footer from './components/Footer';





//bg-gradient-to-r from-black to-grey-700 min-h-screen
export default function App() {
  return (
    <div className='bg-white min-h-screen'>
<Navbar/>
<Banner/>
<ProductList/>
<Footer/>

    </div>
  )
}

