import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsimg from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


export default function Header(props) {
 
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PandaFoods</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsimg} alt="food app" />
      </div>
    </Fragment>
  );
}


