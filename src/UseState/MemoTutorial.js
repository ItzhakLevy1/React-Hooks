import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

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

    let longestName = ""; // Initialize the longest name as an empty string

    for (let i = 0; i < comments.length; i++) {
      let correntName = comments[i].name; // Initialized with the name of the current comment
      if (correntName.length > longestName.length) {
        // If the current name is longer than the longest name found so far
        longestName = correntName; // Update the longest name with the longest current name found so far
      }
    }

    console.log("THIS WAS COMPUTED"); // This will only be printed when the function is called
    return longestName;
  }, []); // The dependency array is empty because the function doesn't rely on external variables

  return (
    <div className="App">
      <div>{findLongestName(data)}</div> {/* Call the memoized function with the data */}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}


// In this code, the findLongestName function is memoized using useCallback. 
// This means that the function will only be recreated if its dependencies change. 
// Since we have an empty dependency array, the function will not be recreated unless the component is unmounted and remounted. 
// This can help improve performance in certain situations, especially if the function is computationally expensive or if it is passed as a prop to child components.

/* The difference between useMemo and useCallback is that useMemo is used to memoize a value, while useCallback is used to memoize a function. */