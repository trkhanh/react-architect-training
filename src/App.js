import React from 'react'
import AddTodo from './redux/containers/AddToDo'
import VisibleTodoList from './redux/containers/VisibleTodoList'
import Footer from "./components/Footer";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App