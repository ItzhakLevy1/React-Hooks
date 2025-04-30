import React, { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null); // Create a ref to store the input element

  const handleClick = () => {
    console.log(inputRef.current.value); // Access the current value of the input element using the ref, similar to event.target.value in vanilla JS

    // inputRef.current.value = "Itzhak"; // Change the value of the input element using the ref

    inputRef.current.value = ""; // Delete the value of the input element using the ref

    inputRef.current.focus(); // Focus the input element using the ref
  };

  return (
    <div>
      <h1>Itzhak</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

export default RefTutorial;





// useRef is used to persist values between renders without causing a re-render.

// useRef is a hook that returns a mutable ref object whose current property is initialized to the passed argument (initialValue).
// The returned object will persist for the full lifetime of the component.

// useRef is like a “box” that can hold a mutable value in its .current property. It’s like a “box” that can hold a value that you want to persist between renders.
// You can think of it as a way to store a value that doesn’t cause a re-render when it changes.

// useRef is often used to access a DOM element directly, but it can also be used to store any mutable value.

// useRef is useful when you want to keep track of a value that doesn’t need to trigger a re-render when it changes.
// For example, you might want to keep track of the previous value of a prop or state variable, or you might want to store a reference to a DOM element.

// useRef is also useful for storing a value that you want to persist between renders, but that doesn’t need to trigger a re-render when it changes.
// For example, you might want to keep track of a timer ID or a WebSocket connection.

// useRef is not reactive, so it won’t cause a re-render when the value changes.
// This means that you can use it to store a value that you want to persist between renders, but that doesn’t need to trigger a re-render when it changes.

// useRef is not a replacement for useState. If you want to store a value that needs to trigger a re-render when it changes, you should use useState instead.
// useRef is useful for storing a value that doesn’t need to trigger a re-render when it changes.
