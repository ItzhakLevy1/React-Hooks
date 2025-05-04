import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

const ContextTutorial = () => {

  const [username, setUsername] = useState("");

  return (
    <div>
      <Login/>
      <User/>
    </div>
  );
}

export default ContextTutorial;
