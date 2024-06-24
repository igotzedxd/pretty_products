import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaHeartBroken } from "react-icons/fa";
import styles from "./products.module.css";

function Product({ products, myFavorites, setMyFavorites }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [hoverId, setHoverId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (myFavorites.length > 0) {
      const favoriteIds = myFavorites.map((favorite) => favorite.id);
      setFavoriteIds(favoriteIds);
    }
  }, [myFavorites]);

  const handleFavorite = (e, product, type) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavorites =
      type === "add"
        ? [...myFavorites, product]
        : myFavorites.filter((favorite) => favorite.id !== product.id);
    setMyFavorites(newFavorites);
    localStorage.setItem("favoriteProducts", JSON.stringify(newFavorites));
  };

  return (
    <div className={styles.products}>
      {products?.map((product) => (
        <div className={styles.product} key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          {favoriteIds.includes(product.id) ? (
            hoverId === product.id ? (
              <FaHeartBroken
                className={styles.favBtn}
                onClick={(e) => handleFavorite(e, product, "remove")}
                onMouseOver={() => !isMobile && setHoverId(product.id)}
                onMouseLeave={() => !isMobile && setHoverId(null)}
              />
            ) : (
              <FaHeart
                className={styles.favBtn}
                onClick={(e) => handleFavorite(e, product, "remove")}
                onMouseOver={() => !isMobile && setHoverId(product.id)}
                onMouseLeave={() => !isMobile && setHoverId(null)}
              />
            )
          ) : (
            <FaRegHeart
              className={styles.favBtn}
              onClick={(e) => handleFavorite(e, product, "add")}
              onMouseOver={() => !isMobile && setHoverId(product.id)}
              onMouseLeave={() => !isMobile && setHoverId(null)}
            />
          )}
        </div>
      ))}
      {!products && <p>No products found.</p>}
    </div>
  );
}

export default Product;
