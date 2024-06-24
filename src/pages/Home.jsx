import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/header/Header";
import Favorites from "../components/favorites/Favorites";

function Home() {
  const { data: products } = useFetch("https://dummyjson.com/products", "products");

  return (
    <div className={`page `}>
      <Header />
      <Favorites products={products} />
    </div>
  );
}

export default Home;
