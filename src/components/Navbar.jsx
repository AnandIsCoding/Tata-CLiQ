import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiBell, FiGift, FiDollarSign ,FiUser, FiArchive,} from "react-icons/fi";
import LoginPopup from "../mini-Compo/loginPopup";

import React from "react";
import { dropdownContent } from "../utils/menuData";
import { useNavigate } from "react-router-dom";
import SearchResultTab from "../mini-Compo/SearchResultTab";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActivetab] = useState(null);
  const [showLoginOptions, setLoginOptions] = useState(false)

  const navigate = useNavigate()

  return (
    <nav className="w-full sticky top-0 bg-[#212121] text-white md:px-28 z-100">
      <div className="flex items-center justify-between px-6 py-3  text-sm bg-black">
        <span className="font-semibold"></span>
        <div className="flex items-center gap-6 ">
          <span className="cursor-pointer">CLiQ Cash</span>
          <span className="cursor-pointer hidden md:block">Gift Card</span>
          <span className="cursor-pointer hidden md:block">CLiQ</span>
          <span className="cursor-pointer">Track Orders</span>
          <span className="cursor-pointer relative" onMouseEnter={()=>setLoginOptions(true)}  onMouseLeave={()=>setLoginOptions(false)}>Sign In / Sign Up
              {
                showLoginOptions === true && <LoginPopup/>
              }
          </span>
        </div>
      </div>

      <div className=" z-50 shadow-md bg-[#212121]">
        <div className="flex items-center justify-around pl-[-5px] md:px-32 py-3">
          {/* Logo */}
          <div className="text-xl font-bold text-white cursor-pointer" onClick={()=>navigate('/')}>
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
                  {Object.entries(dropdownContent.Categories).map(
                    ([heading, items]) => (
                      <div className="column" key={heading}>
                        <h4>{heading}</h4>
                        <ul>
                          {items.map((item) => (
                            <li className="hover:underline" key={item}>{item}</li>
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
                {Object.entries(dropdownContent.Brands).map(([heading, items]) => (
              <div className="column" key={heading}>
                <h4>{heading}</h4>
                <ul>
                  {items.map((item) => (
                    <li className="hover:underline" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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
              {
                search.length > 0 && <SearchResultTab search={search} setSearch={setSearch} />
              }
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 text-2xl text-white">
              <FiHeart className="cursor-pointer hover:scale-120 duration-150" />
              <FiShoppingBag className="cursor-pointer hover:scale-120 duration-150" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
