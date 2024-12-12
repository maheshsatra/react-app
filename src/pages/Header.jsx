import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import { selectCartTotals } from '../redux/cart';

const Header = () => {
  const { totalQuantity ,totalPrice} = useSelector(selectCartTotals);
console.log(totalPrice)
  return (
   <>
   <div className='w-full p-2 bg-gray-200 flex gap-3'>
    <h2 className='text-2xl'>Logo</h2>
    <div className='w-full flex gap-6 ps-10 pt-1'>
    <Link  to="/">Home</Link>
    <Link  to="/about">About</Link>
    <Link  to="/products">Products</Link>
    <Link  to="/cart"><div className='relative'>Cart <span className={totalQuantity === 0 ?"":"cartitem"}>{totalQuantity === 0 ?"":totalQuantity}</span></div></Link>
   </div>
   </div>
   </>
  )
}

export default Header