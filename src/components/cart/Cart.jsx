import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../pages/CartItem';
import Titel from '../../pages/Titel';
import Summary from '../../pages/Summary';
import { Link, redirect, useNavigate } from 'react-router';

const Cart = () => {
  

  const cartItems = useSelector(state => state.cart.cartItems);
  return (
   <>
    <Titel title="Cart" />
    <div className='w-full flex gap-4 p-2'>
      <div className='w-2/3'>
      {
        cartItems && cartItems.length >0 ?
        cartItems.map((item,inx)=>{
          return(
           <CartItem item ={item} key={inx}/>
          )
        })
        :
        <p className='w-full text-xl text-red-900'>No Cart items</p>
      }
      {cartItems.length >0  &&
      <div className='w-full flex justify-end gap-4'>
      <button className='p-2 mt-2 bg-blue-600 rounded-md text-white'
       >
        <Link to={"/checkout"}>Checkout</Link> </button>
      </div>
}
      </div>
      <div className='w-1/3 '>
      {cartItems.length >0  &&
      <Summary />
}
      </div>
    </div>
   </>
  )
}

export default Cart