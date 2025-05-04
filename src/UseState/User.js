import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial"; // Import the context to access the shared state

const User = () => {

    const { username } = useContext(AppContext); // Use the context to get the username

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};

export default User;
