import React, { useEffect ,useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

export default function HeaderCartButton(props) {
  const [buttonIsHighLight, setbuttonIsHighLight] = useState(false)
  const cartCtx = useContext(CartContext);

  const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnclasses=`${classes.button} ${buttonIsHighLight?classes.bump:''}`;
  useEffect(()=>{
    if(cartCtx.items.length===0){
      return; 
    }
    setbuttonIsHighLight(true)

    const timer=setTimeout(() => {
      setbuttonIsHighLight(false)
    }, 300);
    return ()=>{
      clearTimeout(timer)
    };
},[cartCtx.items])

return (
  <button className={btnclasses} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{noOfCartItems}</span>
  </button>
);
}