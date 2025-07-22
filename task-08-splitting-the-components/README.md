# Task 08 - Splitting the Components

In this task, the `ExpenseItem` component was split into smaller reusable components for better modularity and structure.

### ✅ Deliverables:

1. `ExpenseItem.jsx` was split:
   - Created a new `ExpenseDate.jsx` component to handle and display date in formatted JSX blocks.
   - Used props to pass the date from `ExpenseItem` to `ExpenseDate`.

2. `App.jsx` was split:
   - Moved the `expenses` array and its mapping logic into a new component: `Expenses.jsx`.

3. `Expenses.css` was created and imported inside the `Expenses.jsx` file to apply specific styles.

## Goal:
To learn how to split large React components into smaller, reusable pieces and manage clean separation of concerns using props and modular file structure.
