import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestNamd = (comments) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let correntName = comments[i].name;
      if (correntName.length > longestName.length) {
        longestName = correntName;
      }
    }

    console.log("THIS WAS COMPUTED");
    return longestName;
  };

  return (
    <div className="App">
      <div>{findLongestNamd(data)}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""}
        Toggle
      </button>
      {toggle &&<h1> toggle </h1>}
    </div>
  );
}
