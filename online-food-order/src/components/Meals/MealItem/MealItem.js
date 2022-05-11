import React from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
    const roundprice=`Rs ${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
        <div >
            <h1>{props.name}</h1>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{roundprice}</div>
            
        </div>
        <div>
            <MealItemForm id={props.id}/>
        </div>
    </li>
  )
}
