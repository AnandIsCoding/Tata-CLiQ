import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../mini-Compo/ProductCard'

function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  if(cartItems.length<1){
    return <div className='flex justify-center items-center min-h-[50vh] text-xl font-semibold '>
      <h1 >No Items Found</h1>
    </div>
  }
  return (
    <div className='min-h-[50vh]'>

        {
          cartItems.map((product,index)=>{
            return <ProductCard key={product.id} product={product} />
          })
        }


      
    </div>
  )
}

export default Cart
