import './ExpenseItems.css'

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
