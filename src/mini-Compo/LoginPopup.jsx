import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import {
  FiUser,
  FiArchive,
  FiHeart,
  FiBell,
  FiGift,
  FiDollarSign,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function LoginPopup() {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div
      style={{ transition: "transform 1s ease-in-out" }}
      className="absolute top-5 right-0 flex flex-col bg-white p-5 shadow-md z-100 min-w-[220px] rounded-md text-black"
    >
      {user ? (
        <div className="flex items-center justify-between mb-4">
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <button
            className="w-full ml-2 px-4 py-2 bg-[#FF0C22] text-white rounded-full cursor-pointer"
            onClick={() => {
              logout({ logoutParams: { returnTo: window.location.origin } });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="px-5 py-2 bg-[#FF0C22] text-white rounded-full cursor-pointer mb-4"
          onClick={() => loginWithRedirect()}
        >
          Login / Signup
        </button>
      )}

      {/* Menu Options */}
      <div
        onClick={() => navigate("/profile")}
        className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer"
      >
        <FiUser />
        <span>My Account</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
        <FiArchive />
        <span>Order History</span>
      </div>
      <div
        onClick={() => navigate("/wishlist")}
        className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer"
      >
        <FiHeart />
        <span>My Wishlist</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
        <FiBell />
        <span>Alerts & Coupons</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
        <FiGift />
        <span>Gift Card</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
        <FiDollarSign />
        <span>CLiQ Cash</span>
      </div>
    </div>
  );
}

export default LoginPopup;
