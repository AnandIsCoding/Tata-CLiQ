import { useState, useEffect } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag
} from "react-icons/fi";
import LoginPopup from "../mini-Compo/LoginPopup";

import React from "react";
//import { dropdownContent } from "../utils/menuData";
import { NavLink, useNavigate } from "react-router-dom";
import SearchResultTab from "../mini-Compo/SearchResultTab";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import buildFakeStoreMenu from '../utils/menuData'

const Navbar = () => {
  const [menuData, setMenuData] = useState({ Categories: {}, Brands: {} });

  useEffect(() => {
    async function loadMenu() {
      const data = await buildFakeStoreMenu();
      setMenuData(data);
    }

    loadMenu();
  }, []);

  const [search, setSearch] = useState("");
  const [activeTab, setActivetab] = useState(null);
  const [showLoginOptions, setLoginOptions] = useState(false);
  const cartItems = useSelector((state) => state.cart.items || [])
  const wishlistItems = useSelector((state) => state.wishlist.items || [])
 const {user} = useAuth0()
  const {isAuthenticated} = useAuth0()



  const navigate = useNavigate();

  return (
    <nav className="w-full sticky top-0 bg-[#212121] text-white md:px-28 z-100">
      <div className="flex items-center justify-between px-6 py-3  text-sm bg-black">
        <span className="font-semibold"></span>
        <div className="flex items-center gap-6 ">
          <span className="cursor-pointer">CLiQ Cash</span>
          <NavLink to='cliq-care' className="cursor-pointer hidden md:block">Cliq Care</NavLink>
          <span className="cursor-pointer hidden md:block">CLiQ</span>
          <NavLink to='/orders' className="cursor-pointer">Track Orders</NavLink>
          <span
            className="cursor-pointer relative"
            onMouseEnter={() => setLoginOptions(true)}
            onMouseLeave={() => setLoginOptions(false)}
          >
            {user ? 'Account options' : 'Sign In / Sign Up'}
            {showLoginOptions === true && <LoginPopup />}
          </span>
        </div>
      </div>

      <div className="z-50 shadow-md bg-[#212121]">
        <div className="flex items-center justify-around pl-[-5px] md:px-32 py-3">
          {/* Logo */}
          <div
            className="text-xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/tata-Cliq-logo.png"
              alt="navbar-logo"
              className=" h-6 md:h-10 w-auto filter invert"
            />
          </div>

          {/* Categories */}
          <div className="hidden relative lg:flex gap-6 text-lg font-medium text-white">
          <span
              className="cursor-pointer hover:bg-white h-full px-6 py-3 hover:text-black duration-300"
              onMouseEnter={() => setActivetab("categories")}
              onMouseLeave={() => setActivetab(null)}
            >
              Categories
              {activeTab === "categories" && (
                <div className="mega-dropdown">
                  {Object.entries(menuData.Categories).map(
                    ([heading, items]) => (
                      <div className="column" key={heading}>
                        <h4>{heading}</h4>
                        <ul className="gap-10">
                          {items.map((item) => (
                            <NavLink key={item.id} to={`/product/${item.id}`} className="hover:underline text-sm m-2" >
                              {item.title}
                            </NavLink>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
            </span>
            <span
              className="cursor-pointer hover:bg-white hover:text-black px-6 py-3 duration-300"
              onMouseEnter={() => setActivetab("brands")}
              onMouseLeave={() => setActivetab(null)}
            >
              Brands
              {activeTab === "brands" && (
                <div className="mega-dropdown">
                  {Object.entries(menuData.Brands).map(
                    ([heading, items]) => (
                      <div className="column" key={heading}>
                        <h4>{heading}</h4>
                        <ul>
                          {items.map((item) => (
                            <li className="hover:underline" key={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
            </span>
          </div>

          {/* Search and icons */}
          <div className="flex items-center gap-4 relative">
            <FiSearch className="absolute w-full left-3 text-white" />
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products"
                className="px-4 py-3 pl-8 h-full text-md border rounded-lg w-48 md:w-96 outline-none focus:ring-2 bg-zinc-700 focus:ring-pink-500"
              />
              {search.length > 0 && (
                <SearchResultTab search={search} setSearch={setSearch} />
              )}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 text-3xl text-white relative">
  <FiHeart
    onClick={() => navigate("/wishlist")}
    className="cursor-pointer hover:scale-110 transition-transform duration-200 hover:text-gray-300"
  />
  {/* Badge */}
  {wishlistItems.length > 0 && (
      <span className="absolute -top-2 right-9 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {wishlistItems.length}
      </span>
    )}

  <div className="relative">
    <FiShoppingBag
      onClick={() => navigate("/cart")}
      className="cursor-pointer hover:scale-110 transition-transform duration-200 hover:text-gray-300"
    />
    
    {/* Badge */}
    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cartItems.length}
      </span>
    )}
  </div>
</div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
