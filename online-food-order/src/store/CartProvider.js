import CartContext from "./cart-context";
import React from "react";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
  }
  return {
    items: updatedItems,
    totalamount: updatedTotalAmount,
  };
};

export default function CartProvider(props) {                             //MAIN FUNCTION
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {};
  dispatchCartAction({ type: "REMOVE", item: id });

  const cartContext = {
    items: [],
    totalamount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
