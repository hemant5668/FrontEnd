import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";

const Initial_Expense = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 450,
    date:new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 1000,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e3",
    title: "Luxuary Car Insurance",
    amount: 1500,
    date: new Date(2023, 5, 12)
  }
];

function App() {
  
 
  const [prevExpense, setprevExpense] = useState(Initial_Expense)
  
  const addexpensehandler=(expense)=>{
    // console.log("app")
    // console.log(expense)
    
    setprevExpense((prevExpense)=>{
      return [expense,...prevExpense];
    });

}

  return (
    <div className="App">
      <h2>Let's get Started</h2>
      <NewExpenses addexpense={addexpensehandler}/>
      <Expenses items={prevExpense}/>
    </div>
  );
}

export default App;
