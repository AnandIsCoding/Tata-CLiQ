import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../mini-Compo/ProductCard'

function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  if(cartItems.length<1){
    return <h1 className='text-center text-xl font-semibold my-14'>No Items Found</h1>
  }
  return (
    <div>

        {
          cartItems.map((product,index)=>{
            return <ProductCard key={product.id} product={product} />
          })
        }


      
    </div>
  )
}

export default Cart
