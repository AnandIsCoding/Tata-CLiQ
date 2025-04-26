// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
          {/* Tata Marketplace */}
          <div>
            <h4 className="font-semibold mb-4">Tata MarketPlace</h4>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#">Shopping</a></li>
              <li><a href="#">Offers & Promotions</a></li>
              <li><a href="#">Payments</a></li>
              <li><a href="#">Cancellation</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">CliQ And PiQ</a></li>
              <li><a href="#">Returns Policy</a></li>
              <li><a href="#">Electronics Return Policy</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Reviews Guidelines</a></li>
              <li><a href="#">Furniture Return Policy</a></li>
              <li><a href="#">Replacement Policy</a></li>
            </ul>
          </div>

          {/* My Tata CliQ */}
          <div>
            <h4 className="font-semibold mb-4">My Tata CLiQ</h4>
            <ul className="space-y-2">
              <li><a href="#">My Account</a></li>
              <li><a href="#">My Orders</a></li>
              <li><a href="#">My Shopping Bag</a></li>
              <li><a href="#">My Wishlist</a></li>
            </ul>
          </div>

          {/* Tata CLiQ Offerings */}
          <div>
  <h4 className="font-semibold mb-4">Tata CLiQ Offerings</h4>
  <div className="flex flex-wrap gap-2 text-gray-600">
    {[
      "Watches for Men", "Campus Shoes", "Sandals for Men", "Sneakers for Men",
      "Reebok Shoes", "Cotton Kurtis", "Woodland Shoes", "Jumpsuits", "Allen Solly",
      "Sparx Shoes", "Gold Rings", "Formal Shoes for Men", "Sports Shoes for Men",
      "Wallets for Men", "Ladies Watches", "Trolley Bags", "Handbags for Women"
    ].map((item, index) => (
      <p key={index}>
        <a href="#" className=" text-sm">{item} | </a>
      </p>
    ))}
  </div>
</div>

        </div>

       
        <div className="mt-10 pt-6 text-center flex flex-col  md:flex-row bg-zinc-100  justify-between">
          {/* App Download Section android and Ios icon*/}
          <div className="mb-4 flex justify-center items-center space-x-4">
            <span className="font-semibold">Download App</span>
            <img src="/android.png" alt="Android" className="w-6" />
            <img src="/IOS.png" alt="iOS" className="w-6" />
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#"><img src="/fb.png" alt="Facebook" className="w-8" /></a>
            <a href="#"><img src="/twitter.png" alt="Twitter" className="w-8" /></a>
            <a href="#"><img src="/insta.png" alt="Instagram" className="w-8" /></a>
            <a href="#"><img src="/youtube.png" alt="YouTube" className="w-8" /></a>
            <a href="#"><img src="/linked.png" alt="LinkedIn" className="w-8" /></a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500">© 2025 Tata CLiQ | All rights reserved</p>
        </div>
      </div>



        {/* text content */}

        <div className="space-y-8 text-gray-700 text-md mx-2 md:mx-24 leading-relaxed mt-14">
  <div>
    <h4 className="font-semibold mb-2">
      Tata CLiQ FASHION: Shop Online with India's most trusted destination
    </h4>
    <p>
      Genuine products from all the top brands get delivered right to your doorstep. Our sleek, immersive design allows you to easily navigate between categories and brand stores so that you can find a wide selection of 
      <a href="#" className="underline mx-1">womenswear</a>, 
      {/* <a href="#" className="underline mx-1">menswear</a>, 
      <a href="#" className="underline mx-1">kidswear</a>, 
      <a href="#" className="underline mx-1">footwear</a>, 
      <a href="#" className="underline mx-1">watches</a>, 
      <a href="#" className="underline mx-1">accessories</a>  */}
      online. You can also check our great offers and get the best prices on various products across lifestyle, fashion, and more.
    </p>
  </div>

  <div>
    <h4 className="font-semibold mb-2">
      Online Shopping: Fast & convenient with the click of a button
    </h4>
    <p>
      The upside of online shopping at Tata CLiQ FASHION online store, is that you'll save on time and most importantly money with Tata Cliq FASHION offers. It's as simple as comparing products and prices online before making the right buy. 
      What's more, you also have the option to pay for your favourite brands and products using our easy EMI options. 
      Of course, you can buy and try – in the convenience of your home. Returns are easy too: We'll pick up your returns for free or you can also drop off the goods at the nearest brand store.
    </p>
  </div>

  <div>
    <h4 className="font-semibold mb-2">
      Tata CLiQ FASHION Shopping App: just a few clicks on Android & iOS
    </h4>
    <p>
      Download the Android app from the 
      <a href="#" className="underline mx-1">Play Store</a> 
      or the iOS app from 
      <a href="#" className="underline mx-1">Apple App Store</a> 
      and get set to enjoy a range of benefits. Apart from the best deals, amazing offers and the latest styles online, the app also gives you the flexibility to shop at your convenience. 
      Use the easy share options to share your shopping with your friends and family to ensure you're buying something perfect. 
      With constant updates and a host of new features being introduced constantly, enjoy a shopping experience that you'll love.
    </p>
  </div>

  <div>
    <h4 className="font-semibold mb-2">
      Tata CLiQ FASHION: The most genuine place for Fashion and Lifestyle
    </h4>
    <p>
      With an exclusive Brand Store for 
      <a href="#" className="underline mx-1">Westside Online</a> 
      we have most of your trendy shopping needs taken care of. Make Tata CLiQ FASHION your online shopping destination and get the best deals on your favourite brands, with 100% genuine products. 
      Be it jewellery or makeup, you can count on Tata CLiQ FASHION for receiving only the most authentic products.
    </p>
  </div>
</div>





    </footer>
  );
};

export default Footer;
