import React from "react";
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart,clearCart } from "../redux/slices/cart.slice";
import { addToWishlist,removeFromWishlist } from "../redux/slices/wishlist.slice";
import { useLocation } from "react-router-dom";


function ProductCard({ product }) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items);
    const wishlistItems = useSelector((state) => state.wishlist.items || [])

    const location = useLocation();
const isCartOrWishlistPage = location.pathname === "/cart" || location.pathname === "/wishlist";


  const handleNavigation = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCart = (event, product) => {
    event.stopPropagation(); 
  event.preventDefault();
    
  // Double check isAuthenticated
  if (typeof isAuthenticated !== "undefined" && !isAuthenticated) {
    console.log("User not authenticated, redirecting to login...");
    toast('Please login to save your cart.', { icon: "🔒" });
    loginWithRedirect(); 
    return;
  } else {      
      if (cartItems.some((item) => item.id === product?.id)) {
        dispatch(removeFromCart(product));
        toast.success('Product Removed From Cart');
      } else {
        dispatch(addToCart(product));
        toast.success('Product Added To Cart');
      }
    }
  };
  
  const handleWishlist = (event,product) => {
    event.stopPropagation(); // stop navigating
    event.preventDefault();
    if (typeof isAuthenticated !== "undefined" && !isAuthenticated) {
      console.log("User not authenticated, redirecting to login...");
      toast('Please login to save your cart.', { icon: "🔒" });
      loginWithRedirect(); 
      return;
    }else {
      if (wishlistItems.some((item) => item.id === product?.id)) {
        dispatch(removeFromWishlist(product));
        toast.success('Product Removed From Wishlist !!');
      } else {
        dispatch(addToWishlist(product));
        toast.success('Product Added To Wishlist !!');
      }
    }
  };
  
  return (
    <div
      key={product?.id}
      onClick={() => handleNavigation(product?.id)}
      className={`bg-white cursor-pointer p-4 relative overflow-hidden group rounded-md hover:shadow-lg transition-all ${isCartOrWishlistPage ? 'mt-2 md:mt-4 mx-2 md:mx-84 md:px-4' : ''}`}
    >
      <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
        <button
        type="button"  
          className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
          onClick={(event) => handleWishlist(event, product)}
        >
          {
            wishlistItems.some((item)=>item.id === product.id) ? <IoMdHeart size={20} color="red"/> : <IoMdHeartEmpty size={20} color="red" />
          }
        </button>
        <button
        type="button"  
          className=" p-1  rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={(event) => handleCart(event, product)}
        >
        {/* filter if in cartItems any cart's id is equal to product's id, if yes than it will return that item, otherwise [] so need to check if returned result's length>0 */}
          {cartItems.filter((item) => item.id === product.id).length>0 ? (
            <IoBagHandle color="red" size={20} />
          ) : (
            <MdOutlineShoppingBag color="red" size={20} />
          )}
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
      <div className="text-gray-800 font-semibold text-sm line-clamp-2 min-h-[40px]">
        {product?.title}
      </div>

      {/* Price Section */}
      <div className="mt-3 flex items-center gap-2">
        <span className="font-bold text-lg text-black">
          ₹{(product?.price * 80).toFixed(1)}
        </span>
        <span className="text-gray-400 line-through text-sm">
          ₹{(product?.price * 84 * 10).toFixed(1)}
        </span>
        <span className="text-green-600 text-xs font-semibold">10% off</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
        <FaStar className="text-yellow-400" size={14} />
        {product.rating?.rate ?? 4.5} ({product?.rating?.count ?? 10})
      </div>
    </div>
  );
}

export default ProductCard;
