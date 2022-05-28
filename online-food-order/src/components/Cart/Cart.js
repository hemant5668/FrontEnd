import React, { useContext,useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart(props) {
  const [checkout, setcheckout] = useState(false)
  const [dataSubmitting, setdataSubmitting] = useState(false)
  const [dataSubmitted, setdataSubmitted] = useState(false)


  const cartCtx = useContext(CartContext);

  const onAddHandler=(item)=>{
    cartCtx.addItem({...item,amount:1})
  }
  
  const onRemoveHandler=(id)=>{
    cartCtx.removeItem(id)
  }

  const orderHandler=()=>{
    setcheckout(true)
  }
  
  const orderConfirmHandler=(userdata)=>{
    setdataSubmitting(true)
    fetch('https://test-http-feb8e-default-rtdb.firebaseio.com/foodapp/orders.json',{
      method:'POST',
      body:JSON.stringify({
        user:userdata,
        orderedItems:cartCtx.items
      })  
    });
    setdataSubmitting(false)
    setdataSubmitted(true)
    cartCtx.clearCart()
  };

  const cartTotal = `Rs ${cartCtx.totalamount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cart_meal = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            name={item.name}
            price={item.price}
            key={item.id}
            amount={item.amount}
            onAdd={onAddHandler.bind(null,item)}
            onRemove={onRemoveHandler.bind(null,item.id)}
          />
        </li>
      ))}
    </ul>
  );

    const modelAction=<>
       {cart_meal}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span >{cartTotal}</span>
        </div>
        {checkout && <Checkout onConfirm={orderConfirmHandler} onCancel={props.onHideCart}/>}
        {!checkout && <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>}
    </>


  return (
    <Modal onHide={props.onHideCart}>
       {!dataSubmitting && !dataSubmitted && modelAction}
       {dataSubmitting && <p>Order Submitting.....</p>}
       {dataSubmitted && !dataSubmitting && 
       <> 
       <p>Order Accepted</p> 
       <div className={classes.actions}>
       <button className={classes.button} onClick={props.onHideCart}>
            Close
          </button>
       </div>
       </>}
    </Modal>
  );
}
