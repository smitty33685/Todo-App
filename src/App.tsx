import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Lists from "./components/Lists/Lists";
import GlobalStyles from "./globalStyles";

export const Context = React.createContext<Todo[]>([]);

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    setTodos(data.splice(0, 20));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Context.Provider value={todos}>
      <GlobalStyles />
      <Navigation text="Todo List" />
      <Lists />
    </Context.Provider>
  );
};

export default App;
