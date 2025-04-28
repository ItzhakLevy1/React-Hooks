import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;    // newValue temporarily holds what the user typed
    setInputValue(newValue); // React updates inputValue to be equal to newValue
  };

  return (
    <div>
      <input placeholder="Enter your text" onChange={handleChange} />   {/* onChange is a prop that takes a function as an argument. The function is called when the input changes */}
      {inputValue}
    </div>
  );
};

export default StateTutorial;
