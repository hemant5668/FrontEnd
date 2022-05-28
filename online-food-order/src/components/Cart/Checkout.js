import React,{useRef,useState} from 'react'
import classes from "./checkOutfrom.module.css"

const isEmpty=(value)=>value.trim()==='';
const isFiveChars=(value)=>value.trim().length===5

export default function Checkout(props) {
  const [formIsValid, setformIsValid] = useState({
    name:true,
    street:true,
    postalCode:true,
    city:true
  })

  const nameInputRef=useRef()
  const streetInputRef=useRef()
  const cityInputRef=useRef()
  const postalInputRef=useRef()
  

  const confirmHandler=(event)=>{
    event.preventDefault();

    const enteredName=nameInputRef.current.value
    const enteredStreet=streetInputRef.current.value
    const enteredCity=cityInputRef.current.value
    const enteredPostal=postalInputRef.current.value

    const enteredNameIsValid=!isEmpty(enteredName)
    const enteredStreetIsValid=!isEmpty(enteredStreet)
    const enteredCityIsValid=!isEmpty(enteredCity)
    const enteredPostalIsValid=isFiveChars(enteredPostal)


    setformIsValid({
      name:enteredNameIsValid,
      street:enteredStreetIsValid,
      postalCode:enteredPostalIsValid,
      city:enteredCityIsValid
    })

    if (!enteredNameIsValid && !enteredCityIsValid && !enteredPostalIsValid && !enteredStreetIsValid){
      return;
    }

    props.onConfirm({
      name:enteredName,
      street:enteredStreet,
      postalCode:enteredPostal,
      city:enteredCity
    })

  }
  const nameConstrolClasses=`${classes.control} ${formIsValid.name ?'':classes.invalid}`;
  const streetConstrolClasses=`${classes.control} ${formIsValid.street ?'':classes.invalid}`;
  const postalConstrolClasses=`${classes.control} ${formIsValid.postalCode ?'':classes.invalid}`;
  const cityConstrolClasses=`${classes.control} ${formIsValid.city ?'':classes.invalid}`;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
        <div className={nameConstrolClasses}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' ref={nameInputRef} />
            {!formIsValid.name && <p>Enter a valid name!</p>}
        </div>
        <div className={streetConstrolClasses}>
            <label htmlFor="street">Street</label>
            <input type="text" id='street' ref={streetInputRef} />
            {!formIsValid.street && <p>Enter a valid street!</p>}
        </div>
        <div className={postalConstrolClasses}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id='postal' ref={postalInputRef}/>
            {!formIsValid.postalCode && <p>Enter a valid Postal Code!</p>}
        </div>
        <div className={cityConstrolClasses}>
            <label htmlFor="city">City</label>
            <input type="text" id='city' ref={cityInputRef}/>
            {!formIsValid.city && <p>Enter a valid City name!</p>}
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}> Cancel</button>
        <button className={classes.submit}> Confirm</button>
        </div>
    </form>
  )
}
