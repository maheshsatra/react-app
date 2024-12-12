import React from 'react'
import { getPrice, getTitels } from '../utilitys/ItemInfo'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cart'

const Item = (props) => {
    const dispatch = useDispatch()
    const addToCartItem =(item)=>{       
        dispatch(addToCart(item))
    }
  return (
    <>
    <div className='w-full p-2 border rounded-sm '>
        <div className='h-[200px]'>
        <img src={props.item.image} alt={props.item.title} className='w-full h-full object-contain' />
            </div>
            <div className='w-full mt-2'>
                <h2 className='text-xl text-blue-600 cursor-pointer hover:text-blue-950'>{getTitels(props.item.title)}</h2>
                <p className='text-xl text-gray-600'>{getPrice(props.item.price)}</p>
                <button className='p-2 mt-2 bg-blue-600 rounded-md text-white'
                onClick={()=>addToCartItem(props.item)}>Add To Cart</button>
            </div>
            </div>
    </>
  )
}

export default Item