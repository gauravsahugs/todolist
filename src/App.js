import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = function () {
    setTodoList([...todoList, message]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <div className="app">
      <div className="app_body">
        <div className="header">
          <h1>Todo-List </h1>
          <input
            className="input_message"
            type="text"
            onChange={handleChange}
            placeholder="write here"
            value={message}
          />
          <button className="add_todo" onClick={addTodo}>
            Add Todo
          </button>
        </div>
        <div className="listitem">
          {todoList.map((todo) => {
            return <li>{todo}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
