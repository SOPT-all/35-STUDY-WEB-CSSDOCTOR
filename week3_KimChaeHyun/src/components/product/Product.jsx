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
    <main className={styles.productWrapper}>
      <div className={styles.filter}>
        <select id="sortOptions" value="인기순" className={styles.dropdown}>
          <option value="인기순">인기순</option>
          <option value="최근 등록순">최근 등록순</option>
          <option value="낮은 가격순">낮은 가격순</option>
          <option value="높은 가격순">높은 가격순</option>
          <option value="할인율 높은순">할인율 높은순</option>
        </select>
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
        className={`${styles.grid} ${
          gridSize === 6
            ? styles.small
            : gridSize === 4
            ? styles.medium
            : styles.large
        }`}
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Product;
