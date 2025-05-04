import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null); // Create a context to share state between components

const ContextTutorial = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>  {/* Provide the context value to child components */}
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default ContextTutorial;
