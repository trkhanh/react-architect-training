import React from "react";
import AddTodo from "./redux/containers/AddToDo";
import VisibleTodoList from "./redux/containers/VisibleTodoList";
import Footer from "./components/todo/Footer";
import Notes from "./components/note/Notes";

const App = () => (
  <div style={{ maxWidth: "80%", margin: "auto" }}>
    {/* <AddTodo />
    <VisibleTodoList />
    <Footer /> */}
    <Notes />
  </div>
);

export default App;
