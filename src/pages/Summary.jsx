import React, { useEffect, useState } from 'react'
import { selectCartTotals } from '../redux/cart';
import { getPrice } from '../utilitys/ItemInfo';
import { useSelector } from 'react-redux';

const Summary = () => {
const[total,setTotal]=useState(0)
      const { totalPrice, tax, shipping} = useSelector(selectCartTotals);
      console.log(totalPrice, tax, shipping)
      useEffect(()=>{
    setTotal(totalPrice + tax + shipping)
      },[totalPrice])
  return (
<>
<div className='bg-gray-300 p-2 rounded-md py-4'>
<div className='w-full mb-4 text-xl font-semibold'>Order Summary</div>
      <div className='w-full flex gap-2 justify-between pb-2 mb-2 border-b-[1px]'>
        <span>Summary</span>
        <span>{getPrice(totalPrice)}</span>
      </div>
      <div className='w-full flex gap-2 justify-between pb-2 mb-2 border-b-[1px]'>
        <span>Tax</span>
        <span>{getPrice(tax)}</span>
      </div>
      <div className='w-full flex gap-2 justify-between pb-2 mb-2 border-b-[1px]'>
        <span>Shipping</span>
        <span>{getPrice(shipping)}</span>
      </div>
      <div className='w-full flex gap-2 justify-between pb-2 mb-2 border-b-[1px] text-xl font-semibold'>
        <span>Total</span>
        <span>{getPrice(total)}</span>
      </div>
      </div>
</>
  )
}

export default Summary