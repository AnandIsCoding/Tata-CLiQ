import React from "react";

const Banner = ({imageUrl}) => {
  return (
    <div className="mx-4 md:mx-24 md:px-14 mt-4 md:py-12 cursor-pointer">
      <img
        src={imageUrl}
        alt="Banner"
        className="w-full h-auto rounded-xl object-cover"
      />
      
    </div>
  );
};

export default Banner;
