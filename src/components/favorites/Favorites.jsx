import { useState, useEffect } from "react";
import styles from "./favorites.module.css";
import Products from "../products/Products";

function Favorites({ products }) {
  const [userFavorite, setUserFavorite] = useState(true);
  const [myFavorites, setMyFavorites] = useState(
    JSON.parse(localStorage.getItem("favoriteProducts") || "[]")
  );

  if (!products) {
    return <p>No products found.</p>;
  }

  const filteredProducts = userFavorite
    ? products.filter((product) => product.rating > 4.6)
    : myFavorites;

  return (
    <div className={styles.container}>
      <div className={styles.favorites}>
        <div className={styles.headings}>
          <h2
            className={`${styles.heading} ${userFavorite && styles.active}`}
            onClick={() => setUserFavorite(true)}
          >
            User Favorites
          </h2>

          <h2
            onClick={() => setUserFavorite(false)}
            className={`${styles.heading} ${!userFavorite && styles.active}`}
          >
            Your Favorites
          </h2>
        </div>
        <Products
          products={filteredProducts}
          myFavorites={myFavorites}
          setMyFavorites={setMyFavorites}
        />
      </div>
    </div>
  );
}

export default Favorites;
