import React, { useState } from 'react'
import CartItem from './CartItem'
import Total from './Total'
import styles from'./container.module.css';

let array = [
    {id:1, item:"ChickenBiryani", price:100, quantity:0},
    {id:2, item:"Noodles", price:60, quantity:0},
    {id:3, item:"MuttonBiryani", price:150, quantity:0},
    {id:4, item:"FiredRice", price:70, quantity:0},
  ]
const Container = () => { 
    const[items, setItems] = useState(array)

    const changeQuantity = (id,value)=>{
       let updateQuantity = items.map((item)=>{
        if(item.id === id){
          const newQuantity = item.quantity+value;
          return{...item,  quantity:newQuantity>=0?newQuantity:item.quantity} 
        }
      return item
      })
         setItems(updateQuantity)   
  }

  const totalPrice = items.reduce(function (val, element) {
    // this reduce function will sum all the elements which ever we want to any mathematcial operation
    return val + element.price * element.quantity;
  }, 0);
  return (
    <>
     <div className={styles.container}>
       <div className={styles.cart}>
           {items.map((element) => {
            return (
           <CartItem
            key={element.id}
            changeQuantity={changeQuantity}
            {...element}
            />
        );
      })}
      </div>
      <div className={styles.total}>
      <Total total={totalPrice} />
      </div>
     </div>
    </>
  );
}

export default Container