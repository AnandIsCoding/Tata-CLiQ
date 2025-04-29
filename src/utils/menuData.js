async function buildFakeStoreMenu() {
  const categories = await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json());

  const menuData = {
    Categories: {
      "Men's Fashion": [],
      "Women's Fashion": [],
      Electronics: [],
      Jewelery: []
    },
    Brands: {
      "Top Brands": ["Nike", "Adidas", "Puma", "Levi's"] // Static fallback
    }
  };

  for (const category of categories) {
    const products = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json());

      switch (category) {
        case "men's clothing":
          menuData.Categories["Men's Fashion"] = products.map((p) => ({
            id: p.id,
            title: p.title,
          }));
          break;
        case "women's clothing":
          menuData.Categories["Women's Fashion"] = products.map((p) => ({
            id: p.id,
            title: p.title,
          }));
          break;
        case "electronics":
          menuData.Categories["Electronics"] = products.map((p) => ({
            id: p.id,
            title: p.title,
          }));
          break;
        case "jewelery":
          menuData.Categories["Jewelery"] = products.map((p) => ({
            id: p.id,
            title: p.title,
          }));
          break;
      }
      
  }

  return menuData;
}
export default buildFakeStoreMenu