import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const dummyExpenses = [
  { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
  { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
  { id: 3, title: "Pen", date: new Date(2024, 2, 10), price: 1 },
  { id: 4, title: "Laptop", date: new Date(2025, 9, 17), price: 200 },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevState)=>{
      return [expense,...prevState]
    })
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
