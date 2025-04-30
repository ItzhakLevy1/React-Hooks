import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <h2>useLayoutEffect vs useEffect</h2>
      <p>Check the console to see the order of execution.</p>
    </div>
  );
};

export default LayoutEffectTutorial;

// useLayoutEffect is similar to useEffect, but it fires before the browser has painted the screen.
// This means that if you need to perform some calculations or DOM manipulations that need to happen before the browser paints the screen
// (and before the screen becomes visible to the user), you should use useLayoutEffect.
// However, it can cause performance issues if overused, so it's best to use it only when necessary.

//In this example, the useLayoutEffect will run first (before the browser paints the screen) and therefore will log "useLayoutEffect" to the console first,
// while the useEffect will run after the browser has painted the screen and therefore will log "useLayoutEffect" to the console second.
