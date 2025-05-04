import React from "react";

const Login = ({ setUsername }) => {
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
