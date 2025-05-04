import React, { useEffect, useState } from "react";

const Button = ({ controlRef }) => {
  const [toggle, setToggle] = useState(false);

  // useEffect assigns a method (toggleMessage) to controlRef.current, which can be called from the parent component.
  useEffect(() => {
    controlRef.current = {
      toggleMessage: () => setToggle((toggle) => !toggle),
    };
  });

  return (
    <>
      <button>👶 Button from child component</button>
      {toggle && (
        <span>
          This message is from the CHILD button component <br />
          <br />
          BUT <br />
          <br />
          It is triggered from the PARENT button component
        </span>
      )}
    </>
  );
};

export default Button;

/* 
 The forwardRef function is a higher-order component that allows you to pass a ref through a component to one of its children.
 This is useful when you want to access a child component's DOM node or instance methods from a parent component.
 In this case, the Button component is wrapped with forwardRef, allowing the parent component to access its ref and call its methods directly.
 The useImperativeHandle hook is used to customize the instance value that is exposed to parent components when using ref.
 It allows you to define which properties and methods should be accessible from the parent component.
 */
