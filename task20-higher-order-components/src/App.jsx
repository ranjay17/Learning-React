
import './App.css'
import UserList from './userList'
import WithLoader from './withLoader'

function App() {
  const list = ["Abc", "Def", "Xyz"]
  const EnhancedComponent = WithLoader(UserList, list)
  return (
    <>
    <h1>Higher Order Component</h1>
     <EnhancedComponent />
    </>
  )
}

export default App
