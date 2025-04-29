import React from "react";
import axios from "axios";

const EffectTutorial = () => {
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("API WAS CALLED");
        console.log(response.data);
      });
  };

  return (
    <div>
      Hello World
      <button onClick={fetchData}>Click Me</button>
    </div>
  );
};

export default EffectTutorial;
