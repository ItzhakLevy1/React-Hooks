import React from "react";

const User = ({ username }) => {    // The ability to accept props from parent component
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};

export default User;
