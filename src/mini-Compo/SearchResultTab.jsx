import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// component that will be dispalyed if searchtext.length is greater that 0, accept search and setSearch props
function SearchResultTab({ search, setSearch }) {
  // product state, and filterd products state, filteing will be done on the basis of if product.title includes search text
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(
          "Error in fetching products in SearchResultTab Component ---->> ",
          error
        );
      }
    };
    fetchProducts();
  }, []);

  // Filter products whenever search input or products change
  useEffect(() => {
    if (!search) {
      setFilteredProducts([]);
      return;
    }
    // filter product.title includes search text, lowercase both
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  const handleNavigationToProduct = (id) => {
    setSearch(""); // clear search
    navigate(`/product/${id}`); // navigate to product page /product/:id
  };
//   on click outside suggestion result box , setSearch('') so that box will disappear
  document.body.addEventListener('click',()=>{
        setSearch('')
  })

  return (
    <div className="absolute border border-gray-300 bg-white flex flex-col gap-2 text-black sm:w-screen md:w-full px-1 md:px-8 py-4 min-h-[60px] max-h-[500px] overflow-y-auto z-20 shadow-md rounded-md">
      <span
        className="top-1 left-100 text-2xl text-black font-semibold cursor-pointer self-end"
        onClick={() => setSearch("")}
      >
        X
      </span>
      {/* fallback if filtered product length is 0 */}
      {filteredProducts?.length === 0 && search && (
        <div className="p-3 text-gray-500">No products found.</div>
      )}
      {/* if length > 0 than from filteredProducts array slice first 20 products and map them*/}
      {/* onClick of mapped filtered products navigate to that specific product id page */}
      {filteredProducts?.slice(0,20)?.map((item) => (
        <div
          key={item?.id}
          onClick={() => handleNavigationToProduct(item?.id)}
          className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <img
            src={item?.image}
            alt="product_image"
            className="h-12 w-12 object-cover rounded-md flex-shrink-0"
          />
          <span className="text-sm font-medium text-gray-700 line-clamp-1">
            {item?.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SearchResultTab;
