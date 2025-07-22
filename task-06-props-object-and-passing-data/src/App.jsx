
import './App.css'
import ExpenseItems from './components/ExpenseItems'

function App() {
  return (
    <>
      <h1>Let's get Started</h1>
      <ExpenseItems
        date={new Date(2023, 7, 15)}
        location="Bangalore"
        title="Insurance"
        price="50"
      />
      <ExpenseItems
        date={new Date(2023, 3, 25)}
        location="Delhi"
        title="Book"
        price="20"
      />
      <ExpenseItems
        date={new Date(2023, 10, 11)}
        location="Hyderabad"
        title="Pen"
        price="5"
      />
      <ExpenseItems
        date={new Date(2023, 1, 14)}
        location="Mumbai"
        title="Laptop"
        price="200"
      />
    </>
  );
}

export default App
