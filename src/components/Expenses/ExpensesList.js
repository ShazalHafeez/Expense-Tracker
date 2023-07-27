import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";
export default function ExpensesList(props) {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.list.map((expenses) => (
        <ExpenseItems
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
          type={expenses.type}
        />
      ))}
    </ul>
  );
}
