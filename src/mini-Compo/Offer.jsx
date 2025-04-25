import React from "react";

const Offer = () => {
  return (
    <div className="relative rounded-lg mx-4 md:mx-32 my-6 p-4 flex justify-between items-center text-white overflow-hidden h-28 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1613052271194-5427710fb39d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyJTIwYmFubmVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-lg"></div>

      {/* Center Text */}
      <div className="text-center mx-auto z-10">
        <h2 className="text-2xl font-bold">MEGA SAVINGS</h2>
        <p className="text-lg mt-2">
          Flat ₹300 off on orders above ₹2,000 with code{" "}
          <span className="font-bold">CLIQWEB300</span>
        </p>
      </div>
    </div>
  );
};

export default Offer;
