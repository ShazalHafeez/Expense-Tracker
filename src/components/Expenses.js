import ExpenseItems from "./ExpenseItems";
import "./Expenses.css"
export default function Expenses(props) {
  //console.log(props[0].amount);

  return (
    <div className="expenses">
      <ExpenseItems
        title={props.expenses_list[0].title}
        amount={props.expenses_list[0].amount}
        date={props.expenses_list[0].date}
      />
      <ExpenseItems
        title={props.expenses_list[1].title}
        amount={props.expenses_list[1].amount}
        date={props.expenses_list[1].date}
      />
      <ExpenseItems
        title={props.expenses_list[2].title}
        amount={props.expenses_list[2].amount}
        date={props.expenses_list[2].date}
      />
      <ExpenseItems
        title={props.expenses_list[3].title}
        amount={props.expenses_list[3].amount}
        date={props.expenses_list[3].date}
      />
    </div>
  );
}
