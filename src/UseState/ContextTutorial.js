import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

const ContextTutorial = () => {
    
  const [username, setUsername] = useState(""); // setUsername will monitor the value of username

  return (
    <div>
      <Login setUsername={setUsername} />    {/* A parent component passing props to child component */}
      <User username={username} />           {/* A parent component passing props to child component */}
    </div>
  );
}

export default ContextTutorial;
