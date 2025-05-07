import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

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

  const findLongestName = (comments) => {

    if (!comments) return null;                         // Check if comments is null or undefined, if so return null

    let longestName = "";                               // Initialize the longest name as an empty string 

    for (let i = 0; i < comments.length; i++) {         // Loop through each comment, starting from the first one, up to the last one
      let correntName = comments[i].name;               // Initialized with the name of the current comment
      if (correntName.length > longestName.length) {    // If the current name is longer than the longest name found so far
        longestName = correntName;                      // Update the longest name with the longest current name found so far
      }
    }

    console.log("THIS WAS COMPUTED"); // Now this will be printed only when the data changes + on page reload, and not on every button click
    return longestName;
  };

  // Memoize the result of findLongestName with data as a dependency to avoid recomputing it on every render
  const getLongestName = useMemo(() => findLongestName(data), [data]); 

  return (
    <div className="App">
      <div>{getLongestName}</div>
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
