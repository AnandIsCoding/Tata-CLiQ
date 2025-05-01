import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../mini-Compo/ProductCard'
// Cart page 
function Cart() {
  // subscribe to cart.items
  const cartItems = useSelector(state => state.cart.items)
  // if cartItems length is 0 or less than display No Items Found
  if(cartItems.length<1){
    return <div className='flex justify-center items-center min-h-[50vh] text-xl font-semibold '>
      <h1 >No Items Found</h1>
    </div>
  }
  return (
    // if cartItems length is greater than 0 than map it 
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
