import React from 'react'
import { getPrice } from '../utilitys/ItemInfo'
import { removeCart } from '../redux/cart'
import { useDispatch } from 'react-redux'

const CartItem = (props) => {
    const dispatch = useDispatch()
  return (
<>
<div>{props.item.title}</div>
<div className='w-full flex gap-4 p-2 mb-3 pb-4 border-b-[1px] relative'>
    <span className='absolute right-0 top-0 text-gray-500 cursor-pointer'
    onClick={()=>dispatch(removeCart(props.item))}>X</span>
<div className='h-[100px] w-[100px]'>
        <img src={props.item.image} alt={props.item.title} className='w-full h-full object-contain ' />
            </div>
    <div className='w-2/3'>
    <h2 className='text-xl text-blue-600 cursor-pointer hover:text-blue-950'>{props.item.title}</h2>
                <p className='text-xl text-gray-600'>Price: {getPrice(props.item.price)}</p>
   <p>QTY:{props.item.qty}</p> 
    </div>
</div>
</>
  )
}

export default CartItem