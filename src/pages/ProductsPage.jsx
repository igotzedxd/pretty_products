import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Products from "../components/products/Products";
import styles from "./productsPage.module.css";

function ProductsPage() {
  const { data: products } = useFetch("https://dummyjson.com/products", "products");
  const [activeFilter, setActiveFilter] = useState("All");
  const [myFavorites, setMyFavorites] = useState(
    JSON.parse(localStorage.getItem("favoriteProducts") || "[]")
  );

  if (!products) {
    return <p>No products found.</p>;
  }

  const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className={`page`}>
      <div className={styles.filterBtns}>
        <p
          className={activeFilter === "All" && styles.active}
          onClick={() => setActiveFilter("All")}
        >
          All
        </p>
        {uniqueCategories.map((category) => (
          <p
            className={category === activeFilter && styles.active}
            onClick={() => setActiveFilter(category)}
            key={category}
          >
            {category}
          </p>
        ))}
      </div>
      <Products
        products={filteredProducts}
        myFavorites={myFavorites}
        setMyFavorites={setMyFavorites}
      />
    </div>
  );
}

export default ProductsPage;
