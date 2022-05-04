import Expenseitem from "./Expenseitem";
import './Expenses.css';
import Card from "../UI/Card";
import Expensefilter from "./Expensefilter"
import React,{useState} from 'react'


function Expenses(props) {
  const [filteredyear, setfilteredyear] = useState('2022')

  const filterchangehandler=(selectedyear)=>{
        setfilteredyear(selectedyear)
  }

  return (
    <Card className="expenses">
      <Expensefilter selected={filteredyear} onchangefilter={filterchangehandler}/>
      <Expenseitem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <Expenseitem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </Card>
  );
}

export default Expenses