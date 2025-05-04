import React, { useRef } from "react";
import Button from "./Button";

// This is the parent component, it will call the child button component's method using the controlRef.
// The useRef hook is used to create a controlRef that can be attached to the Button component.
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
      <button onClick={() => buttonRef.current?.toggleMessage()}>  {/* The ? is optional chaining, it will only call the function if it exists */}
        🧔🏻‍♂️ Button from parent component
      </button>
      <Button controlRef={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
