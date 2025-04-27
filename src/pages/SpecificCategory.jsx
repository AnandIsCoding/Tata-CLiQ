import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../mini-Compo/ProductCard";
import ShimmerCard from "../mini-Compo/ShimmerCard";


function SpecificCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/products/category/${category}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // if (loading) {
  //   return (
  //     <div className="text-center py-10 text-lg font-semibold">Loading...</div>
  //   );
  // }

  return (
    <div className="flex flex-col lg:flex-row px-2 md:px-10 py-8 gap-8 min-h-screen bg-gray-50 w-screen overflow:hidden">
      {/* Sidebar */}
      <div className="bg-white rounded-md p-2  w-full lg:w-64">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-gray-700">Department</h3>
          <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <input type="checkbox" className="accent-black" defaultChecked />
            Men's Clothing
          </label>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-700">Category</h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            {[
              "Ethnic Wear",
              "Inner & Nightwear",
              "Casual Wear",
              "Formal Wear",
              "Sports Wear",
              "Swim & Beachwear",
            ].map((cat, index) => (
              <label key={index} className="flex items-center gap-2 w-1/2">
                <input type="checkbox" className="accent-black" />
                {cat}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold capitalize text-center">
          {category}
        </h1>
        <p className="font-normal mb-6 capitalize text-center text-gray-600">
          {products.length} Products
        </p>

        <div className="grid gap-1 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
          {loading
            ? // Show shimmer cards when loading
              [...Array(5)].map((_, index) => <ShimmerCard key={index} />)
            : // Show real products when loaded
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default SpecificCategory;
