import React,{useContext} from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

export default function MealItem(props) {
    const CartCtx=useContext(CartContext)

    const roundprice=`Rs ${props.price.toFixed(2)}`;

    const onAddToCartHandler=(amount)=>{
      CartCtx.addItem({
        name:props.name,
        id:props.id,
        amount:amount,
        price:props.price
      })
    }


  return (
    <li className={classes.meal}>
        <div >
            <h1>{props.name}</h1>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{roundprice}</div>
            
        </div>
        <div>
            <MealItemForm onAddToCart={onAddToCartHandler}/>
        </div>
    </li>
  )
}
