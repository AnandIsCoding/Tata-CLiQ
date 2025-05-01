// Function to build the navigation menu with categorized products from the FakeStore API
async function buildFakeStoreMenu() {
  try {
    // Step 1: Fetch all product categories
    const categoryResponse = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await categoryResponse.json();

    // Step 2: Initialize menu data structure
    const menuData = {
      Categories: {
        "Men's Fashion": [],
        "Women's Fashion": [],
        Electronics: [],
        Jewelery: []
      },
      Brands: {
        "Top Brands": ["Nike", "Adidas", "Puma", "Levi's"]
      }
    };

    // Step 3: Fetch products for each category and organize into menuData
    for (const category of categories) {
      try {
        const productResponse = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const products = await productResponse.json();

        const formattedProducts = products.map(p => ({
          id: p.id,
          title: p.title
        }));

        switch (category) {
          case "men's clothing":
            menuData.Categories["Men's Fashion"] = formattedProducts;
            break;
          case "women's clothing":
            menuData.Categories["Women's Fashion"] = formattedProducts;
            break;
          case "electronics":
            menuData.Categories["Electronics"] = formattedProducts;
            break;
          case "jewelery":
            menuData.Categories["Jewelery"] = formattedProducts;
            break;
          default:
            console.warn(`Unhandled category: ${category}`);
        }
      } catch (productError) {
        console.error(`Error fetching products for category "${category}":`, productError);
      }
    }

    // Step 4: Return the final menu data
    return menuData;
  } catch (err) {
    console.error("Error building menu:", err);
    return {
      Categories: {},
      Brands: {}
    };
  }
}

export default buildFakeStoreMenu;
