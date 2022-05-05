import Expenseitem from "./Expenseitem";
import "./Expenses.css";
import Card from "../UI/Card";
import Expensefilter from "./Expensefilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredyear, setfilteredyear] = useState("2022");

  const filterchangehandler = (selectedyear) => {
    setfilteredyear(selectedyear);
  };

  const filteredexpenses= props.items.filter(cool =>{
    return cool.date.getFullYear().toString()===filteredyear;
  })

  return (
    <Card className="expenses">
      <Expensefilter
        selected={filteredyear}
        onchangefilter={filterchangehandler}
      />
      <ExpensesChart expenses={filteredexpenses}/>
      {filteredexpenses.length === 0 ? <p className="expenses-list__fallback">No expense this year</p> : filteredexpenses.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

    </Card>
  );
};

export default Expenses;
