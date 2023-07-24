import { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses(props) {
  console.log(props.expenses_list[0].date.getFullYear());
  const [filteredyear, setYear] = useState("2020");
  function yearChangeHandler(selectedYear) {
    setYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredyear}
        onChangeFilter={yearChangeHandler}
      />
      {props.expenses_list.map((expenses) => (
           <ExpenseItems
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
          type={expenses.type}
        />       
       
      ))}
    </Card>
  );
}