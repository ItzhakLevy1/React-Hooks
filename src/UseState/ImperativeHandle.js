import React, { useRef } from "react";
import Button from "./Button";

// This is the parent component, it will call the child button component's method using the ref.
// The useRef hook is used to create a ref that can be attached to the Button component.
//ref is a special prop that is passed to the Button component, allowing the parent component to access the child component's instance methods.
const ImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      CLICK THE PARENT BUTTON TO CALL THE CHILD BUTTON FUNCTION
      <button
        onClick={() => {
          buttonRef.current.alterTuggle();
        }}
      >
        🧔🏻‍♂️Button from parent component
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
