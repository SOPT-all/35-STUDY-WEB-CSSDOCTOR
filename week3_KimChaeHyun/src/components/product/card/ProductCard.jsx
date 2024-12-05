import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const handleMouseOver = (e) => {
    const img = e.currentTarget.querySelector(`img[data-type="product"]`);
    if (img) {
      img.src = product.hoverImage;
    }
  };

  const handleMouseOut = (e) => {
    const img = e.currentTarget.querySelector(`img[data-type="product"]`);
    if (img) {
      img.src = product.image;
    }
  };
  return (
    <div
      className={styles.product}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.imageWrapper}>
        <img
          src="https://cdn.jentestore.io/resource/icon/icon_wishlist_v2.svg"
          className={styles.star}
        />
        <img
          src={product.image}
          alt={product.brand}
          className={styles.productImg}
          data-type="product"
        />
        <div className={styles.overlay}>
          <span>IN STOCK</span>
          <span>49</span>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h3>{product.brand}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
