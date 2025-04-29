import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../mini-Compo/ProductCard'

function Wishlist() {
  const wishlistItems = useSelector(state => state.wishlist.items)
  if(wishlistItems.length<1){
    return <h1 className='text-center text-xl font-semibold my-14'>No Items Found in your Wishlist</h1>
  }
  return (
    <div>

        {
          wishlistItems.map((product,index)=>{
            return <ProductCard key={product.id} product={product} />
          })
        }


      
    </div>
  )
}

export default Wishlist