import ProductCard from "./card/ProductCard";
import { PRODUCTS } from "./../../mock/productList";
import styles from "./Product.module.css";
import { useState } from "react";

const Product = () => {
  const [gridSize, setGridSize] = useState(4);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setGridSize(size);
  };

  return (
    <>
      <div className={styles.filter}>
        <select
          id="gridSize"
          value={gridSize}
          onChange={handleGridSizeChange}
          className={styles.dropdown}
        >
          <option value="6">작게</option>
          <option value="4">보통</option>
          <option value="2">크게</option>
        </select>
      </div>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
