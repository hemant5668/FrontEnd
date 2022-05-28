import React,{useEffect,useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


export default function AvailableMeals() {

  const [Meals, setMeals] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [error, seterror] = useState()


  useEffect(() => {
    const fetchmeals= async() =>{
    const response= await fetch("https://test-http-feb8e-default-rtdb.firebaseio.com/foodapp/meals.json")  

    if(!response.ok){
      throw new Error("Something went wrong")
    }
    const responseData = await response.json()

    const loadedMeals=[];

    for (const key in responseData ){
      loadedMeals.push({
        id:key,
        name:responseData[key].name,
        description:responseData[key].description,
        price:responseData[key].price
      });
    }
    setMeals(loadedMeals)
    setisLoading(false)
    };

  fetchmeals().catch((error) =>{
    setisLoading(false)
    seterror(error.message)
  });
  }, [])

  if(isLoading){
    return (<section className={classes.mealloading}>
      <p>Loading...</p>
    </section>)
  }
  if (error){
    return(
      <section className={classes.mealloading}>
        <p>{error}</p>
      </section>
    )
  }

  const mealslist = Meals.map((meal) => (
    <li>
      <MealItem
        name={meal.name}
        description={meal.description}
        price={meal.price}
        id={meal.id}
        key={meal.id}
      />
    </li>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
}
