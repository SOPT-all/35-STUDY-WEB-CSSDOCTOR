import styles from './ProductCard.module.css';
import wish from '../../assets/icon_wishlist_v2.svg';

const ProductCard = () => {
  return (
    <li className={styles.product_card}>
      <button className={styles.product_wish}>
        <img src={wish} alt='wish icon' className={styles.product_wish} />
      </button>

      <div className={styles.product_img}>
        <img
          src='https://cdn.jentestore.io/resource/products/1613649/a046422a_1613649_2.jpg'
          alt='product'
        />
      </div>

      <ul className={styles.product_info}>
        <li className={styles.product_info_brand}>Dior</li>
        <li className={styles.product_info_name}>GARDEN 네오프렌 앵클 부츠</li>
        <li className={styles.product_info_price}>₩ 450,000</li>
      </ul>

      <div className={styles.product_delivery}>국내배송</div>
    </li>
  );
};

export default ProductCard;
