import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setYear] = useState("All");
  function yearChangeHandler(selectedYear) {
    setYear(selectedYear);
  }
  let filteredExpenses = props.expenses_list;
  if (filteredYear !== "All") {
    filteredExpenses = props.expenses_list.filter((expenses) => {
      return expenses.date.getFullYear().toString() === filteredYear;
    });
  }

  return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={yearChangeHandler}
        />
        <ExpensesList list={filteredExpenses} />
      </Card>
  );
}
