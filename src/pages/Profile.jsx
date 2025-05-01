import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function Profile() {
  // extract user from useAuth0
  const {user} = useAuth0()

//  if not logged in no user found than display text, Please login to create Account !!
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-gray-600">Please login to create Account !!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
      {/* image with fallback image url */}
        <img 
          src={user?.picture || "https://asset.cloudinary.com/dm0rlehq8/9ca8c823fc1fe9c0bb0b03f6c0f575c1"} 
          alt="Profile" 
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        {/* username and email */}
        <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
        <p className="text-gray-600 mb-6">{user?.email}</p>
        {/* button edit profile, show a toast onClick */}
        <button
          className="bg-[#FF0C22] cursor-pointer text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
          onClick={() => toast.error('Edit Profile On The Way!')}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
