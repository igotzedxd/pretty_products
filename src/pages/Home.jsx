import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/header/Header";
import Favorites from "../components/favorites/Favorites";
import Newsletter from "../components/newsletter/Newsletter";
function Home() {
  const { data: products } = useFetch("https://dummyjson.com/products", "products");

  return (
    <div className={`page `}>
      <Header title="favorites" />
      <Favorites products={products} />
      {products && <Newsletter />}
    </div>
  );
}

export default Home;
