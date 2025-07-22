import "./App.css";
import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {
      id: "1",
      date: new Date(2023, 7, 15),
      title: "Insurance",
      price: 100,
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2023, 3, 25),
      title: "Book",
      price: 10,
      location: "Delhi",
    },
    {
      id: "3",
      date: new Date(2023, 10, 11),
      title: "Pen",
      price: 1,
      location: "Hyderabad",
    },
    {
      id: "4",
      date: new Date(2023, 1, 14),
      title: "Laptop",
      price: 200,
      location: "Mumbai",
    },
  ];
  return (
    <>
      <h1>Let's get Started</h1>
      {expenses.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            price={expense.price}
          />
        );
      })}
    </>
  );
}

export default App;
