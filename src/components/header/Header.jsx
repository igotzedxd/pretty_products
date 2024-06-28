import styles from "./header.module.css";
import useFetch from "../../hooks/useFetch";

function Header({ title }) {
  const { data: product } = useFetch("https://dummyjson.com/products/1");
  if (!product) return null;

  console.log(product);
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <img src={product.images[0]} />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Header;
