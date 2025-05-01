import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaHeart,
  FaTruck,
  FaMoneyBillAlt,
  FaUndoAlt,
  FaShareAlt,
} from "react-icons/fa";
import ShareDialog from "../mini-Compo/ShareDialog";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { addToCart, removeFromCart } from "../redux/slices/cart.slice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slices/wishlist.slice";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareDialog, setShowshareDialog] = useState(false);
  const [showMoreoffer, setShowmoreoffer] = useState(false);
  // import baseUrl from .env
  const baseUrl = import.meta.env.VITE_BASE_URL;
//  subscribe cart and wishlist
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
// on id or baseurl change fetch product by id and set product to product with is initially null
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${baseUrl}/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, baseUrl]);

  // if loading show a loading text
  if (loading) {
    return (
      <div className="text-center py-10 font-semibold text-lg">Loading...</div>
    );
  }
 // handle cart btn handler
  const handleCart = (event, product) => {
    event.stopPropagation(); // ✨ ADD THIS AS FIRST LINE
    event.preventDefault();

 // Double check isAuthenticated, if user not loged in than loginWithRedirect
    if (typeof isAuthenticated !== "undefined" && !isAuthenticated) {
      console.log("User not authenticated, redirecting to login...");
      toast("Please login to save your cart.", { icon: "🔒" });
      loginWithRedirect();
      return;
    } else {
       // if isAuthenticated, if user logged in than 
      // if product id is equal to any item in cartItems of user than remove from cart, dispatch removeFromCart
      // otherwise add to cart, dispatch addToCart
      if (cartItems.some((item) => item.id === product?.id)) {
        dispatch(removeFromCart(product));
        toast.success("Product Removed From Cart");
      } else {
        dispatch(addToCart(product));
        toast.success("Product Added To Cart");
      }
    }
  };

  // handle wishlist btn
  const handleWishlist = (event, product) => {
    event.stopPropagation(); // stop navigating
    event.preventDefault();
    // Double check isAuthenticated, if user not loged in than loginWithRedirect
    if (typeof isAuthenticated !== "undefined" && !isAuthenticated) {
      console.log("User not authenticated, redirecting to login...");
      toast("Please login to save your cart.", { icon: "🔒" });
      loginWithRedirect();
      return;
    } else {
      // if isAuthenticated, if user logged in than 
      // if product id is equal to any item in wishlsitItems of user than remove from wishlist, dispatch removeWishlsiCart
      // otherwise add to wishlist, dispatch addToWishlist
      if (wishlistItems.some((item) => item.id === product?.id)) {
        dispatch(removeFromWishlist(product));
        toast.success("Product Removed From Wishlist !!");
      } else {
        dispatch(addToWishlist(product));
        toast.success("Product Added To Wishlist !!");
      }
    }
  };

  // fallback if no product found than show a text PRoduct Not Found
  if (!product) {
    return (
      <div className="text-center min-h-[70vh] py-10 font-semibold text-lg">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-0 md:mx-auto p-4 md:p-8 overflow-x-hidden min-h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-2">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className=" p-2 rounded-md bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col gap-4 overflow-x-hidden">
          {/* Title + Heart */}
          <div className="flex items-start justify-between">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <button
              onClick={(event) => handleWishlist(event, product)}
              className="p-2 rounded-full  cursor-pointer"
            >
              {wishlistItems.some((item) => item.id === product.id) ? (
                <FaHeart size={20} className="text-red-600" />
              ) : (
                <FaHeart size={20} className="text-gray-500" />
              )}
            </button>
          </div>

          <div className="text-gray-600">{product.category}</div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-black">
              ₹{product.price}
            </div>
            <div className="text-gray-400 line-through">
              ₹{product.price * 10}
            </div>
            <div className="text-green-600 font-semibold text-sm">10% off</div>
          </div>

          {/* Offers */}
          <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 space-y-2">
            <p>🎉 10% off on ICICI Bank Cards</p>
            <p>🎉 15% off on HSBC Premier Cards</p>
            <p>🎉 Flat 12% off on ₹3999 | Use Code: SUMMER12</p>
            <p>🎉 25% off for New Customers | Use Code: NEW25</p>
            <p
              onClick={() => setShowmoreoffer((prev) => !prev)}
              className="text-pink-600 font-semibold cursor-pointer"
            >
              {showMoreoffer ? "See less" : "See 3 More Offers"}
            </p>
            <p className={`${showMoreoffer ? "block" : "hidden"}`}>
              🎉 10% off on Hii Bank Cards
            </p>
            <p className={`${showMoreoffer ? "block" : "hidden"}`}>
              🎉 15% off on Byee Premier Cards
            </p>
            <p className={`${showMoreoffer ? "block" : "hidden"}`}>
              🎉 Flat 19% off on ₹3999 | Use Code: SUMMER12
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-400 px-4 py-2 rounded hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Shipping Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Ship To</h3>
              <label
                className="text-pink-600 text-sm font-semibold cursor-pointer"
                htmlFor="pincode"
              >
                Change Pincode
              </label>
            </div>
            <input
              type="text"
              placeholder="Delhi, 110001"
              className="border rounded-md p-2  text-gray-700"
              id="pincode"
            />

            <div className="flex items-center gap-3 text-sm mt-2">
              <FaTruck />
              <p>
                Delivery by{" "}
                <span className="font-semibold text-black">
                  {new Date(
                    Date.now() + 5 * 24 * 60 * 60 * 1000
                  ).toDateString()}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaMoneyBillAlt />
              <p>
                Cash on Delivery |{" "}
                <span className="text-green-600 font-semibold">Available</span>
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaUndoAlt />
              <p>7 Days Return and Replacement available</p>
            </div>

            <div className="border p-2 rounded-md text-sm mt-4">
              <p className="text-gray-700">
                Sold By{" "}
                <span className="font-semibold">
                  Arvind Life Style Brands Ltd
                </span>
              </p>
            </div>
          </div>

          {/* Share + Buy + Add to Bag */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setShowshareDialog((prev) => !prev)}
              className="p-3 border rounded-md cursor-pointer"
            >
              <FaShareAlt size={20} />
            </button>
            <button
              onClick={(event) => handleWishlist(event, product)}
              className="p-3 border cursor-pointer rounded-md"
            >
              {wishlistItems.some((item) => item.id === product?.id) ? (
                <FaHeart size={20} color="red" />
              ) : (
                <FaHeart size={20} />
              )}
            </button>
            {/* buy now button with custom toast  */}
            <button
              onClick={() =>
                toast.custom((t) => (
                  <div
                    className={`${
                      t.visible ? "animate-enter" : "animate-leave"
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                  >
                    <div className="flex-1 w-0 p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://www.tatacliq.com/images/icons/icon-144x144.png"
                            alt="App_Logo"
                          />
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            Tata CLiQ
                          </p>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            Sorry !! We are not accepting new Order Right Now
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent cursor-pointer bg-zinc-50 rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))
              }
              className="flex-1 cursor-pointer bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md font-semibold"
            >
              Buy Now
            </button>
            <button
              onClick={(event) => handleCart(event, product)}
              className="flex-1 border cursor-pointer border-pink-600 text-pink-600 hover:bg-pink-50 py-3 rounded-md font-semibold"
            >
              {cartItems.some((item) => item.id === product.id)
                ? "Remove From Bag"
                : "Add To Bag"}
            </button>
          </div>
        </div>
      </div>
      {showShareDialog && (
        <ShareDialog
          showShareDialog={showShareDialog}
          setShowshareDialog={setShowshareDialog}
        />
      )}
    </div>
  );
}

export default ProductPage;
