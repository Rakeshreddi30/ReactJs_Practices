import React from "react";
import Items from "./Items";
import Quantity from "./Quantity";
import styles from './cartItem.module.css'
const CartItem = ({ id, item, price, quantity, changeQuantity }) => {
  return (
    <>
      <div className={styles.items}>
        <div className={styles.labels}>
        <Items id={id} item={item} price={price} />
        </div>
        <div className={styles.quantity}>
        <Quantity quantity={quantity} id={id} changeQuantity={changeQuantity} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
