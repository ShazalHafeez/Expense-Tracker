import "./ExpenseForm.css";
import { useState } from "react";
export default function ExpenseForm(props) {
  //States for storing user input
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredType, setType] = useState("");
  //onchange handler functions
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

function typeChangeHandler(event) {
  setType(event.target.value);
}

  function submitHandler(event){
    event.preventDefault();
    const expenseData = {
      title : enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      type: enteredType
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setType("");

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Type</label>
          <input
            type="text"
            onChange={typeChangeHandler}
            value={enteredType}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={"2021-01-01"}
            max={"2023-06-23"}
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
