import React from 'react'
import { FiUser, FiArchive, FiHeart, FiBell, FiGift, FiDollarSign } from "react-icons/fi";

function LoginPopup() {
  return (
    <div style={{ transition: 'transform 1s ease-in-out'}} className="absolute top-5  flex flex-col bg-white p-5 shadow-md z-100 min-w-[180px] rounded-md text-black">
    <button className='px-5 py-2 bg-[#FF0C22] text-white rounded-full cursor-pointer'>Login / Signup</button>
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer mt-2">
      <FiUser />
      <span>My Account</span>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
      <FiArchive />
      <span>Order History</span>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
      <FiHeart  />
      <span>My Wishlist</span>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
      <FiBell />
      <span>Alerts & Coupons</span>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
      <FiGift   />
      <span>Gift Card</span>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
      <FiDollarSign  />
      <span>CLiQ Cash</span>
    </div>
  </div>
  )
}

export default LoginPopup
