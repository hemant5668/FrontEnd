import React,{useRef,useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

export default function MealItemForm(props) {         //MAin comp

  const [validAmount, setvalidAmount] = useState(true)
  const amountInputRef = useRef()

  const onSubmitHandler=(event)=>{
    event.preventDefault();

    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;

    if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
        setvalidAmount(false);
        return;
    }
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue:'1'
        }}
      />
      <button>+ Add</button>
      {!validAmount && <p>enter amount in right fromat</p> }
    </form>
  );
}
