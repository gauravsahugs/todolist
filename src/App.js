import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todoList, setTodoList] = useState([{}]);

  const addTodo = () => {
    setTodoList([...todoList, { message, dueDate }]);

    setMessage("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleChangeDate = (e) => {
    e.preventDefault();
    setDueDate(e.target.value);
  };
  const handleClear = () => {
    setTodoList([]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.target.style.setProperty("text-decoration", "line-through");
    e.target.style.color = "#82E0AA";
  };
  const handleDoubleClick = (e) => {
    e.preventDefault();
    e.target.style.setProperty("text-decoration", "");
    e.target.style.color = "";
  };

  const date = new Date();
  const timestamp =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  return (
    <div className="app">
      <div className="app_body">
        <div className="header">
          <h1>Todo-List </h1>
          <div className="inputfield">
            <input
              className="input_message"
              type="text"
              onChange={handleChange}
              placeholder="Add your task here"
              value={message}
            />
            <input type="date" onChange={handleChangeDate} value={dueDate} />
            Task Completion date
            <button className="add_todo" onClick={addTodo}>
              Add Todo
            </button>
          </div>
          <button className="clearbtn" onClick={handleClear}>
            Empty List
          </button>
        </div>
        <div className="listitem">
          {todoList.map((todo) => {
            return (
              <div>
                <li
                  className="todolistitem"
                  onClick={handleClick}
                  onDoubleClick={handleDoubleClick}
                >
                  {todo.message}
                </li>

                <div className="timestamp">
                  Task pinned on: {timestamp}
                  Finish task by:{todo.dueDate}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
