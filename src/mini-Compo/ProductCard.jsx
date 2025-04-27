import React from 'react'
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
function ProductCard({product}) {
      const navigate = useNavigate();
    
  const handleNavigation = (id, event) => {
    navigate(`/product/${id}`);
  };

  const handleCart = (event) => {
    event.stopPropagation();
  };

  const handleWishlist = (event) => {
    event.stopPropagation();
  };
  return (
    <div
                 key={product?.id}
                 onClick={(event) => handleNavigation(product?.id, event)}
                 className="bg-white cursor-pointer p-4 relative overflow-hidden group rounded-md hover:shadow-lg transition-all"
               >
                 
                 <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                   <button
                     className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                     onClick={(event) => handleWishlist(event, product?.id)}
                   >
                     <IoMdHeartEmpty size={20} />
                   </button>
                   <button
                     className=" p-1  rounded-full hover:bg-gray-200 cursor-pointer"
                     onClick={(event) => handleCart(event, product?.id)}
                   >
                    <MdOutlineShoppingBag size={20} />
                   </button>
                 </div>
   
                 {/* Image */}
                 <img
                   src={product?.image}
                   alt={product?.title}
                   className="h-44 w-full object-contain mb-4"
                 />
   
                 {/* Details */}
                 <div className="text-gray-500 text-xs mb-1">Brand Name</div>
                 <div className="text-gray-800 font-semibold text-sm line-clamp-2 min-h-[40px]">{product?.title}</div>
   
                 {/* Price Section */}
                 <div className="mt-3 flex items-center gap-2">
                   <span className="font-bold text-lg text-black">₹{(product?.price*80)}</span>
                   <span className="text-gray-400 line-through text-sm">₹{(product?.price *84 * 10)}</span>
                   <span className="text-green-600 text-xs font-semibold">10% off</span>
                 </div>
   
                 {/* Rating */}
                 <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                   <FaStar className="text-yellow-400" size={14} />
                   {product.rating?.rate ?? 4.5} ({product?.rating?.count ?? 10})
                 </div>
               </div>
  )
}

export default ProductCard
