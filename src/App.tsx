import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Lists from "./components/Lists/Lists";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import GlobalStyles from "./styles/globalStyles";
import { TodoObj, NewTodo } from "./types/interfaces";

export const Context = React.createContext<TodoObj[]>([]);

const App = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json();

    setTodos(data);
  };

  const addTodo = async (todo: NewTodo) => {
    const id = Math.floor(Math.random() * 1000);
    const newTodo = { id, ...todo };

    const config = {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    };

    const response = await fetch("http://localhost:5000/todos", config);
    const data = await response.json();

    setTodos([...todos, data]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Context.Provider value={todos}>
      <GlobalStyles />
      <Navigation text="Todo List" />
      <CreateTodo addTodo={addTodo} />
      <Lists />
    </Context.Provider>
  );
};

export default App;
