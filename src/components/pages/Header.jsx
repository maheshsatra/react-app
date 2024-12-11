import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
   <>
   <div className='w-full p-2 bg-gray-200 flex gap-3'>
    <h2 className='text-2xl'>Logo</h2>
    <div className='w-full flex gap-6 ps-10 pt-1'>
    <Link  to="/">Home</Link>
    <Link  to="/about">About</Link>
    <Link  to="/products">Products</Link>
    <Link  to="/cart">Cart</Link>
   </div>
   </div>
   </>
  )
}

export default Header