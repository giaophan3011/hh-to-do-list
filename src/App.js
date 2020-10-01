import React, { useState } from "react";
import "./App.css";
import TodoTable from "./TodoTable";

const Todolist = () => {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };

  const deleteTodo = (event) => {
    event.preventDefault();
    console.log(typeof event.target.id);
    setTodos(todos.filter((t, i) => i !== Number(event.target.id)));
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          onChange={inputChanged}
          placeholder="Description"
          name="description"
          value={todo.desc}
        />
        <input
          type="text"
          onChange={inputChanged}
          placeholder="dd/mm/yyyy"
          name="date"
          value={todo.date}
        />
        <input type="submit" value="Add" />
      </form>
      <TodoTable data={todos} handleDelete={deleteTodo} />
    </div>
  );
};

export default Todolist;
