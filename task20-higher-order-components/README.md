# Higher Order Component (HOC) Example - WithLoader

This project demonstrates the concept of **Higher Order Components (HOC)** in React using a simple loader functionality.

---

## 📌 What is a Higher Order Component?

A **Higher Order Component (HOC)** is a function that takes a component and returns a new component with additional props or behavior.

> Think of it as a wrapper that enhances or modifies the original component.

---

## 💡 Project Explanation

### Components:

1. **`UserList`**:
   - A basic component that renders a list of users (strings) inside an unordered list (`<ul>`).

2. **`WithLoader`** (HOC):
   - Wraps any component and adds a loading delay using `useEffect`.
   - Shows `Loading...` for 2 seconds, then renders the wrapped component with passed data.

3. **`App`**:
   - Uses the `WithLoader` HOC to wrap `UserList` and passes a dummy list of users.

---
