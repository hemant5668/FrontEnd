import React from 'react'
import Expenseform from './Expenseform'
import './NewExpenses.css'

export default function NewExpenses(props) {
    const savexpensedatahandler=(enteredexpensedata)=>{
        const expensedata={
            ...enteredexpensedata,
            id:Math.random().toString()
        };
        // console.log(expensedata)
        props.addexpense(expensedata)
    }

  return (
    <div className='new-expense'>
        <Expenseform onsaveexpensedata={savexpensedatahandler}/>
    </div>
  )
}
