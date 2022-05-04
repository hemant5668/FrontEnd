import React, {useState} from "react";
import "./Expenseform.css"

export default function Expenseform(props) {
    const [entertitle, setentertitle] = useState('');
    const [enteramount, setenteramount] = useState('')
    const [enterdate, setenterdate] = useState('')

const titlechangehandler=(event)=>{
    setentertitle(event.target.value)
    console.log(event.target.value)
}
const amountchangehandler=(event)=>{
    setenteramount(event.target.value)
    console.log(event.target.value)
}

const datechangehandler=(event)=>{
    setenterdate(event.target.value)
    console.log(event.target.value)
}

const submithandler=(event)=>{
    event.preventDefault();

    const expensedata={
        title:entertitle,
        amount:enteramount,
        date:new Date(enterdate)
    };
    // console.log(expensedata)
    props.onsaveexpensedata(expensedata)
    setentertitle('');
    setenteramount('');
    setenterdate('');
};

    return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entertitle}onChange={titlechangehandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteramount} min="0.1" step="0.1" onChange={amountchangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2025-01-01" value={enterdate} onChange={datechangehandler} />
        </div>
      </div >
      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
