import "./Expensedate.css"

function Expensedate(props){
    const month = props.date.toLocaleDateString("en-US", { month: "long" });
    const date = props.date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = props.date.toLocaleDateString("en-US", { year: "numeric" });
  
    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{date}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    )
}

export default Expensedate