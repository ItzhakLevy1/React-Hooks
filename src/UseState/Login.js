import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial"; // Import the context to access the shared state

const Login = () => {

    const { setUsername } = useContext(AppContext); // Use the context to get the setUsername function
    
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
