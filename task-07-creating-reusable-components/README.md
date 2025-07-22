# Task 07 - Creating Reusable Components

This task focuses on making the `ExpenseItem` component reusable by dynamically rendering multiple items using props and the `map()` method.

### ✅ Deliverables:

1. Each expense in the `expenses` array now includes a `location` property:
   - ID 1 → Bangalore
   - ID 2 → Delhi
   - ID 3 → Hyderabad
   - ID 4 → Mumbai

2. In `App.jsx`, the `ExpenseItem` component is rendered using `.map()` and receives all required props including `location`.

3. The `ExpenseItem` component:
   - Receives props like `date`, `title`, `price`, and `location`
   - Renders a new `<div>` with class `expense-item__location` to show the `location`

## Goal:
Learn how to build reusable React components using `props` and iterate with `.map()` for dynamic rendering.
