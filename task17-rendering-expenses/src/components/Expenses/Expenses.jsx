
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
    
    return (
        <div className="expenses">
            {
                props.expenses.map((expense)=>{
                    return(
                        <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                        />
                    )
                })
            }
        </div>
    )
}

export default Expenses;

