import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  function cancelButtonHandler() {
    setShowForm(false);
  }
  function showFormButtonHandler() {
    setShowForm(true);
  }
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  }
  if(showForm){
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButtonHandler}/>
      </div>
    );
  }
return (
  <div className="new-expense">
    <button onClick={showFormButtonHandler}>Add New Expense</button>
  </div>
); 

  
}
