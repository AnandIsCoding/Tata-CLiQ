import React from "react";
import { FaShoppingBag, FaTag, FaMoneyBill, FaBox, FaUser, FaTruck, FaUndo, FaTools, FaGift } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { FaGlobe, FaShoppingCart } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { BiSolidOffer } from "react-icons/bi";
import { BsCreditCard2FrontFill } from "react-icons/bs";

const helpTopics = [
  { icon: <FaShoppingBag />, title: "Shopping", desc: "Place order, payment types, delivery modes, etc." },
  { icon: <FaTag />, title: "Offers & Promotions", desc: "Deals & offers, redeem offer & coupon, etc." },
  { icon: <FaMoneyBill />, title: "Payments", desc: "Payment options, CoD, UPI, EMI options, etc." },
  { icon: <FaBox />, title: "Orders", desc: "Manage your orders, order status, etc." },
  { icon: <FaUser />, title: "Manage Your Account", desc: "Create account, password reset, etc." },
  { icon: <FaTruck />, title: "Shipping & Delivery", desc: "Track order, shipping charge, delivery issues, etc." },
  { icon: <MdCancel />, title: "Cancellation", desc: "Order cancellation, refund status, etc." },
  { icon: <FaUndo />, title: "Returns & Refunds", desc: "Return product, return pickup, refund modes, etc." },
  { icon: <FaTools />, title: "Installation & Warranty", desc: "Product warranty, product installation, etc." },
  { icon: <FaGift />, title: "CLiQ Cash", desc: "Redeem gift cards, manage CLiQ points, etc." },
];

const otherIssues = [
  { icon: <FiPackage />, label: "Product related" },
  { icon: <FaGlobe />, label: "Website related" },
  { icon: <FaShoppingBag />, label: "Selling" },
  {icon:<HiMiniShoppingCart/>, label:'Buying'},
  {icon:<BiSolidOffer/>, label:'Promotion and Offers'},
  {icon:<BsCreditCard2FrontFill/>, label:'EGV / CLiQ Point'}


];

function CliqCare() {
  return (
    <div className="px-24 py-10 bg-gray-100 min-h-screen">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">All Help Topics</h2>
          <ul className="space-y-4">
            {helpTopics.map((topic, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-sm mt-1">{topic.icon}</span>
                <div>
                  <h4 className="font-sm text-gray-800">{topic.title}</h4>
                  <p className="text-xs text-gray-500">{topic.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 space-y-6">
          {/* CliqCare Card */}
          <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold mb-1">CLiQ Care</h2>
              <p className="text-sm text-gray-600">Your one stop solution center. We are happy to help you.</p>
            </div>
            <img src="https://www.tatacliq.com/src/account/components/img/cliqCare.svg" alt="Support" className="w-28 h-28 object-contain hidden md:block" />
          </div>

          {/* Recent Orders Card */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img src="https://www.tatacliq.com/src/account/components/img/noLogin.svg" alt="Orders" className="mx-auto w-40 mb-4" />
            <h3 className="font-semibold text-lg">Need help with recent orders?</h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              You have to login to TATA CLiQ app in order to view your recent orders.
            </p>
            <button className="text-pink-600 font-semibold underline cursor-pointer">LOGIN NOW</button>
          </div>

          {/* Other Issues Grid */}
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Other Issues</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-md bg-pink-100 text-center hover:bg-pink-200 transition cursor-pointer"
                >
                  <div className="flex justify-center text-2xl mb-2 text-pink-400 hover:text-pink-500">{issue.icon}</div>
                  <div className="font-medium text-pink-800">{issue.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CliqCare;
