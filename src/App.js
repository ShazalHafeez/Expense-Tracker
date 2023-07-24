import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    type: "Houshold Grocerry",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    type: "Houshold Electronics",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    type: "Business",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    type: "Houshold",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  function addExpenseHandler(enteredExpense) {
    //this is how we update state which depends on its previous state by using a funtion
    setExpenses((prevExpenses) => {
      return [enteredExpense, ...prevExpenses];
    });
  }
  return (
    <div>
      <Card>
        <NewExpense onAddExpense={addExpenseHandler} />
      </Card>

      <Expenses expenses_list={expenses} />
    </div>
  );
}

export default App;
