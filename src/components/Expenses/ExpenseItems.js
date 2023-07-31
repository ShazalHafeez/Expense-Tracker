import "./ExpenseItems.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";

function ExpenseItems(props) {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <h2>{props.type}</h2>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItems;
