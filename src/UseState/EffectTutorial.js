import React, { useEffect } from "react";

// This component demonstrates the use of useEffect to log a message when the component mounts (after the page loads).
// The useEffect hook is called after the component is rendered, and it runs the provided function.
const EffectTutorial = () => {
  useEffect(() => {
    console.log("Hello World - Component mounted");
  });

  return <div>Hello World</div>; 
};

export default EffectTutorial;


/* 
The message is logged twice because, in development mode with React 18's Strict Mode enabled, React deliberately mounts, unmounts, and re-mounts the component to help catch side effects. 
This causes useEffect to run twice — once after the first mount, and again after the second. 
 */