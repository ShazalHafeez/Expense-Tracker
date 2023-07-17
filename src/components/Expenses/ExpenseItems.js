import "./ExpenseItems.css"
import { useState } from "react";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);
  function updateClickHandler() {
    setTitle("Updated "+props.title);
  }
  function restoreClickHandler() {
    setTitle(props.title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <h2>{props.type}</h2>
      </div>
      <button onClick={updateClickHandler}>Update Title</button>
      <button onClick={restoreClickHandler}>Restore Title</button>
    </Card>
  );
}

export default ExpenseItems;
