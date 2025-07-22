import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpense) => {
    const expense = { ...enteredExpense, id: Math.random().toString() };
    props.onAddExpense(expense);
    setIsEditing(false);
  };

  const buttonClickHandler = () => {
    setIsEditing(true);
  };

  const cancelFormHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing == false && (
        <button type="button" onClick={buttonClickHandler}>
          Add Expense
        </button>
      )}
      {isEditing == true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
