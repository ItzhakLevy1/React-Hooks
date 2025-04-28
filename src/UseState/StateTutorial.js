import React, { useState } from "react";

const StateTutorial = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  const handleCounterAndText = () => {
    // Using functional updates to ensure the latest state is used, even if updates are batched or delayed
    setCount((count) => count + 1); 
    setShowText((showText) => !showText);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCounterAndText}>Increment And Toggle Text</button>
      {showText && <p>To be toggled</p>}
    </div>
  );
};

export default StateTutorial;
