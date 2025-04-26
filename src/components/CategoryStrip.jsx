import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy images for categories
const dummyImages = {
  "electronics": "https://assets.tatacliq.com/medias/sys_master/images/63600371630110.png",
  "jewelery": "https://assets.tatacliq.com/medias/sys_master/images/63600371433502.png",
  "men's clothing": "https://assets.tatacliq.com/medias/sys_master/images/63600371105822.png",
  "women's clothing": "https://assets.tatacliq.com/medias/sys_master/images/63600371040286.png",
};

const CategoryStrip = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex overflow-x-auto space-x-3 md:space-x-8 justify-center mt-4 p-2">
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => (
          <div
            onClick={() => navigate(`/${category}`)}
            key={index}
            className="flex flex-col items-center min-w-[80px] overflow-x-auto md:min-w-[120px] rounded-lg transition-transform cursor-pointer hover:scale-105"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 overflow-hidden ">
              <img
                src={dummyImages[category] || "https://imgs.search.brave.com/xB7b4USWdiv7-WjdECumNFjgyQS--KDYZWCOdAxjq5E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2LzUxMnB4SWNv/bi1zdW5zZXRfcGhv/dG9fbm90X2ZvdW5k/LnBuZw"}
                alt={category}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <p className="text-xs md:text-sm font-semibold capitalize text-center mt-2">
              {category}
            </p> */}
          </div>
        ))
      ) : (
        // Shimmer placeholders for categories
        [...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[80px] md:min-w-[120px] rounded-lg animate-pulse"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-400 rounded-lg"></div>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryStrip;
