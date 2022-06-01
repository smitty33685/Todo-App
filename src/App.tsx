import React from "react";
import Navigation from "./components/Navigation/Navigation";
import GlobalStyles from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navigation text="Todo List" />
    </>
  );
};

export default App;
