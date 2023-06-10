import styles from "./PriceDisplay.module.css";

function PriceDisplay({ price }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className={styles.wrapper}>
      <div className={styles.animated}>{formattedPrice}</div>
    </div>
  );
}

export default PriceDisplay;
