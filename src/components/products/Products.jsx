import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/product'
import { toast } from 'react-toastify'
import Item from '../../pages/Item'
import Titel from '../../pages/Titel'

const Products = () => {
  const dispatch = useDispatch()
  const productsList = useSelector(state => state.products);
console.log(productsList)

useEffect(() => {
  dispatch(getProducts());
}, [dispatch]);
  return (
    <>
    <Titel title="Products" />
    <div className='w-full grid grid-cols-5 gap-4'>
    {
      productsList?.products && 
      productsList?.products.map((item,inx)=>{
        return(
          <div key={inx} >
            <Item item={item} />
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Products