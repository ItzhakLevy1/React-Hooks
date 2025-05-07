import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

// Child component that only re-renders when props.findLongestName changes
const LongestNameDisplay = React.memo(({ findLongestName, data }) => {
  console.log("Child rendered");
  return <div>{findLongestName(data)}</div>;
});

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  // Memoize the findLongestName function using useCallback
  const findLongestName = useCallback((comments) => {
    if (!comments) return null; // Check if comments is null or undefined, if so return null

    let longestName = ""; 

    for (let i = 0; i < comments.length; i++) {
      let correntName = comments[i].name; 
      if (correntName.length > longestName.length) {
        longestName = correntName; 
      }
    }

    console.log("THIS WAS COMPUTED"); // This will only be printed when the function is called
    return longestName;
  }, []); // The dependency array is empty because the function doesn't rely on external variables

  return (
    <div className="App">
      <LongestNameDisplay findLongestName={findLongestName} data={data} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}

// The LongestNameDisplay component will only re-render when the findLongestName function changes


// 1. Function identity is preserved between renders (due to useCallback).

// 2. The Child component doesn’t re-render unless the data or function reference changes.

// 3. You’ll see that "Child rendered" is logged only when necessary, proving useCallback is doing its job.



// In this code, the findLongestName function is memoized using useCallback. 
// This means that the function will only be recreated if its dependencies change. 
// Since we have an empty dependency array, the function will not be recreated unless the component is unmounted and remounted. 
// This can help improve performance in certain situations, especially if the function is computationally expensive or if it is passed as a prop to child components.

/* The difference between useMemo and useCallback is that useMemo is used to memoize a value, while useCallback is used to memoize a function. */