import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({imageUrl,redirect}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`${redirect}`)} className="mx-4 md:mx-24 md:px-14 mt-4 md:py-12 cursor-pointer">
      <img
        src={imageUrl}
        alt="Banner"
        className="w-full h-auto rounded-xl object-cover"
      />
      
    </div>
  );
};

export default Banner;
