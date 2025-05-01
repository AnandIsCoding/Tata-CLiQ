import React from "react";
// Bank Offers
const BankOffersStrip = () => {
  return (
    <div className="flex justify-center gap-4 mt-6 px-4 w-full">
      {/* First Image, ICICI Bank Offer */}
      <img
        src="https://assets.tatacliq.com/medias/sys_master/images/64684496584734.jpg"
        alt="Offer 1"
        className="w-[50%] md:w-[45%] rounded-md shadow-md cursor-pointer"
      />

      {/* Second Image, Paytm Bank Offer  */}
      <img
        src="https://assets.tatacliq.com/medias/sys_master/images/62309792808990.jpg"
        alt="Offer 2"
        className="w-[50%] md:w-[45%] rounded-md shadow-md cursor-pointer"
      />
    </div>
  );
};

export default BankOffersStrip;
