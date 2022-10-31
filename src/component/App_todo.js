import React, { useState, useEffect } from "react";

function App_todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const onAddTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    saveData(newTodos);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Конячка</h2>
      <p><iframe src="https://giphy.com/embed/EzPcW7ee0cPRYBCkv4" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th>
              <input
                type="text"
                id="todoInput"
                className="form-control"
                placeholder="Додати нову конячку"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
            </th>
            <th>
              <button className="btn btn-primary btn-block" onClick={onAddTodo}>
                {" "}
                Додати нову конячку 
              </button>
            </th>
          </tr>
        </thead>

        <thead>
          <tr>
            <th scope="col" colSpan="2">
              Конячки:
            </th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody id="table">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.todo}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  {" "}
                  Видалити конячку{" "}
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App_todo;