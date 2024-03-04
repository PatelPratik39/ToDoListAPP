import Header from "./components/header";
import Form from "./components/Form";
import { useState } from "react";
// import Todo from './components/Todo';
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      {/* <Todo /> */}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
