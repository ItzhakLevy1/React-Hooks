import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
        console.log(response.data);
      });
  }, []); // Empty dependency array means this effect runs only once - when the component mounts

  return <div>Hello World {data}</div>;
};

export default EffectTutorial;
