import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const DUMMY_CART = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
];

export default function Cart(props) {
  const cart_meal = (
    <ul className={classes["cart-items"]}>
      {DUMMY_CART.map((cartitems) => (
        <li>
          {cartitems.name} {cartitems.price}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHideCart}>
      <div>
        {cart_meal}
        <div>
          <span className={classes.total}>Total Amount</span>
          <span>50</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
}
