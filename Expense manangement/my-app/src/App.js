import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "Rs 450",
      date: new Date(),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: "Rs 1000",
      date: new Date(),
    },
    {
      id: "e3",
      title: "Luxuary Car Insurance",
      amount: "Rs 1500",
      date: new Date(),
    },
  ];

const addexpensehandler=(expense)=>{
  console.log("app")
  console.log(expense)
}

  return (
    <div className="App">
      <h2>Let's get Started</h2>
      <NewExpenses addexpense={addexpensehandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
