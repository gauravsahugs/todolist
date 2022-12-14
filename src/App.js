import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const inputfieldElement = document.getElementById("input_message");
    const inputfieldDateElement = document.getElementById("input_message_date");
    if (
      inputfieldElement?.value !== "" &&
      inputfieldDateElement?.value !== ""
    ) {
      setTodoList([
        ...todoList,
        {
          message: inputfieldElement?.value,
          dueDate: inputfieldDateElement?.value,
        },
      ]);

      inputfieldElement.value = "";
      inputfieldElement.placeholder = "Add your task here";
      inputfieldDateElement.value = "";
    } else {
      inputfieldElement.placeholder = "Task field cannot be empty.";
    }
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
              id="input_message"
              className="input_message"
              type="text"
              placeholder="Add your task here"
            />
            <input id="input_message_date" type="date" />
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
          {todoList.map((todo, i) => {
            return (
              <div key={todo?.message}>
                <li
                  className="todolistitem"
                  onClick={handleClick}
                  onDoubleClick={handleDoubleClick}
                >
                  {todo.message}
                </li>

                <div className="timestamp">
                  <div>
                    <p> Task pinned on: </p>
                    <p>{timestamp}</p>
                  </div>
                  <div>
                    <p>Finish task by:</p>
                    <p>{todo.dueDate}</p>
                  </div>
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
