import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import ListTodos from "./components/ListTodos/ListTodos";
import GlobalStyles from "./globalStyles";

interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todos[]>([]);

  console.log(todos);

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    setTodos(data.splice(0, 20));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navigation text="Todo List" />
      <ListTodos />
    </>
  );
};

export default App;
