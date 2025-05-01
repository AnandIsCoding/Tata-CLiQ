import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../mini-Compo/ProductCard'
// Wishlist page 
function Wishlist() {
  // subscribe to wishlist
  const wishlistItems = useSelector(state => state.wishlist.items)
  // if wishlist length is less than 1 than show text No Items Found in your Wishlist
  if(wishlistItems.length<1){
    return <h1 className='text-center text-xl font-semibold my-14'>No Items Found in your Wishlist</h1>
  }
  return (
    <div>
  {/* map wishlist items */}
        {
          wishlistItems.map((product,_)=>{
            return <ProductCard key={product.id} product={product} />
          })
        }


      
    </div>
  )
}

export default Wishlist